// Assemble the mock tenant's state blob from mock/data/ and mock/documents/.
//
//   node mock/build.mjs            build, validate, write blob.json
//   node mock/build.mjs --report   the same, but print the document size table
//
// The validation at the bottom is the point of this file. Nothing in Postgres
// checks that a claim points at a real letter, that a manual is filed against a
// machine that exists, or that a training record names a course anybody can sit.
// If those are wrong the app does not error — it renders an empty panel, which in
// a demo is worse than a crash because nobody notices until a prospect does.

import { readFileSync, writeFileSync, existsSync, readdirSync, mkdirSync, rmSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

import { PROFILE, machineryKeys } from './data/profile.mjs';
import { STAFF } from './data/staff.mjs';
import { CASES, buildRecords } from './data/casework.mjs';
import { HR_LETTERS, buildHrLetters } from './data/hr.mjs';
import { TRAINING } from './data/training.mjs';
import { BILLS } from './data/bills.mjs';
import { CUSTOM_COURSE, HIDDEN_COURSES } from './data/courses.mjs';
import { STANDALONE_CHATS } from './data/chats.mjs';
import { USERS, UID } from './data/identity.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const REPORT = process.argv.includes('--report');

// Matches index.html:7372 and :7382. Not negotiable from this side — the app
// slices anything longer and records how much it dropped.
const DOC_TEXT_CAP   = 20000;
const DOC_MANUAL_CAP = 60000;
const capFor = (type) => type === 'Equipment manual' ? DOC_MANUAL_CAP : DOC_TEXT_CAP;

const BUILT_IN_MODULES = ['acl', 'intake', 'tagging', 'reading', 'fault', 'using-hangr'];

const T = (iso) => new Date(iso + 'T09:00:00+10:00').getTime();
const uploadedStr = (iso) => new Date(iso + 'T09:00:00+10:00')
  .toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Australia/Melbourne' });

// ---------------------------------------------------------------- documents
//
// splitAt is how an over-length document is handled. A prefix slice would be the
// easy answer and the wrong one: on a manual the fault codes and the service
// schedule live in the back half, and those are the only pages anyone ever asks
// about. So a long document becomes two filed records cut at a real section
// boundary, both attached to the same machine, both with their own knowledge
// card. Nothing is lost and the app needs no change.

const DOCS = [
  { slug: 'manual-union-xl800', shortTitle: 'Union XL-800 manual', type: 'Equipment manual',
    title: 'Union XL-800 dry cleaning machine — operations and maintenance manual',
    fileName: 'Union_XL-800_Operations_Manual_Rev4.pdf',
    machineryKey: 'dryCleaning:0', machineryLabel: 'Union XL-800',
    uploaded: '2026-03-02',
    background: 'The 25 kg perc machine in the Bendigo plant, installed March 2019, serial UXL8-2019-0447. Manual revision 4, January 2024. This is the machine most of our volume goes through.',
    splitAt: /^#+ .*(fault code|troubleshoot)/im },

  { slug: 'manual-realstar-hm450', shortTitle: 'Realstar HM-450 manual', type: 'Equipment manual',
    title: 'Realstar HM-450 hydrocarbon machine — operator and service manual',
    fileName: 'Realstar_HM-450_Operator_Service_Manual_Rev2.pdf',
    machineryKey: 'dryCleaning:1', machineryLabel: 'Realstar HM-450',
    uploaded: '2023-08-14',
    background: 'The 18 kg hydrocarbon machine, installed August 2023, serial RHM45-23-1182. Bought for beading, sequins, leather trim and anything the perc is too aggressive for. Hydrocarbon is a flammable liquid, so the safety sections here are not optional reading.',
    splitAt: /^#+ .*(fault code|troubleshoot)/im },

  { slug: 'manual-fulton-fb030', shortTitle: 'Fulton FB-030 boiler manual', type: 'Equipment manual',
    title: 'Fulton FB-030 steam boiler — installation, operation and maintenance manual',
    fileName: 'Fulton_FB-030_IOM_Rev7.pdf',
    machineryKey: 'boiler', machineryLabel: 'Fulton FB-030',
    uploaded: '2021-06-18',
    background: 'The 30 hp gas-fired steam boiler, installed 2014, refurbished 2021. Registered pressure vessel VIC-PV-118-4470, registration expires 30 June 2027. Statutory obligations attach to this machine that do not attach to anything else in the plant.',
    splitAt: /^#+ .*(fault code|troubleshoot)/im },

  { slug: 'manual-pilot-k25', shortTitle: 'Pilot K25 compressor manual', type: 'Equipment manual',
    title: 'Pilot K25 air compressor — operation and maintenance manual',
    fileName: 'Pilot_K25_Operation_Maintenance_Rev3.pdf',
    machineryKey: 'compressor', machineryLabel: 'Pilot K25',
    uploaded: '2019-11-05',
    background: '18.5 kW rotary screw compressor with refrigerated dryer and 500 L receiver, installed 2019, serial PK25-19-0883. Feeds the presses, the finishers and the conveyor. The air quality section matters — oil or water carried over to a press marks a garment, and that becomes a claim.',
    splitAt: /^#+ .*(fault code|troubleshoot)/im },

  { slug: 'manual-sankosha-press-line', shortTitle: 'Sankosha press line manual', type: 'Equipment manual',
    title: 'Sankosha press line — shirt unit, utility press, trouser topper and legger',
    fileName: 'Sankosha_Press_Line_Manual_Rev5.pdf',
    machineryKey: 'press', machineryLabel: 'Sankosha',
    uploaded: '2022-04-11',
    background: 'The four Sankosha machines in the press room: LP-580 shirt unit (about 600 shirts a week), UP-120 utility press, TT-240 trouser topper, TL-260 legger. The finishing quality fault table is the section we use most.',
    splitAt: /^#+ .*(fault code|troubleshoot)/im },

  { slug: 'manual-trevil-finishing', shortTitle: 'Trevil finishing line manual', type: 'Equipment manual',
    title: 'Trevil finishing line — steam-air finisher, form finisher and spotting board',
    fileName: 'Trevil_Finishing_Line_Manual_Rev3.pdf',
    machineryKey: 'finisher', machineryLabel: 'Trevil',
    uploaded: '2020-09-23',
    background: 'Diamant SA-90 cabinet finisher, Princess FF-300 form finisher and Spotmaster SB-40 spotting board. The spotting section carries the stain treatment table and the fibre cautions, which is what the counter asks about.',
    splitAt: /^#+ .*(fault code|troubleshoot)/im },

  { slug: 'lease-bendigo', shortTitle: 'Bendigo shop lease', type: 'Lease / agreement',
    title: 'Retail premises lease — Shop 4, 118 Hargreaves Street, Bendigo',
    fileName: 'Lease_Shop4_Hargreaves_St_Executed.pdf',
    staffVisible: false, uploaded: '2024-02-26',
    background: 'The Bendigo lease. Five years from 1 March 2024 with a five year option, base rent $58,400 plus GST reviewed to CPI each 1 March. Landlord is the Rowe Family Trust through Castleton Property Group. Retail Leases Act 2003 applies. The environmental and plant clauses are the ones that matter to us.',
    splitAt: /^#+ *(1[0-9]|[89])[.． ]/m },

  { slug: 'licence-kangaroo-flat', shortTitle: 'Kangaroo Flat licence', type: 'Lease / agreement',
    title: 'Shopping centre licence — Shop 12, Lansell Square, Kangaroo Flat',
    fileName: 'Licence_Shop12_Lansell_Square_Executed.pdf',
    staffVisible: false, uploaded: '2024-06-24',
    background: 'The Kangaroo Flat drop store. A licence, not a retail lease, which matters. Three years from 1 July 2024, $21,600 plus GST plus 4% of turnover above $180,000. Agency only — no plant, no cleaning on site.',
    splitAt: /^#+ *(1[0-9]|[89])[.． ]/m },

  { slug: 'insurance-business-pack', shortTitle: 'Meridian business pack', type: 'Insurance policy',
    title: 'Business pack insurance — Meridian policy MDC-BP-4471822',
    fileName: 'Meridian_Business_Pack_MDC-BP-4471822_Schedule_and_Wording.pdf',
    staffVisible: false, uploaded: '2025-09-24',
    background: 'Our business pack through Hargreaves & Locke. Renews 30 September 2026 — that is close. $2,500 standard excess. The bailee\'s liability section is the one that covers customers\' garments: $50,000 any one event with a $25,000 inner limit per garment.',
    splitAt: /^#+ .*(general condition|exclusion|making a claim)/im },

  { slug: 'boiler-inspection-registration', shortTitle: 'Boiler inspection report', type: 'Certificate / registration',
    title: 'Pressure equipment inspection report and registration — Fulton FB-030',
    fileName: 'Goldfields_PV_Inspection_VIC-PV-118-4470_2026.pdf',
    machineryKey: 'boiler', machineryLabel: 'Fulton FB-030',
    uploaded: '2026-06-26',
    background: 'The annual AS 3788 external inspection, carried out 24 June 2026 by Goldfields Plant Inspection. Registration VIC-PV-118-4470 expires 30 June 2027. Two items need action — the gauge glass gland and the blowdown valve packing — and the report notes gaps in our daily logs in May.',
    splitAt: /^#+ .*(appendix|appendices|test data)/im },

  { slug: 'supply-solvent-chemistry', shortTitle: 'Solvex supply agreement', type: 'Supplier contract or quote',
    title: 'Solvent and process chemistry supply agreement — Solvex Chemicals',
    fileName: 'Solvex_Supply_Agreement_SVX-2024-0318.pdf',
    staffVisible: false, uploaded: '2024-04-03',
    background: 'Solvex supply agreement SVX-2024-0318, from 1 April 2024. Perc at $1,850 a drum, minimum four drums a year, 60 days notice to end it. Includes the prescribed industrial waste removal through Sovereign Environmental. Price reviews each 1 April, capped at CPI plus 3%.',
    splitAt: /^#+ .*(waste|payment|termination|annexure)/im },

  { slug: 'supply-consumables', shortTitle: 'Trentham consumables agreement', type: 'Supplier contract or quote',
    title: 'Consumables supply agreement and price list — Trentham Packaging',
    fileName: 'Trentham_Consumables_Agreement_TPS-MSD-2025.pdf',
    staffVisible: false, uploaded: '2025-02-05',
    background: 'Trentham agreement TPS-MSD-2025 from 1 February 2025 — hangers, poly, tickets, packaging, press pads and covers, counter supplies. Includes our branded poly and gown bags, minimum print run 5,000. Weekly standing order with a top-up.',
    splitAt: /^#+ .*(rebate|return|branded|payment|annexure|terms)/im },

  { slug: 'compliance-epa-environmental', shortTitle: 'Environmental compliance manual', type: 'Council / EPA / compliance',
    title: 'Environmental compliance manual — Bendigo plant',
    fileName: 'MSDC_Environmental_Compliance_Manual_v3.pdf',
    uploaded: '2026-02-16',
    background: 'Our own environmental compliance manual for the Bendigo plant — the general environmental duty under the Environment Protection Act 2017, solvent storage and bunding, prescribed industrial waste, trade waste on Coliban agreement TW-4471, and the spill response. Karen is accountable, Peter is the day-to-day duty holder.',
    splitAt: /^#+ .*(spill|incident|monitoring|training|calendar|appendix)/im },

  { slug: 'sop-counter-intake', shortTitle: 'SOP 01 — counter intake', type: 'SOP / procedure',
    title: 'SOP 01 — Counter intake, inspection and at-risk tagging',
    fileName: 'SOP01_Counter_Intake_v4.pdf',
    uploaded: '2026-03-01',
    background: 'How we take a garment in at both sites. Version 4, effective 1 March 2026. This is the procedure the "Tagging garments the Main Street way" training course was written from.',
    splitAt: /^#+ .*(at-risk|declin|handover|drop store|common failure|appendix)/im },

  { slug: 'sop-complaint-handling', shortTitle: 'SOP 02 — complaint handling', type: 'SOP / procedure',
    title: 'SOP 02 — Handling a complaint, assessing a claim and escalating it',
    fileName: 'SOP02_Complaint_Handling_v3.pdf',
    uploaded: '2026-03-01',
    background: 'What happens when someone puts a garment on the counter unhappy. Version 3, effective 1 March 2026. Counter staff take the report, Sharon assesses, Karen decides anything over $250 or anything going in writing.',
    splitAt: /^#+ .*(fair claims|four outcome|insurance|escalat|record|learning|appendix)/im },

  { slug: 'brand-standards', shortTitle: 'Brand standards', type: 'Other',
    title: 'Brand and marketing standards',
    fileName: 'MSDC_Brand_Standards_2026.pdf',
    uploaded: '2026-01-20',
    background: 'Logo, colour, type, voice and how we present ourselves — shopfronts, poly, dockets, the van, the website and reviews. Also the counter script and the rule that anything going to a customer about a claim is written by Karen or Sharon.',
    splitAt: /^#+ .*(application|customer-facing|digital|photograph|counter script|approval)/im }
];

// ------------------------------------------------------------------ helpers

function readDoc(slug) {
  const p = join(HERE, 'documents', slug + '.md');
  if (!existsSync(p)) return null;
  return readFileSync(p, 'utf8').trim();
}

// Cards are keyed by document id, not by source file, because a long document
// becomes several documents and each part needs a card describing that part.
function readCard(docId) {
  const p = join(HERE, 'cards', docId + '.txt');
  return existsSync(p) ? readFileSync(p, 'utf8').trim() : '';
}

// A card written against an older version of a document is the quiet failure
// mode here: the build still passes, the library still looks full, and the
// consultant confidently quotes an excess that changed three edits ago. Compare
// the card's mtime against the source document's and say so.
function cardIsStale(docId, slug) {
  const card = join(HERE, 'cards', docId + '.txt');
  const doc  = join(HERE, 'documents', slug + '.md');
  if (!existsSync(card) || !existsSync(doc)) return false;
  return statSync(card).mtimeMs < statSync(doc).mtimeMs;
}

// The exact text each document record will hold, written out so a card can be
// written against what is actually stored rather than against the source file.
// Without this the card for "part 2" would be guesswork about where the cut fell.
const PARTS = join(HERE, 'parts');
rmSync(PARTS, { recursive: true, force: true });
mkdirSync(PARTS, { recursive: true });

// Fit a document to the cap by cutting it into parts at real section
// boundaries. A prefix slice would be the easy answer and the wrong one: on a
// manual the fault codes and the service schedule live in the back half, and
// those are the only pages anyone ever asks about. So a long document becomes
// several filed records, each cut at a heading, all attached to the same
// machine, each with its own knowledge card. Nothing is lost and the app needs
// no change.
//
// Greedy: walk the sections, accumulate until the next one would not fit, cut.
// `preferAt` nudges the first cut towards a named boundary (the fault code
// table, the general conditions) so part 1 ends where a reader would expect.
function fitDocument(text, cap, preferAt) {
  if (text.length <= cap) return [text];

  // Section starts: every markdown heading, plus the top of the file.
  const starts = [0];
  const re = /^#{1,4} +\S/gm;
  let m;
  while ((m = re.exec(text)) !== null) if (m.index > 0) starts.push(m.index);
  starts.push(text.length);

  // A heading the caller would rather cut at, if one falls in a workable place.
  let preferred = -1;
  if (preferAt) {
    const pre = new RegExp(preferAt.source, preferAt.flags.includes('g') ? preferAt.flags : preferAt.flags + 'g');
    let pm;
    while ((pm = pre.exec(text)) !== null) {
      if (pm.index <= cap && pm.index > cap * 0.45) preferred = pm.index;
      if (pm.index === pre.lastIndex) pre.lastIndex++;
    }
  }

  // How many parts this needs, then aim for even ones. Cutting greedily at the
  // last heading that fits packs the front and leaves a stub at the back — a
  // 1,400-character "part 3" that says nothing and clutters the library.
  //
  // Aiming for even parts can leave the final remainder a little over the cap,
  // because the cut lands on the nearest heading rather than exactly on target.
  // So try n parts, and if anything still does not fit, try n+1.
  const plan = (n) => {
    const target = text.length / n;
    const cuts = [];
    for (let i = 1; i < n; i++) {
      const want = (i === 1 && preferred > 0) ? preferred : Math.round(target * i);
      const prev = cuts.length ? cuts[cuts.length - 1] : 0;
      let best = -1, bestGap = Infinity;
      for (const st of starts) {
        if (st <= prev || st >= text.length) continue;
        if (st - prev > cap) continue;
        const gap = Math.abs(st - want);
        if (gap < bestGap) { bestGap = gap; best = st; }
      }
      if (best === -1) {
        const window = text.slice(prev, prev + cap);
        const para = window.lastIndexOf('\n\n');
        best = prev + (para > cap * 0.5 ? para : cap);
      }
      cuts.push(best);
    }
    const out = [];
    let from = 0;
    for (const c of cuts) { out.push(text.slice(from, c)); from = c; }
    out.push(text.slice(from));
    return out;
  };

  let parts = null;
  for (let n = Math.ceil(text.length / cap); n <= Math.ceil(text.length / cap) + 4; n++) {
    const attempt = plan(n);
    if (attempt.every(p => p.trim().length <= cap)) { parts = attempt; break; }
  }
  // Nothing fitted on a heading boundary — fall back to hard cuts so the tail
  // is still kept rather than dropped.
  if (!parts) {
    parts = [];
    for (let i = 0; i < text.length; i += cap) parts.push(text.slice(i, i + cap));
  }

  return parts.map(p => p.trim()).filter(Boolean);
}

// Build a part's title out of the headings inside it: what this part actually
// covers, in the document's own words.
//
// This is not cosmetic. retrieveDocuments() scores a document's title at three
// times the weight of its card, so a part called "part 2 of 3" carries no signal
// and the fault-code half of a manual stops surfacing for a question about a
// fault code. Naming the sections puts those words back where they count.
function partTitle(d, text, i, n) {
  const base = d.shortTitle || d.title;
  const baseKey = base.toLowerCase().replace(/[^a-z0-9]+/g, '');

  const tidy = (h) => {
    let t = h.replace(/^\**\s*/, '').replace(/\s*\**$/, '')
             .replace(/^(?:section|clause|part|item)\s+/i, '')
             // Clause numbering in every shape these documents use: 8.4, GC1.,
             // A7., D.3 — all of it noise once the heading is out of context.
             .replace(/^(?:[A-Z]{1,3}\s?\d+(?:\.\d+)*|\d+(?:\.\d+)*)[.．):]?(?=\s)\s*/, '')
             .replace(/\s*\(Form [A-Z0-9-]+\)\s*$/i, '')
             .replace(/\s*[—-]\s*$/, '')
             .trim();
    // Documents shout their front matter. Title-case it, but leave anything with
    // a digit in it alone — FB-030 and SB-40 are model numbers, not sentences.
    if (t === t.toUpperCase() && /[A-Z]{4}/.test(t)) {
      t = t.split(/(\s+)/).map(w => {
        if (/\d/.test(w) || w.length <= 1) return w;
        if (/^(ACN|ABN|SOP|EPA|WHS|PIW|GST|CPI|SDS|PPE)$/.test(w)) return w;
        const lower = w.toLowerCase();
        // Small words stay small unless they open the heading.
        if (/^(and|or|of|to|the|for|in|on|at|by|a|an|with)$/.test(lower)) return lower;
        return w[0] + lower.slice(1);
      }).join('');
      t = t.replace(/^[a-z]/, c => c.toUpperCase());
    }
    return t;
  };

  const heads = [...text.matchAll(/^#{1,3} +(.+?)\s*$/gm)]
    .map(m => tidy(m[1]))
    .filter(h => h.length > 3 && h.length < 64)
    // Drop a heading that just restates the document — "UNION XL-800" under
    // "Union XL-800 manual" tells a reader nothing they did not have.
    .filter(h => {
      const k = h.toLowerCase().replace(/[^a-z0-9]+/g, '');
      return !baseKey.includes(k) && !k.includes(baseKey);
    });

  if (!heads.length) return `${base} — part ${i + 1} of ${n}`;

  // Three headings spread across the part reads like a volume label and carries
  // three times the retrievable words of a single one.
  const picks = [...new Set(heads.length <= 3
    ? heads
    : [heads[0], heads[Math.floor(heads.length / 2)], heads[heads.length - 1]])];

  return `${base} — ${picks.join(', ')}`;
}

const fail = [];
const warn = [];
const check = (cond, msg) => { if (!cond) fail.push(msg); };

// ---------------------------------------------------------------- documents

const documents = [];
const docRows = [];

for (const d of DOCS) {
  const raw = readDoc(d.slug);
  if (raw === null) { fail.push(`missing document file: mock/documents/${d.slug}.md`); continue; }

  const cap = capFor(d.type);
  const parts = fitDocument(raw, cap, d.splitAt);

  parts.forEach((text, i) => {
    const multi = parts.length > 1;
    // A part's title is built from the headings actually inside it. Hand-written
    // titles were the first attempt and they went stale the moment a document
    // grew and split three ways instead of two — labelling part 2 "general
    // conditions" when part 2 had become the middle of the schedule.
    //
    // This is not cosmetic. retrieveDocuments() scores the title at three times
    // the weight of the card (index.html:2!), so a part called "part 2 of 3"
    // carries no signal at all and the fault-code half of a manual stops
    // surfacing for a question about a fault code.
    const title = multi ? partTitle(d, text, i, parts.length) : d.title;
    const docId = 'D' + d.slug + (multi ? '-' + (i + 1) : '');
    const card  = readCard(docId);
    if (!card) warn.push(`no knowledge card for ${docId}`);
    else if (cardIsStale(docId, d.slug)) warn.push(`card for ${docId} is older than ${d.slug}.md — rewrite it or it describes a document that no longer exists`);
    writeFileSync(join(PARTS, docId + '.txt'), text);

    documents.push({
      id: docId,
      title,
      type: d.type,
      background: d.background,
      text,
      truncatedFrom: 0,
      machineryKey: d.machineryKey || null,
      machineryLabel: d.machineryLabel || '',
      staffVisible: d.staffVisible !== false,
      card,
      fileName: multi ? d.fileName.replace(/\.pdf$/, `_part${i + 1}.pdf`) : d.fileName,
      size: Buffer.byteLength(text, 'utf8'),
      createdAt: T(d.uploaded),
      uploadedAt: uploadedStr(d.uploaded)
    });

    docRows.push({ slug: d.slug, part: multi ? i + 1 : '', chars: text.length, cap, card: card ? 'yes' : 'MISSING' });
  });
}

// ------------------------------------------------------------------ letters

function readLetterBodies() {
  const dir = join(HERE, 'letters');
  const out = {};
  if (!existsSync(dir)) return out;
  for (const f of readdirSync(dir)) {
    if (!f.endsWith('.txt')) continue;
    const body = readFileSync(join(dir, f), 'utf8').trim();
    if (f.endsWith('.q.txt'))      out['chat:' + f.slice(0, -6) + ':q'] = body;
    else if (f.endsWith('.a.txt')) out['chat:' + f.slice(0, -6) + ':a'] = body;
    else                           out[f.slice(0, -4)] = body;
  }
  return out;
}

const bodies = readLetterBodies();

let problems = [], caseChats = [], caseLetters = [], claims = [];
try {
  ({ problems, chats: caseChats, letters: caseLetters, claims } = buildRecords(bodies));
} catch (e) {
  fail.push('casework: ' + e.message);
}

let hrLetters = [];
try { hrLetters = buildHrLetters(bodies); } catch (e) { fail.push('hr: ' + e.message); }

const letters = [...caseLetters, ...hrLetters].sort((a, b) => b.createdAt - a.createdAt);
const chats = [...caseChats, ...STANDALONE_CHATS].sort((a, b) => b.createdAt - a.createdAt);

// --------------------------------------------------------------- price list

const priceLists = [];
{
  const p = join(HERE, 'documents', 'price-list-2026.md');
  const s = join(HERE, 'documents', 'price-list-2026.summary.txt');
  if (!existsSync(p)) fail.push('missing mock/documents/price-list-2026.md');
  else {
    const text = readFileSync(p, 'utf8').trim();
    const summary = existsSync(s) ? readFileSync(s, 'utf8').trim() : '';
    if (!summary) warn.push('no summary for the price list');
    if (text.length > DOC_TEXT_CAP) fail.push(`price list is ${text.length.toLocaleString()} chars, over the ${DOC_TEXT_CAP.toLocaleString()} cap`);
    priceLists.push({
      id: 'Ppricelist2026',
      title: 'Retail price list — effective 1 July 2026',
      tag: 'Standard',
      fileName: 'MSDC_Price_List_July_2026.pdf',
      summary,
      text: text.slice(0, DOC_TEXT_CAP),
      createdAt: T('2026-06-28'),
      uploadedAt: uploadedStr('2026-06-28')
    });
  }
}

// ------------------------------------------------------------------ courses

const intakeSop = documents.find(d => d.id.startsWith('Dsop-counter-intake'));
const customCourse = { ...CUSTOM_COURSE, sourceDocId: intakeSop ? intakeSop.id : null };
if (!intakeSop) warn.push('custom course has no sourceDocId — the intake SOP was not built');

// ------------------------------------------------------------------ the blob

const blob = {
  profile: PROFILE,
  onboardingComplete: true,
  chats,
  activeChatId: chats.length ? chats[0].id : null,
  bills: BILLS,
  claims,
  problems,
  letters,
  staff: STAFF,
  training: TRAINING,
  customCourses: [customCourse],
  hiddenCourses: HIDDEN_COURSES,
  documents,
  priceLists,
  staffMode: false,
  staffSessionStart: 0
};

// --------------------------------------------------------------- validation

const machKeys = new Set(machineryKeys().map(k => k.key));
const staffIds = new Set(STAFF.map(s => s.id));
const userIds  = new Set(USERS.map(u => u.id));
const siteNames = new Set(PROFILE.sites.map(s => s.name));
const problemIds = new Set(problems.map(p => p.id));
const chatIds    = new Set(chats.map(c => c.id));
const claimIds   = new Set(claims.map(c => c.id));
const courseIds  = new Set([...BUILT_IN_MODULES, customCourse.id]);

// A site string may name one site or, where a garment moved between them, both.
const siteOk = (s) => [...siteNames].some(n => String(s).includes(n));

const allIds = [];
const collectIds = (arr, label) => arr.forEach(x => { if (x && x.id) allIds.push(label + ':' + x.id); });
collectIds(documents, 'doc'); collectIds(problems, 'problem'); collectIds(letters, 'letter');
collectIds(chats, 'chat'); collectIds(claims, 'claim'); collectIds(TRAINING, 'training');
collectIds(STAFF, 'staff'); collectIds(priceLists, 'price');
const dupes = allIds.filter((v, i, a) => a.indexOf(v) !== i);
check(dupes.length === 0, 'duplicate ids: ' + dupes.join(', '));

documents.forEach(d => {
  check(!d.machineryKey || machKeys.has(d.machineryKey),
    `document "${d.title}" is filed against ${d.machineryKey}, which is not a machine`);
  check(d.text.length <= capFor(d.type),
    `document "${d.title}" is ${d.text.length} chars, over the ${capFor(d.type)} cap`);
  check(d.text.length > 400, `document "${d.title}" is suspiciously short (${d.text.length} chars)`);
});

problems.forEach(p => {
  check(chatIds.has(p.chatId), `problem ${p.id} points at chat ${p.chatId}, which does not exist`);
  check(!p.claimId || claimIds.has(p.claimId), `problem ${p.id} points at claim ${p.claimId}, which does not exist`);
  check(userIds.has(p.createdBy), `problem ${p.id} has createdBy ${p.createdBy}, which is not a seeded login`);
  check(siteOk(p.site), `problem ${p.id} names site "${p.site}", which is not one of ours`);
  check(['open','awaiting-customer','claim','resolved'].includes(p.status), `problem ${p.id} has status "${p.status}"`);
});

const msgIds = new Set(chats.flatMap(c => c.messages.map(m => m.id)));
const offerMsgIds = new Set(chats.flatMap(c => c.messages.filter(m => m.letterOffer).map(m => m.id)));

letters.forEach(l => {
  check(!!l.body && l.body.length > 300, `letter ${l.id} has no usable body`);
  check(!l.problemId || problemIds.has(l.problemId), `letter ${l.id} points at problem ${l.problemId}, which does not exist`);
  check(!l.staffId || staffIds.has(l.staffId), `letter ${l.id} points at staff ${l.staffId}, who does not exist`);
  check(userIds.has(l.createdBy), `letter ${l.id} has createdBy ${l.createdBy}, which is not a seeded login`);
  if (l.sourceMsgId) {
    check(msgIds.has(l.sourceMsgId), `letter ${l.id} sourceMsgId ${l.sourceMsgId} is not a chat message`);
    check(offerMsgIds.has(l.sourceMsgId), `letter ${l.id} sourceMsgId ${l.sourceMsgId} exists but carries no letterOffer, so "redraft as" would silently do nothing`);
  }
  check(!/\[(insert|customer name|amount|TBC|placeholder)/i.test(l.body), `letter ${l.id} still contains a bracketed placeholder`);
});

claims.forEach(c => {
  check(problemIds.has(c.problemId), `claim ${c.id} points at problem ${c.problemId}, which does not exist`);
  check(letters.some(l => l.sourceMsgId === c.id), `claim ${c.id} has no letter behind it`);
  check(siteOk(c.site), `claim ${c.id} names site "${c.site}", which is not one of ours`);
});

chats.forEach(c => {
  check(userIds.has(c.createdBy), `chat ${c.id} has createdBy ${c.createdBy}, which is not a seeded login`);
  check(!c.problemId || problemIds.has(c.problemId), `chat ${c.id} points at problem ${c.problemId}, which does not exist`);
  c.messages.forEach(m => check(!!m.content && m.content.length > 20, `chat ${c.id} has an empty message ${m.id}`));
});

TRAINING.forEach(r => {
  check(staffIds.has(r.staffId), `training ${r.id} names staff ${r.staffId}, who does not exist`);
  check(courseIds.has(r.moduleId), `training ${r.id} names course ${r.moduleId}, which is not a real course`);
  check(!r.userId || userIds.has(r.userId), `training ${r.id} has userId ${r.userId}, which is not a seeded login`);
  check(r.answers.filter(a => a.correct).length === r.score, `training ${r.id} marks ${r.answers.filter(a => a.correct).length} correct but scores ${r.score}`);
});

STAFF.forEach(s => {
  check(!s.userId || userIds.has(s.userId), `staff ${s.name} is linked to ${s.userId}, which is not a seeded login`);
  check(siteNames.has(s.site), `staff ${s.name} is at site "${s.site}", which is not one of ours`);
});

BILLS.forEach((b, i) => {
  check(['Electricity','Gas','Water'].includes(b.utilityType), `bill ${i} has utilityType "${b.utilityType}"`);
  check(/^\d{4}-\d{2}$/.test(b.periodSort), `bill ${i} has periodSort "${b.periodSort}", which will not sort`);
});

check(customCourse.quiz.length >= 4, 'the custom course needs at least four questions');
customCourse.quiz.forEach((q, i) => {
  check(q.a.length === 4, `custom course question ${i + 1} does not have exactly four answers`);
  check(q.correct >= 0 && q.correct < 4, `custom course question ${i + 1} has no valid correct answer`);
  check(!!q.why, `custom course question ${i + 1} has no explanation`);
});
check(BUILT_IN_MODULES.includes(customCourse.replaces), 'the custom course replaces a course that does not exist');

// One person, one business — loadCloud() reads a single membership with .limit(1),
// so a second one would decide at random which business that person lands in.
check(new Set(USERS.map(u => u.email)).size === USERS.length, 'duplicate email among the seeded logins');
check(USERS.filter(u => u.role === 'owner').length === 1, 'there must be exactly one owner');

// ------------------------------------------------------------------- output

const json = JSON.stringify(blob);

if (REPORT) {
  console.log('\nDocuments');
  console.log('  ' + 'file'.padEnd(38) + 'part  chars      cap      card');
  for (const r of docRows) {
    console.log('  ' + r.slug.padEnd(38) + String(r.part).padEnd(6)
      + String(r.chars).padStart(6) + '  ' + String(r.cap).padStart(7) + '   ' + r.card);
  }
}

console.log('\nBlob');
console.log(`  documents   ${documents.length}`);
console.log(`  problems    ${problems.length}`);
console.log(`  letters     ${letters.length}   (${caseLetters.length} garment/intake, ${hrLetters.length} HR)`);
console.log(`  claims      ${claims.length}`);
console.log(`  chats       ${chats.length}`);
console.log(`  staff       ${STAFF.length}`);
console.log(`  training    ${TRAINING.length}`);
console.log(`  bills       ${BILLS.length}`);
console.log(`  priceLists  ${priceLists.length}`);
console.log(`  size        ${(json.length / 1024).toFixed(0)} KB`);

const paid = claims.filter(c => c.tone === 'paid');
const defended = claims.filter(c => c.tone === 'defended');
console.log(`\nClaims register`);
console.log(`  paid        ${paid.length}  $${paid.reduce((s, c) => s + c.paid, 0).toFixed(2)}`);
console.log(`  defended    ${defended.length}  $${defended.reduce((s, c) => s + c.saved, 0).toFixed(2)} held`);
console.log(`  total saved $${claims.reduce((s, c) => s + c.saved, 0).toFixed(2)}`);

if (warn.length) {
  console.log('\nWarnings');
  warn.forEach(w => console.log('  ! ' + w));
}

if (fail.length) {
  console.log('\nFAILED');
  fail.forEach(f => console.log('  x ' + f));
  console.log(`\n${fail.length} problem(s). blob.json not written.\n`);
  process.exit(1);
}

writeFileSync(join(HERE, 'blob.json'), json);
console.log('\nWrote mock/blob.json\n');
