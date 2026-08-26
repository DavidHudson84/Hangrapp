// The training register — deliberately uneven.
//
// A register where everyone has passed everything is the one thing that tells a
// dry cleaner this is fake. Real ones look like this: the two long-serving staff
// are through it, the newest person has one pass and two fails, and most people
// are somewhere in the middle with the courses that matter to their job done and
// the rest not started.
//
// Note the 'tagging' rows. That built-in course has been replaced by the
// business's own course (see courses.mjs), so those passes are history — they
// still show on the register through coursesWithHistory(), which is the point.
//
// The app only ever records a *completed* quiz attempt. There is no half-finished
// module state to seed, so "halfway through the training" means some courses
// passed and the rest not started, which is what it means in the app too.

import { STAFF } from './staff.mjs';
import { UID } from './identity.mjs';

const T = (iso) => new Date(iso + 'T14:30:00+10:00').getTime();
const TOTAL = 8;                       // every course has 8 questions
const PASS  = Math.ceil(TOTAL * 0.8);  // 7

// [staff key, moduleId, score, date]  — in the order they were sat.
const SAT = [
  // Sharon — shop manager, through the lot, including the old tagging course.
  ['Ssharon', 'acl',           8, '2026-03-04'],
  ['Ssharon', 'tagging',       8, '2026-03-04'],
  ['Ssharon', 'intake',        8, '2026-03-11'],
  ['Ssharon', 'reading',       7, '2026-03-18'],
  ['Ssharon', 'fault',         8, '2026-03-25'],
  ['Ssharon', 'using-hangr',   8, '2026-04-01'],
  ['Ssharon', 'Cmsdtagging',   8, '2026-08-07'],

  // Peter — plant, also through the lot. Sat the new tagging course the same week.
  ['Speter',  'intake',        7, '2026-03-12'],
  ['Speter',  'tagging',       7, '2026-03-12'],
  ['Speter',  'reading',       8, '2026-03-19'],
  ['Speter',  'fault',         8, '2026-03-26'],
  ['Speter',  'acl',           7, '2026-04-02'],
  ['Speter',  'using-hangr',   7, '2026-04-16'],
  ['Speter',  'Cmsdtagging',   7, '2026-08-07'],

  // Nadia — office. The three that touch her job, none of the plant ones.
  ['Snadia',  'acl',           8, '2026-04-08'],
  ['Snadia',  'using-hangr',   8, '2026-04-08'],
  ['Snadia',  'intake',        7, '2026-05-13'],

  // Emma — counter. Genuinely halfway: three passed, one failed and not retried.
  ['Semma',   'acl',           7, '2026-04-22'],
  ['Semma',   'tagging',       7, '2026-04-22'],
  ['Semma',   'intake',        8, '2026-05-06'],
  ['Semma',   'reading',       7, '2026-06-10'],
  ['Semma',   'fault',         5, '2026-07-15'],

  // Marco — presser. The two that matter to him.
  ['Smarco',  'intake',        7, '2026-05-20'],
  ['Smarco',  'fault',         7, '2026-06-24'],

  // Julie — shirts, school hours. One.
  ['Sjulie',  'acl',           7, '2026-05-27'],

  // Rebecca — drop store, works alone, so intake and tagging matter most.
  ['Srebecca','acl',           7, '2026-04-29'],
  ['Srebecca','intake',        7, '2026-06-03'],
  ['Srebecca','Cmsdtagging',   8, '2026-08-12'],

  // Anh — alterations. Reading the garment is her course.
  ['Sanh',    'reading',       8, '2026-06-17'],

  // Dylan — driver, casual. Failed the app course, came back and passed it.
  ['Sdylan',  'using-hangr',   6, '2026-07-01'],
  ['Sdylan',  'using-hangr',   7, '2026-07-08'],

  // Chloe — newest, Saturdays only. One pass on the second go, one open fail.
  ['Schloe',  'acl',           5, '2026-07-22'],
  ['Schloe',  'acl',           7, '2026-08-05'],
  ['Schloe',  'intake',        6, '2026-08-19']
];

// Which login recorded it. Someone with a login of their own signs in and the
// record carries their user id; everyone else is recorded by name on the shared
// counter device, which is what most of a roster this size looks like.
const LOGIN_OF = Object.fromEntries(STAFF.filter(s => s.userId).map(s => [s.id, s.userId]));

// Deterministic but not uniform: spread the wrong answers around so no two
// records mark the same questions wrong.
function markAnswers(score, seed) {
  const wrong = new Set();
  let n = TOTAL - score, k = seed % TOTAL;
  while (wrong.size < n) { wrong.add(k % TOTAL); k += 3 + (seed % 4); }
  return Array.from({ length: TOTAL }, (_, q) => ({
    q,
    choice: wrong.has(q) ? (q + 1) % 4 : (q * 2 + seed) % 4,
    correct: !wrong.has(q)
  }));
}

const attempts = {};

export const TRAINING = SAT.map(([staffId, moduleId, score, date], i) => {
  const key = staffId + ':' + moduleId;
  attempts[key] = (attempts[key] || 0) + 1;
  const staff = STAFF.find(s => s.id === staffId);
  return {
    id: 'T' + String(i + 1).padStart(3, '0'),
    staffId,
    staffName: staff.name,
    userId: LOGIN_OF[staffId] || null,
    moduleId,
    attempt: attempts[key],
    score,
    total: TOTAL,
    percent: Math.round((score / TOTAL) * 100),
    passed: score >= PASS,
    answers: markAnswers(score, i + 1),
    completedAt: T(date)
  };
}).sort((a, b) => b.completedAt - a.completedAt);
