// The business itself: identity, sites, services, plant, utilities and branding.
//
// The machinery block matters more than it looks. machineryUnits() in index.html
// derives a stable key from this shape — dryCleaning:0, dryCleaning:1, boiler,
// compressor, washers, dryers, press, finisher, unit:<id> — and every equipment
// manual is filed against one of those keys. Reorder the dryCleaning array and
// two manuals silently point at the wrong machine.

import { BUSINESS_NAME, DOMAIN, SITE_MAIN, SITE_DROP } from './identity.mjs';

// A monogram, drawn rather than photographed: logoDataUrl is inlined in the blob
// and the blob is rewritten on every autosave, so a 400 KB PNG here would be paid
// for on every keystroke. This is under 1 KB.
const LOGO_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">`
  + `<rect width="120" height="120" rx="10" fill="#1F3D2B"/>`
  + `<path d="M60 26a9 9 0 0 0-9 9 9 9 0 0 0 5 8v5L26 63a7 7 0 0 0-3 6 7 7 0 0 0 7 7h60a7 7 0 0 0 7-7 7 7 0 0 0-3-6L64 48v-5a9 9 0 0 0 5-8 9 9 0 0 0-9-9z" fill="none" stroke="#C8A96A" stroke-width="4" stroke-linejoin="round"/>`
  + `<text x="60" y="99" font-family="Georgia,serif" font-size="20" letter-spacing="3" fill="#F2EFE7" text-anchor="middle">MSDC</text>`
  + `</svg>`;

export const LOGO_DATA_URL = 'data:image/svg+xml;base64,' + Buffer.from(LOGO_SVG).toString('base64');

export const PROFILE = {
  businessName: BUSINESS_NAME,
  abn: '42 617 903 558',
  state: 'VIC',
  address: 'Shop 4, 118 Hargreaves Street, Bendigo VIC 3550',
  phone: '(03) 5443 8817',
  email: 'hello@' + DOMAIN,
  website: 'www.' + DOMAIN,

  sites: [
    { name: SITE_MAIN, services: 'Retail store + production' },
    { name: SITE_DROP, services: 'Drop store only (agency)' }
  ],

  staffCount: '10',

  services: [
    'Dry cleaning',
    'Laundered shirts / pressing',
    'Wash & fold laundry',
    'Alterations & repairs',
    'Wedding gown clean & preserve',
    'Leather & suede',
    'Curtain & drapery cleaning',
    'Manchester (doonas, quilts, blankets)',
    'Workwear & uniforms',
    'Hospitality linen (tablecloths, napkins)',
    'Pickup & delivery',
    'Drop-off / agency only'
  ],

  solvents: ['Perc (perchloroethylene)', 'Hydrocarbon', 'Wet cleaning'],
  equipment: [],

  machinery: {
    // Order is load-bearing — see the note at the top of this file.
    dryCleaning: [
      { make: 'Union', model: 'XL-800' },       // dryCleaning:0 — perc, 25 kg, installed 2019
      { make: 'Realstar', model: 'HM-450' }     // dryCleaning:1 — hydrocarbon, 18 kg, installed 2023
    ],
    boiler:     { make: 'Fulton', model: 'FB-030' },
    compressor: { make: 'Pilot', model: 'K25' },
    washers:    { make: 'Speed Queen', count: '3' },
    dryers:     { make: 'Electrolux', count: '2' },

    pressMode: 'Mix of both',
    pressMake: 'Sankosha',
    pressTypes: [
      'Shirt unit (collar/cuff/body/sleeve)',
      'Utility / mushroom press',
      'Trouser topper',
      'Trouser legger'
    ],

    finisherMake: 'Trevil',
    finishers: ['Steam-air finisher', 'Suzy / form finisher', 'Spotting board'],
    steamTunnel: false,

    units: [
      { id: 'conv1', label: 'Metalprogetti Speedy 400 garment conveyor' },
      { id: 'still1', label: 'Bowe MiniStill solvent recovery still' },
      { id: 'tank1', label: 'Hydraulic bunded solvent store — 2 × 200 L drums' }
    ],

    other: 'Roof-mounted 15 kW split for the plant room. Compressed air is reticulated to the presses and the conveyor.'
  },

  utilities: {
    electricity: 'Momentum Energy — business plan, contract to 31 March 2027',
    gas: 'Origin Energy — commercial tariff, boiler and hot water',
    water: 'Coliban Water — trade waste agreement TW-4471 for the plant'
  },

  logoDataUrl: LOGO_DATA_URL,
  ownerName: 'Karen Whitfield',
  ownerTitle: 'Owner',

  assistantName: 'Hangr',
  theme: 'default',
  themeBase: 'paper',
  accent: '#3F6B4E',
  font: 'classic',
  ownerPin: ''
};

// Mirrors machineryUnits() in index.html. The build uses it to prove that every
// manual is filed against a machine that actually exists.
export function machineryKeys() {
  const m = PROFILE.machinery;
  const out = [];
  m.dryCleaning.forEach((d, i) => out.push({ key: 'dryCleaning:' + i, label: [d.make, d.model].filter(Boolean).join(' ') }));
  ['boiler', 'compressor', 'washers', 'dryers'].forEach(k => {
    const o = m[k] || {};
    out.push({ key: k, label: [o.make, o.model].filter(Boolean).join(' ') || k });
  });
  out.push({ key: 'press', label: m.pressMake || 'Press equipment' });
  out.push({ key: 'finisher', label: m.finisherMake || 'Finishing & steam' });
  (m.units || []).forEach(u => out.push({ key: 'unit:' + u.id, label: u.label }));
  return out;
}
