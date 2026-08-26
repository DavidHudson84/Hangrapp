// Utility bills for the Bill Compare chart.
//
// Generated rather than typed, because the point of the chart is the *shape* —
// electricity peaking through the Bendigo summer when the plant room aircon is
// fighting the presses, gas peaking in winter when the boiler works hardest and
// the coat season doubles the load. Thirty-two hand-typed numbers would have
// drifted into a flat line, which is the one thing the chart must not show.
//
// The Kangaroo Flat drop store has no plant and its usage is inside the centre's
// outgoings, so everything here is the Bendigo site.

const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];

function sortableKeyFromPeriod(period) {
  const months = { jan:'01',feb:'02',mar:'03',apr:'04',may:'05',jun:'06',jul:'07',aug:'08',sep:'09',oct:'10',nov:'11',dec:'12' };
  const m = period.toLowerCase().match(/([a-z]{3,})[a-z]*\s+(\d{4})/);
  if (m && months[m[1].slice(0,3)]) return m[2] + '-' + months[m[1].slice(0,3)];
  return period;
}

// Twelve months to August 2026, oldest first.
const SERIES = [];
for (let i = 11; i >= 0; i--) {
  const d = new Date(Date.UTC(2026, 7 - i, 1));
  SERIES.push({ month: d.getUTCMonth(), year: d.getUTCFullYear() });
}

// Southern-hemisphere seasonal multipliers, index 0 = January.
const ELEC_SEASON = [1.18, 1.15, 1.06, 0.96, 0.94, 0.97, 0.99, 0.98, 1.04, 1.09, 1.12, 1.14];
const GAS_SEASON  = [0.72, 0.74, 0.86, 1.02, 1.24, 1.38, 1.42, 1.33, 1.12, 0.95, 0.82, 0.75];

const round2 = (n) => Math.round(n * 100) / 100;

export const BILLS = [];

// Electricity — Momentum Energy, contract to 31 March 2027.
SERIES.forEach(({ month, year }) => {
  const period = MONTHS[month] + ' ' + year;
  // A tariff rise landed in July 2025 and again in July 2026; the base steps up.
  const base = (year === 2026 && month >= 6) ? 2640 : 2470;
  const kwhBase = (year === 2026 && month >= 6) ? 9350 : 9280;
  BILLS.push({
    utilityType: 'Electricity',
    supplier: 'Momentum Energy',
    period,
    periodSort: sortableKeyFromPeriod(period),
    amount: round2(base * ELEC_SEASON[month]),
    usage: Math.round(kwhBase * ELEC_SEASON[month]),
    usageUnit: 'kWh',
    contractEnd: '2027-03-31'
  });
});

// Gas — Origin Energy. The contract expires 30 November 2026, which is close
// enough to now that the app should be raising it before the demo does.
SERIES.forEach(({ month, year }) => {
  const period = MONTHS[month] + ' ' + year;
  const base = (year === 2026 && month >= 6) ? 1580 : 1490;
  const mjBase = (year === 2026 && month >= 6) ? 58200 : 57800;
  BILLS.push({
    utilityType: 'Gas',
    supplier: 'Origin Energy',
    period,
    periodSort: sortableKeyFromPeriod(period),
    amount: round2(base * GAS_SEASON[month]),
    usage: Math.round(mjBase * GAS_SEASON[month]),
    usageUnit: 'MJ',
    contractEnd: '2026-11-30'
  });
});

// Water — Coliban Water, billed quarterly, including trade waste on TW-4471.
[
  ['September 2024', 1284.40, 412], ['December 2024', 1402.15, 448],
  ['March 2025',     1466.80, 466], ['June 2025',     1338.90, 424],
  ['September 2025', 1372.55, 430], ['December 2025', 1518.20, 471],
  ['March 2026',     1587.65, 489], ['June 2026',     1441.30, 447]
].forEach(([period, amount, kl]) => {
  BILLS.push({
    utilityType: 'Water',
    supplier: 'Coliban Water',
    period,
    periodSort: sortableKeyFromPeriod(period),
    amount,
    usage: kl,
    usageUnit: 'kL',
    contractEnd: null
  });
});
