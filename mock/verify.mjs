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
const src = readFileSync(join(HERE, '..', 'index.html'), 'utf8');
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
  ['const', 'ADJ_BANDS'], ['const', 'ADJ_PCT'],
  ['function', 'activeCourses'], ['function', 'courseById'], ['function', 'claimsTotals'],
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
ok('four claims paid', t.paid === 4, `got ${t.paid}`);
ok('paid total is $2,774', Math.round(t.paidAmt) === 2774, `got ${t.paidAmt}`);
ok('two claims defended', t.defended === 2, `got ${t.defended}`);
ok('one risk flagged at intake, counted separately', t.intake === 1, `got ${t.intake}`);
ok('intake row excluded from the claim count', t.n === blob.claims.length - 1, `n=${t.n} of ${blob.claims.length}`);
ok('money saved is positive and sane', t.savedAmt > 1000 && t.savedAmt < 20000, `$${t.savedAmt}`);

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
ok('six courses are active', active.length === 6, `got ${active.length}`);
ok('the custom course is one of them', ids.includes('Cmsdtagging'));
ok('the built-in tagging course is gone', !ids.includes('tagging'));
ok('it sits at 03, where tagging was', (active.find(c => c.id === 'Cmsdtagging') || {}).num === '03');
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
const q1 = bestDoc('the Fulton boiler has locked out showing fault code B14 what is it');
ok('boiler fault code → the Fulton manual', /fulton/i.test(q1.title), `got "${q1.title}"`);
const q2 = bestDoc('what does the lease say about the rent review and CPI each March');
ok('rent review → the Bendigo lease', /lease/i.test(q2.title), `got "${q2.title}"`);
const q3 = bestDoc('what is our excess and the bailee liability limit on the insurance policy');
ok('bailee limit → the insurance policy', /meridian|insurance/i.test(q3.title), `got "${q3.title}"`);

console.log(`\n${pass} passed, ${fails.length} failed\n`);
if (fails.length) { fails.forEach(f => console.log('  x ' + f)); console.log(''); process.exit(1); }
