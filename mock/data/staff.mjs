// The roster. Nine of these are the original Main St demo persona recovered from
// commit a766f3a, kept verbatim so anyone who saw the old demo recognises it;
// Nadia is new, because the plan needs an admin login attached to a real person.
//
// Karen is deliberately NOT here. She owns the business, she is not on the award
// roster, and the Staff screen is an employment record — putting the proprietor
// in it would be the first thing a dry cleaner in the room noticed.
//
// userId links a staff record to a login. Five of the ten have one; the rest
// share the counter device, which is what actually happens in a shop this size.

import { UID, SITE_MAIN, SITE_DROP } from './identity.mjs';

export const STAFF = [
  { id: 'Ssharon',  name: 'Sharon Delaney', role: 'Shop manager / senior customer service',
    classification: 'Dry Cleaning DC5', employmentType: 'Full-time', startDate: '2016-03-14',
    site: SITE_MAIN, userId: UID.sharon,
    notes: 'Runs the counter and the roster. Longest-serving. Holds the second set of keys and does the banking.' },

  { id: 'Snadia',   name: 'Nadia Farrell', role: 'Office administrator / bookkeeper',
    classification: 'Above award / individual contract', employmentType: 'Part-time', startDate: '2020-07-06',
    site: SITE_MAIN, userId: UID.nadia,
    notes: 'Three days a week. Payroll, BAS prep, supplier accounts, insurance renewals. Does the Hangr setup and document filing.' },

  { id: 'Speter',   name: 'Peter Nguyen', role: 'Dry cleaner / plant operator',
    classification: 'Dry Cleaning DC3', employmentType: 'Full-time', startDate: '2019-08-05',
    site: SITE_MAIN, userId: null,
    notes: 'Runs the perc machine and wet cleaning. Does the still clean and the lint filters. Only person besides Karen who touches the boiler blowdown.' },

  { id: 'Smarco',   name: 'Marco Rossi', role: 'Presser & finisher',
    classification: 'Dry Cleaning DC3', employmentType: 'Full-time', startDate: '2021-02-22',
    site: SITE_MAIN, userId: null,
    notes: 'Utility press and the form finisher. Good eye for a finish; slow on volume days.' },

  { id: 'Sjulie',   name: 'Julie Harmon', role: 'Shirt presser',
    classification: 'Dry Cleaning DC2', employmentType: 'Part-time', startDate: '2022-11-07',
    site: SITE_MAIN, userId: null,
    notes: 'School-hours shifts, 9:30-2:30 Mon-Fri. Runs the Sankosha shirt unit.' },

  { id: 'Semma',    name: 'Emma Sutton', role: 'Counter / customer service',
    classification: 'Dry Cleaning DC2', employmentType: 'Part-time', startDate: '2023-06-19',
    site: SITE_MAIN, userId: UID.emma,
    notes: 'Four days. Takes most of the at-risk garments in and is the one who raises the problem reports.' },

  { id: 'Srebecca', name: 'Rebecca Toomey', role: 'Counter — drop store',
    classification: 'Dry Cleaning DC1', employmentType: 'Part-time', startDate: '2024-01-15',
    site: SITE_DROP, userId: UID.rebecca,
    notes: 'Only staff at the Kangaroo Flat agency. Works alone, so intake decisions there are hers.' },

  { id: 'Sanh',     name: 'Anh Tran', role: 'Alterations / tailor',
    classification: 'Dry Cleaning DC4', employmentType: 'Part-time', startDate: '2018-09-03',
    site: SITE_MAIN, userId: null,
    notes: 'Skilled alterations and wedding gowns. Twenty years in the trade before us.' },

  { id: 'Sdylan',   name: 'Dylan Pearce', role: 'Pickup & delivery driver',
    classification: 'Dry Cleaning DC2', employmentType: 'Casual', startDate: '2023-10-02',
    site: SITE_MAIN, userId: null,
    notes: 'Regular ~25 hrs/week on a settled pattern for over 12 months — casual conversion offer made 4 August 2026.' },

  { id: 'Schloe',   name: 'Chloe Barnes', role: 'Saturday junior / counter',
    classification: 'Dry Cleaning DC1', employmentType: 'Casual', startDate: '2025-02-01',
    site: SITE_MAIN, userId: UID.chloe,
    notes: 'Student, Saturdays only. Newest on the counter — training still in progress.' }
];

export const STAFF_BY_NAME = Object.fromEntries(STAFF.map(s => [s.name, s]));
