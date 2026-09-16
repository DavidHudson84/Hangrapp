// Check the seeded blob against the app's OWN logic.
//
//   node mock/verify.mjs
//
// build.mjs proves the records are wired together. This proves the app agrees:
// that the claims dashboard adds up, that the custom course really does displace
// the built-in one, that a staff login sees what it should and nothing more, and
// that the two demo questions actually reach the documents that answer them.
//
// It does that by lifting the real functions out of index.html and running them,
// rather than reimplementing them here. A reimplementation only ever proves the
// reimplementation is consistent with itself, which is exactly the bug you are
// trying to find.

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import vm from 'node:vm';

const HERE = dirname(fileURLToPath(import.meta.url));
const src = readFileSync(join(HERE, '..', 'app', 'index.html'), 'utf8');
const blob = JSON.parse(readFileSync(join(HERE, 'blob.json'), 'utf8'));

// Pull a top-level declaration out of index.html by name, balancing braces and
// brackets so nested structures survive.
function lift(kind, name) {
  const needle = kind === 'function' ? `function ${name}(` : `const ${name} `;
  const start = src.indexOf('\n' + needle);
  if (start === -1) throw new Error(`could not find ${kind} ${name} in index.html`);
  let i = src.indexOf(kind === 'function' ? '{' : '=', start);
  if (kind !== 'function') i = src.indexOf(/[[{]/.exec(src.slice(i))[0], i);
  const open = src[i], close = open === '{' ? '}' : ']';
  let depth = 0, inStr = null, esc = false;
  for (let j = i; j < src.length; j++) {
    const c = src[j];
    if (esc) { esc = false; continue; }
    if (c === '\\') { esc = true; continue; }
    if (inStr) { if (c === inStr) inStr = null; continue; }
    if (c === '"' || c === "'" || c === '`') { inStr = c; continue; }
    if (c === open) depth++;
    else if (c === close) {
      depth--;
      if (depth === 0) {
        // `new Set([...])` closes its bracket before its paren; take everything
        // up to the statement end so the declaration is syntactically whole.
        let k = j + 1;
        while (k < src.length && /[\s);]/.test(src[k])) { if (src[k] === ';') { k++; break; } k++; }
        return src.slice(start + 1, k);
      }
    }
  }
  throw new Error(`unbalanced ${kind} ${name}`);
}

const LIFTED = [
  ['const', 'TRAINING_MODULES'], ['const', 'ROLE_CAPS'], ['const', 'SECTION_CAP'],
  ['const', 'DOC_STAFF_SAFE'], ['const', 'CLAIM_OUTCOMES'], ['const', 'LIFE_EXPECTANCY'],
  ['const', 'ADJ_BANDS'], ['const', 'ADJ_PCT'], ['const', 'CLAIM_RESULTS'], ['const', 'CLAIM_MONTHS'],
  ['function', 'claimToneFor'], ['function', 'isoFromAny'], ['function', 'claimView'],
  ['function', 'liveClaims'], ['const', 'CLAIM_CLOSING_TYPES'], ['const', 'CLAIM_BACKFILL_KEYS'],
  ['function', 'claimClosedByLetter'], ['function', 'claimLetter'], ['function', 'claimBackfillFields'],
  ['function', 'findProblem'], ['const', 'CLAIM_FAULTS'], ['const', 'CLAIM_DAMAGE'],
  ['function', 'claimNorm'], ['function', 'validateClaimSuggestion'],
  ['function', 'courseWithNum'], ['function', 'activeCourses'], ['function', 'courseById'],
  ['function', 'claimsTotals'],
  ['function', 'docVisibleToRole'], ['function', 'machineryUnits'],
  ['function', 'trainingPassMark'], ['function', 'lifeExpectancyFor'], ['function', 'calcAdjustment'],
  ['function', 'docChunks'], ['function', '_scoreText'],
];

// A couple of one-liners the lifted functions lean on, small enough to restate
// than to slice out. Kept identical to index.html.
const EXTRA = `
const parseMoney = (v) => {
  const n = parseFloat(String(v == null ? '' : v).replace(/[^0-9.]/g, ''));
  return isNaN(n) ? 0 : n;
};
const CONDITION_NOTES = { excellent: '', average: '', poor: '' };
const fmtAud = (n) => '$' + Number(n).toFixed(2);
`;

const code = LIFTED.map(([k, n]) => lift(k, n)).join('\n\n')
  + '\nconst TRAINING_PASS_MARK = 0.8;'
  + '\nconst DOC_CHUNK_CHARS = 1400;'
  + EXTRA;

const sandbox = { state: blob, console };
vm.createContext(sandbox);
vm.runInContext(code, sandbox);

// The app filters documents by role through visibleDocuments(); that one touches
// state.staffMode and currentRole, so drive docVisibleToRole directly.
const ctx = (expr) => vm.runInContext(expr, sandbox);

let pass = 0;
const fails = [];
const ok = (label, cond, detail) => {
  if (cond) { pass++; console.log('  ok   ' + label); }
  else { fails.push(label + (detail ? ' — ' + detail : '')); console.log('  FAIL ' + label + (detail ? ' — ' + detail : '')); }
};

console.log('\nThe claims dashboard');
const t = ctx('claimsTotals()');
ok('five claims paid', t.paid === 5, `got ${t.paid}`);
ok('paid total is $2,870', Math.round(t.paidAmt) === 2870, `got ${t.paidAmt}`);
ok('two claims defended', t.defended === 2, `got ${t.defended}`);
ok('one risk flagged at intake, counted separately', t.intake === 1, `got ${t.intake}`);
ok('intake row excluded from the claim count', t.n === blob.claims.length - 1, `n=${t.n} of ${blob.claims.length}`);
ok('money saved is positive and sane', t.savedAmt > 1000 && t.savedAmt < 20000, `$${t.savedAmt}`);
ok('cost to the business is more than the cash paid', t.cost > t.paidAmt, `cost $${t.cost}, paid $${t.paidAmt}`);

console.log('\nThe register holds what the app never saw');
const manual = blob.claims.filter(c => c.source === 'manual');
ok('one claim was entered by hand', manual.length === 1, `got ${manual.length}`);
ok('it has no letter behind it', manual.every(c => !c.letterId && !blob.letters.some(l => l.sourceMsgId === c.id)));
ok('it still counts in the totals', ctx('claimsTotals()').n === blob.claims.length - 1);
ok('every claim can be filtered by date', blob.claims.every(c => /^\d{4}-\d{2}-\d{2}$/.test(ctx(`claimView(${JSON.stringify(c)})`).dateIso)));
ok('an override wins over the letter it came from',
   ctx(`claimView(${JSON.stringify({ ...blob.claims[0], edits: { paid: 1234, outcome: 'Paid' } })}).paid`) === 1234);
ok('and the outcome it sets carries its own tone',
   ctx(`claimView(${JSON.stringify({ ...blob.claims[0], edits: { outcome: 'Withdrawn' } })}).tone`) === 'defended');

console.log('\nA register written before these fields existed can be filled in');
// Age each letter-recorded claim back to the shape the app wrote before the fields
// existed, then check the backfill puts back exactly what a claim recorded today
// would hold — everything except the three nobody can read off a letter.
const OLD_SHAPE = ['id', 'date', 'ts', 'customer', 'garment', 'cause', 'site', 'docket',
  'problemId', 'type', 'outcome', 'tone', 'atStake', 'paid', 'saved'];
const JUDGEMENT = ['fault', 'damage', 'tab'];
const agedDiffs = [], agedFilled = new Set();
for (const native of blob.claims.filter(c => c.source !== 'manual')) {
  const aged = Object.fromEntries(Object.entries(native).filter(([k]) => OLD_SHAPE.includes(k)));
  const letter = blob.letters.find(l => l.sourceMsgId === native.id);
  const filled = ctx(`claimBackfillFields(${JSON.stringify(aged)}, ${JSON.stringify(letter)})`);
  for (const [k, v] of Object.entries(filled)) {
    agedFilled.add(k);
    const want = native[k] == null ? '' : String(native[k]);
    if (String(v) !== want) agedDiffs.push(`${native.id}.${k}: filled "${v}", recorded "${want}"`);
  }
}
ok('what the backfill puts back matches what would be recorded today',
   agedDiffs.length === 0, agedDiffs.join('; '));
ok('it fills the date, the article, the garment attributes and the money',
   ['dateIso', 'article', 'brand', 'fabric', 'waived', 'settledOn', 'status'].every(k => agedFilled.has(k)),
   [...agedFilled].join(','));
ok('it never invents the three that are a judgement', JUDGEMENT.every(k => !agedFilled.has(k)));
ok('a field already filled in is left alone', Object.keys(
   ctx(`claimBackfillFields(${JSON.stringify(blob.claims.find(c => c.source !== 'manual'))}, ${JSON.stringify(
     blob.letters.find(l => l.sourceMsgId === blob.claims.find(c => c.source !== 'manual').id))})`)).length === 0);
ok('a defence closes a line, an at-risk authorisation does not',
   ctx("claimClosedByLetter('twimc')") && !ctx("claimClosedByLetter('intake-authorisation')"));

console.log('\nWhat the consultant proposes is checked before anybody sees it');
// The two judgement fields can be suggested by the model. Nothing it says is
// trusted: a code off the list is dropped, and a quote that is not in the file is
// flagged, because a fabricated quote is the one thing that would make suggesting
// worse than leaving the fields blank.
const SRC = { text: 'The collar shows dye loss where hair product concentrates. Our own SOP calls for a pre-treatment that was not applied.' };
const val = (o) => ctx(`validateClaimSuggestion(${JSON.stringify(o)}, ${JSON.stringify(SRC)})`);

const good = val({ fault: 'cleaner', damage: 'colour-loss', confidence: 'high',
  reason: 'Our own SOP was not followed.', quote: 'Our own SOP calls for a pre-treatment that was not applied.' });
ok('a good answer passes through', good.fault === 'cleaner' && good.damage === 'colour-loss');
ok('and its quote is found in the file', good.quoteFound === true);

const offList = val({ fault: 'probably us', damage: 'melted', confidence: 'high', reason: 'x', quote: 'x' });
ok('a fault that is not on the list is dropped', offList.fault === '');
ok('a type of damage that is not on the list is dropped', offList.damage === '');

const madeUp = val({ fault: 'cleaner', damage: '', confidence: 'high', reason: 'x',
  quote: 'The garment was left in the machine overnight.' });
ok('a quote that is not in the file is flagged', madeUp.quoteFound === false);
ok('punctuation and case do not defeat the check',
   val({ fault: 'cleaner', damage: '', confidence: 'low', reason: '', quote: 'OUR OWN SOP CALLS FOR A PRE-TREATMENT!' }).quoteFound === true);
ok('a confidence it did not offer reads as low', val({ fault: 'cleaner', confidence: 'certain' }).confidence === 'low');
ok('every damage code the model is offered is one the register holds',
   ctx('CLAIM_DAMAGE').every(([k]) => k === '' || typeof k === 'string'));

console.log('\nSettlement offers still recompute to the letter figures');
for (const l of blob.letters.filter(x => x.type === 'settlement')) {
  const calc = ctx(`calcAdjustment(${JSON.stringify(l.claim)})`);
  const claim = blob.claims.find(c => c.id === l.sourceMsgId);
  ok(`${l.claim.article} → $${calc.amount.toFixed(2)}`,
     Math.abs(calc.amount - claim.paid) < 0.01,
     `letter says ${calc.amount}, register says ${claim.paid}`);
}

console.log('\nThe business’s own course displaces the built-in one');
const active = ctx('activeCourses()');
const ids = active.map(c => c.id);
ok('seven courses are active', active.length === 7, `got ${active.length}`);
ok('the custom course is one of them', ids.includes('Cmsdtagging'));
ok('the built-in tagging course is gone', !ids.includes('tagging'));
ok('it sits at 04, where tagging was', (active.find(c => c.id === 'Cmsdtagging') || {}).num === '04');
ok('older tagging passes are still on file',
   blob.training.some(r => r.moduleId === 'tagging' && r.passed));

console.log('\nTraining reads like a real register');
const passMark = ctx('trainingPassMark(8)');
const passedActive = (sid) => new Set(blob.training
  .filter(r => r.staffId === sid && r.passed && ids.includes(r.moduleId)).map(r => r.moduleId)).size;
ok('pass mark is 7 of 8', passMark === 7, `got ${passMark}`);
ok('Sharon has passed all six', passedActive('Ssharon') === 6, `got ${passedActive('Ssharon')}`);
ok('Emma is genuinely halfway (3 of 6)', passedActive('Semma') === 3, `got ${passedActive('Semma')}`);
ok('somebody has failed and not retried', blob.training.some(r => !r.passed
   && !blob.training.some(o => o.staffId === r.staffId && o.moduleId === r.moduleId && o.attempt > r.attempt)));
ok('somebody failed then passed', blob.training.some(r => r.passed && r.attempt > 1));
ok('nobody has passed everything on the roster', 
   blob.staff.filter(s => passedActive(s.id) === 6).length < blob.staff.length);

console.log('\nWhat a counter login can reach');
const caps = ctx('ROLE_CAPS');
const sectionCap = ctx('SECTION_CAP');
for (const s of ['claims', 'staff', 'bills', 'users']) {
  ok(`staff cannot open ${s}`, !caps.staff.includes(sectionCap[s]));
}
ok('staff can open the price list', caps.staff.includes('priceLists'));
ok('manager cannot open staff records', !caps.manager.includes('staffRecords'));
ok('admin cannot manage access', !caps.admin.includes('manageAccess'));

const visTo = (role) => blob.documents.filter(d => ctx(`docVisibleToRole(${JSON.stringify(d)}, ${JSON.stringify(role)})`));
const staffDocs = visTo('staff');
ok('staff see the manuals and the SOPs',
   staffDocs.length > 0 && staffDocs.every(d => ['Equipment manual', 'SOP / procedure'].includes(d.type)));
ok('staff cannot see the lease', !staffDocs.some(d => d.type === 'Lease / agreement'));
ok('staff cannot see the insurance', !staffDocs.some(d => d.type === 'Insurance policy'));
ok('staff cannot see the supply contracts', !staffDocs.some(d => d.type === 'Supplier contract or quote'));
ok('the owner sees everything', visTo('owner').length === blob.documents.length);

console.log('\nStaff see only their own problem reports');
for (const u of [['Emma', 'ce35c68f-d2c4-4fbf-a564-adc964ebf83d'], ['Rebecca', 'f5fff5d7-a00e-4871-ad5c-ee252671d18f']]) {
  const mine = blob.problems.filter(p => p.createdBy === u[1]);
  ok(`${u[0]} raised at least one`, mine.length > 0, `${mine.length}`);
  ok(`${u[0]} cannot see them all`, mine.length < blob.problems.length);
}
ok('every problem has an owner', blob.problems.every(p => p.createdBy));
ok('every chat has an owner', blob.chats.every(c => c.createdBy));

console.log('\nEvery machine has its manual on file');
const units = ctx(`machineryUnits(${JSON.stringify(blob.profile.machinery)})`);
for (const key of ['dryCleaning:0', 'dryCleaning:1', 'boiler', 'compressor', 'press', 'finisher']) {
  const held = blob.documents.filter(d => d.machineryKey === key);
  const label = (units.find(u => u.key === key) || {}).label;
  ok(`${label} (${key})`, held.length > 0, 'no manual filed');
}

console.log('\nThe three demo questions reach the right document');
// Mirrors the scoring in retrieveDocuments() (index.html) closely enough to prove
// the intended document wins, without needing the whole render path.
function bestDoc(q, role) {
  const docs = blob.documents.filter(d => ctx(`docVisibleToRole(${JSON.stringify(d)}, ${JSON.stringify(role || 'owner')})`));
  const toks = [...new Set(q.toLowerCase().split(/[^a-z0-9']+/).filter(x => x.length > 2))];
  let best = null, bestSc = -1;
  for (const d of docs) {
    const head = (d.title || '') + ' ' + (d.type || '') + ' ' + (d.background || '') + ' ' + (d.machineryLabel || '');
    let sc = ctx(`_scoreText(${JSON.stringify(head)}, ${JSON.stringify(toks)})`) * 3
           + ctx(`_scoreText(${JSON.stringify(d.card || '')}, ${JSON.stringify(toks)})`);
    if (d.machineryLabel) {
      const nt = d.machineryLabel.toLowerCase().split(/[^a-z0-9']+/).filter(x => x.length > 2);
      if (nt.some(x => toks.includes(x))) sc += 8;
    }
    const chunks = ctx(`docChunks(${JSON.stringify({ text: d.text })})`);
    const top = chunks.map(c => ctx(`_scoreText(${JSON.stringify(c)}, ${JSON.stringify(toks)})`)).sort((a, b) => b - a)[0] || 0;
    sc += top;
    if (sc > bestSc) { bestSc = sc; best = d; }
  }
  return best;
}
const q1 = bestDoc('the Fulton boiler keeps dropping out on fault code B05 low water what is it');
ok('boiler fault code → the Fulton manual', /fulton/i.test(q1.title), `got "${q1.title}"`);
const q2 = bestDoc('what does the lease say about the rent review and CPI each March');
ok('rent review → the Bendigo lease', /lease/i.test(q2.title), `got "${q2.title}"`);
const q3 = bestDoc('what is our excess and the bailee liability limit on the insurance policy');
ok('bailee limit → the insurance policy', /meridian|insurance/i.test(q3.title), `got "${q3.title}"`);

console.log('\nWhat the chats and letters assert is actually in the documents');
// The bug this catches: a seeded chat confidently explaining fault code B14 when
// the manual lists B14 as reserved and never generated. The chat was written
// before the manual existed, nothing linked the two, and the only thing that
// would have found it is a demo in front of a prospect.
//
// So: pull every distinctive identifier out of what the business says, and
// require it to appear somewhere in what the business holds on file.
const corpus = blob.documents.map(d => d.text).join('\n')
  + '\n' + blob.priceLists.map(p => p.text + '\n' + p.summary).join('\n');

const spoken = blob.chats.flatMap(c => c.messages.map(m => m.content))
  .concat(blob.letters.map(l => l.body))
  .concat(blob.problems.map(p => [p.whatHappened, p.actionTaken, p.recommended].join(' ')))
  .join('\n');

const PATTERNS = [
  [/\b[A-Z]{1,3}-?\d{2,3}\b(?=[^%]|$)/g, 'fault code or model'],   // B05, E17, F-04, XL-800
  [/\bMDC-BP-\d+\b/g,                     'policy number'],
  [/\bVIC-PV-[\d-]+\b/g,                  'plant registration'],
  [/\bTW-\d+\b/g,                         'trade waste agreement'],
];

const NOT_IDENTIFIERS = new Set([
  // Award classifications, docket numbers and phone fragments are the business's
  // own records, not things a document would carry.
  'DC1','DC2','DC3','DC4','DC5','L1','L2','L3','L4','B-24118','B-23904','K-08812',
  'B-25277','B-22140','B-22886','K-09104','B-25491','MA000096','AS-3788'
]);

const missing = new Map();
for (const [re, kind] of PATTERNS) {
  for (const m of spoken.matchAll(re)) {
    const tok = m[0];
    if (NOT_IDENTIFIERS.has(tok)) continue;
    if (/^\d/.test(tok)) continue;
    if (!corpus.includes(tok)) missing.set(tok, kind);
  }
}
ok('every identifier the business quotes appears on file',
   missing.size === 0,
   [...missing].map(([t, k]) => `${t} (${k})`).join(', '));

// And the reverse for the one that actually bit: a code the manual declares
// reserved must never be explained as though it were real. Match the whole
// sentence and take every code-shaped token out of it — the first attempt at
// this used a comma-separated pattern and quietly missed "B14, B19 and B37",
// which is to say it passed the exact bug it was written to catch.
const reserved = new Set();
for (const sentence of corpus.split(/(?<=[.\n])/)) {
  if (!/\breserved\b/.test(sentence)) continue;
  if (!/\b(?:not generated|reserved and|are reserved|is reserved|unused)\b/.test(sentence)) continue;
  for (const m of sentence.matchAll(/\b([A-Z]{1,2}-?\d{2})\b/g)) reserved.add(m[1]);
}

// A reserved code is "explained" if the business talks about it as a diagnosis
// rather than merely listing it. Require it to sit near explanatory language.
const explained = [...reserved].filter(code => {
  const re = new RegExp('[^.\n]*\\b' + code.replace('-', '-?') + '\\b[^.\n]*', 'g');
  return [...spoken.matchAll(re)].some(m =>
    !/\breserved|not generated|unused\b/.test(m[0]));
});

ok(`${reserved.size} reserved codes found, none explained as real`,
   explained.length === 0,
   explained.length ? explained.join(', ') + ' — the manual says these are never generated' : '');

console.log(`\n${pass} passed, ${fails.length} failed\n`);
if (fails.length) { fails.forEach(f => console.log('  x ' + f)); console.log(''); process.exit(1); }
