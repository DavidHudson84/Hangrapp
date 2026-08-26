// The three HR letters.
//
// These carry staffId rather than problemId, family 'hr' rather than 'garment',
// and sourceMsgId null — because an HR letter is started from a staff record, not
// from a chat (index.html:4922 takes exactly that path). None of them produce a
// claim: CLAIM_OUTCOMES has no HR types in it, and it should not.
//
// They also sit behind a different capability. Manager and staff logins can read
// every garment letter in the business but not these, because HR follows
// `staffRecords`, not `letters.all` (index.html:8811). Seeding them is what makes
// that boundary visible when you switch to Sharon's login in a demo.

import { UID } from './identity.mjs';
import { SITE_MAIN } from './identity.mjs';

const T = (iso) => new Date(iso + 'T09:00:00+10:00').getTime();
const dateLong = (iso) => new Date(iso + 'T09:00:00+10:00')
  .toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Australia/Melbourne' });

export const HR_LETTERS = [
  {
    file: 'hr-conversion',
    id: 'Lhrconversion',
    date: '2026-08-04',
    subject: 'Offer of casual conversion — Dylan Pearce',
    type: 'conversion',
    staffId: 'Sdylan',
    facts: {
      staffName: 'Dylan Pearce',
      role: 'Pickup & delivery driver — Dry Cleaning DC2',
      employmentType: 'Casual',
      startDate: '2 October 2023 — 2 years 10 months of service',
      site: SITE_MAIN,
      issue: 'Not a disciplinary matter. A regular and systematic pattern of hours that meets the conversion test.',
      incidentDates: 'Pattern assessed over the 12 months to 31 July 2026',
      witnesses: '',
      policyBreached: '',
      impact: 'Averaging 25.4 hours a week across a settled four-day pattern since the second half of 2024.',
      priorWarnings: 'None. Nothing on file.',
      priorDiscussions: 'Raised informally by Dylan in March 2026 when he asked about annual leave.',
      meetingDate: 'Offer made in writing 4 August 2026; response due 15 September 2026',
      supportPerson: 'Offered, and Dylan encouraged to bring one to any discussion.',
      employeeResponse: 'Not yet received.',
      improvementRequired: 'Nothing required. Dylan may accept or decline and nothing changes if he declines.',
      consequence: 'If declined, the position is reviewed again in twelve months. No effect on shifts or duties.'
    }
  },
  {
    file: 'hr-first-warning',
    id: 'Lhrfirstwarning',
    date: '2026-06-12',
    subject: 'First written warning — Marco Rossi, daily safety device tests',
    type: 'first-warning',
    staffId: 'Smarco',
    facts: {
      staffName: 'Marco Rossi',
      role: 'Presser & finisher — Dry Cleaning DC3',
      employmentType: 'Full-time',
      startDate: '22 February 2021 — 5 years 4 months of service',
      site: SITE_MAIN,
      issue: 'Failure to complete the daily function test of the two-hand controls and guard interlocks on the press line, and failure to complete the weekly test record.',
      incidentDates: '18 May, 26 May, 2 June and 8 June 2026',
      witnesses: 'Karen Whitfield observed the 8 June instance directly. Sharon Delaney present at the 12 May discussion.',
      policyBreached: 'Daily start-up checklist; the guard and two-hand control function test required by the Sankosha press line manual and by the plant WHS procedure.',
      impact: 'A two-hand control fails silently. The test is the only thing that finds the failure before a hand is in the press.',
      priorWarnings: 'None in writing. Two verbal discussions — 21 April 2026 at the toolbox meeting, and 12 May 2026 one to one.',
      priorDiscussions: 'As above. Marco undertook on 12 May to pick it up.',
      meetingDate: '10 June 2026, 2:30pm, back office',
      supportPerson: 'Offered. Marco chose to attend alone.',
      employeeResponse: 'Acknowledged the tests were not done. Said the May volume made the start-up feel like a delay with racks waiting.',
      improvementRequired: 'From Monday 15 June 2026 the daily safety device test is completed on every press line machine before any garment is pressed, and the weekly record signed each morning. Sharon to check daily for four weeks, then weekly.',
      consequence: 'Further disciplinary action, which could include a final written warning or termination of employment.'
    }
  },
  {
    file: 'hr-hours-change',
    id: 'Lhrhourschange',
    date: '2026-08-07',
    subject: 'Change of ordinary hours — Julie Harmon, from 5 October 2026',
    type: 'hours-change',
    staffId: 'Sjulie',
    facts: {
      staffName: 'Julie Harmon',
      role: 'Shirt presser — Dry Cleaning DC2',
      employmentType: 'Part-time',
      startDate: '7 November 2022 — 3 years 9 months of service',
      site: SITE_MAIN,
      issue: 'Not a disciplinary matter. Employee-requested reduction in ordinary hours from 25 to 20 a week.',
      incidentDates: 'Requested 5 August 2026, effective 5 October 2026',
      witnesses: '',
      policyBreached: '',
      impact: 'Wednesday shirt volume reallocated to Chloe Barnes with Marco Rossi covering overflow. No backlog carried to Thursday.',
      priorWarnings: 'None.',
      priorDiscussions: 'Discussed 5 August 2026 following the change to her daughter’s school days.',
      meetingDate: '5 August 2026',
      supportPerson: 'Not required — agreed change at the employee’s own request.',
      employeeResponse: 'Requested the change and agreed the terms.',
      improvementRequired: 'Nothing required. Signed acknowledgement to be returned before 5 October 2026.',
      consequence: 'A permanent variation to the agreement. Returning to five days would need a further agreement, not an automatic reversion.'
    }
  }
];

export function buildHrLetters(bodies) {
  return HR_LETTERS.map(l => {
    const body = bodies[l.file];
    if (!body) throw new Error('no body for HR letter ' + l.file);
    return {
      id: l.id,
      date: dateLong(l.date),
      subject: l.subject,
      type: l.type,
      family: 'hr',
      scope: null,
      sourceMsgId: null,
      staffId: l.staffId,
      body,
      facts: l.facts,
      claim: null,
      problemId: null,
      createdBy: UID.karen,
      createdAt: T(l.date),
      updatedAt: T(l.date)
    };
  });
}
