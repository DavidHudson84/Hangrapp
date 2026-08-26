// Turn mock/blob.json into SQL that loads it onto the tenant.
//
//   node mock/emit-sql.mjs
//
// Why this is not one statement: the blob is comfortably over half a megabyte,
// and a single UPDATE carrying all of it is a query string that tooling, logs and
// connection buffers all have an opinion about. So the load is broken into
// statements of at most ~70 KB, each one appending to a jsonb array or setting a
// single key. They are ordinary UPDATEs against one row and are safe to run one
// at a time, in order.
//
// Every statement is idempotent in the sense that re-running the whole set from
// 01 onwards reproduces the same blob: 01 resets the arrays to empty before the
// appends begin. Running a single append file twice would double that array, so
// run the set, not a file.

import { readFileSync, writeFileSync, readdirSync, unlinkSync, existsSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const HERE = dirname(fileURLToPath(import.meta.url));
const SQL = join(HERE, 'sql');
const KAREN = '9fd9feee-078b-4811-81ce-8c1558efa005';
const MAX = 70 * 1024;

const blob = JSON.parse(readFileSync(join(HERE, 'blob.json'), 'utf8'));

if (!existsSync(SQL)) mkdirSync(SQL);
// Clear previously generated files; 00-users.sql and 99-teardown.sql are hand
// written and stay.
for (const f of readdirSync(SQL)) {
  if (/^\d\d-(?!users)/.test(f) && f.endsWith('.sql') && !f.startsWith('99')) unlinkSync(join(SQL, f));
}

const TARGET = `(select business_id from public.memberships where user_id = '${KAREN}')`;

// $j$ …dollar quoting… $j$ needs a tag that cannot appear in the payload.
function quote(json) {
  let tag = 'j';
  while (json.includes('$' + tag + '$')) tag += 'j';
  return '$' + tag + '$' + json + '$' + tag + '$';
}

const files = [];
const add = (name, body) => files.push({ name, body });

// ---- 01: the scalars, and empty arrays ready to be appended to.
{
  const scalars = {
    profile: blob.profile,
    onboardingComplete: blob.onboardingComplete,
    activeChatId: blob.activeChatId,
    staffMode: blob.staffMode,
    staffSessionStart: blob.staffSessionStart,
    staff: blob.staff,
    hiddenCourses: blob.hiddenCourses,
    // Arrays that get appended to below start empty, so a re-run replaces
    // rather than doubles.
    chats: [], bills: [], claims: [], problems: [], letters: [],
    training: [], customCourses: [], documents: [], priceLists: []
  };
  add('01-base', [
    '-- The profile, the roster and the frame. Everything else appends onto this,',
    '-- so this file resets the arrays and must run first.',
    `update public.businesses`,
    `   set data = ${quote(JSON.stringify(scalars))}::jsonb,`,
    `       name = ${quote(blob.profile.businessName)}`,
    ` where id = ${TARGET};`
  ].join('\n'));
}

// ---- Append each array in chunks that fit inside MAX.
function appendArray(key, items, label) {
  if (!items.length) return;
  let batch = [], n = 0, part = 1;
  const flush = () => {
    if (!batch.length) return;
    const json = JSON.stringify(batch);
    add(`${String(n).padStart(2, '0')}-${key}${part > 1 || items.length > batch.length ? '-' + part : ''}`, [
      `-- ${label}${part > 1 ? ` (part ${part})` : ''} — ${batch.length} of ${items.length}`,
      `update public.businesses`,
      `   set data = jsonb_set(data, '{${key}}',`,
      `       coalesce(data->'${key}', '[]'::jsonb) || ${quote(json)}::jsonb)`,
      ` where id = ${TARGET};`
    ].join('\n'));
    batch = []; part++;
  };
  // n is set per key below; kept out of flush's signature for readability.
  n = ORDER[key];
  for (const item of items) {
    const size = JSON.stringify(item).length;
    if (size > MAX) {
      // One record bigger than a whole batch — a 60 KB manual. Give it its own.
      flush();
      batch = [item];
      flush();
      continue;
    }
    if (JSON.stringify([...batch, item]).length > MAX) flush();
    batch.push(item);
  }
  flush();
}

const ORDER = {
  staff: 2, bills: 3, problems: 4, chats: 5, letters: 6, claims: 7,
  training: 8, customCourses: 9, priceLists: 10, documents: 11
};

appendArray('bills',        blob.bills,        'Utility bills');
appendArray('problems',     blob.problems,     'Problem solver reports');
appendArray('chats',        blob.chats,        'Chat threads');
appendArray('letters',      blob.letters,      'Letters');
appendArray('claims',       blob.claims,       'Claims register');
appendArray('training',     blob.training,     'Training records');
appendArray('customCourses',blob.customCourses,'The business’s own training course');
appendArray('priceLists',   blob.priceLists,   'Price list');
appendArray('documents',    blob.documents,    'Document library');

// ---- The last file re-states activeChatId, which had to wait for the chats.
add('12-finish', [
  '-- Point the app at a chat that now exists, and check what landed.',
  `update public.businesses`,
  `   set data = jsonb_set(data, '{activeChatId}', ${quote(JSON.stringify(blob.activeChatId))}::jsonb)`,
  ` where id = ${TARGET};`,
  '',
  'select',
  ...Object.keys(ORDER).map(k =>
    `  jsonb_array_length(coalesce(data->'${k}', '[]'::jsonb)) as ${k.toLowerCase()},`),
  `  pg_column_size(data) as data_bytes`,
  `  from public.businesses where id = ${TARGET};`
].join('\n'));

// ---- Write them out, numbered in run order.
let i = 1;
const written = [];
for (const f of files) {
  const name = String(i).padStart(2, '0') + '-' + f.name.replace(/^\d+-/, '') + '.sql';
  writeFileSync(join(SQL, name), f.body + '\n');
  written.push({ name, bytes: f.body.length });
  i++;
}

const total = written.reduce((s, f) => s + f.bytes, 0);
console.log(`\n${written.length} SQL files, ${(total / 1024).toFixed(0)} KB total\n`);
for (const f of written) console.log('  ' + f.name.padEnd(28) + (f.bytes / 1024).toFixed(1).padStart(7) + ' KB');
const over = written.filter(f => f.bytes > MAX + 4096);
if (over.length) { console.log('\nToo large: ' + over.map(f => f.name).join(', ')); process.exit(1); }
console.log('');
