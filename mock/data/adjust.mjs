// A copy of calcAdjustment() from index.html (:2377), kept here so the seeded
// settlement offers are *computed* from the Fair Claims Guide table rather than
// typed in by hand. A hand-typed offer that disagrees with what the app
// recalculates is the kind of thing a dry cleaner spots in the first minute.

const LIFE_EXPECTANCY = {
  'Coat/jacket/blazer — cloth (dress & sport)': 4,
  'Coat/jacket — leather or suede': 5,
  'Dress — fancy': 2,
  'Dress — evening': 3,
  'Jumper/cardigan — wool': 4,
  'Ski jacket — quilted': 2,
  'Suit — wool or wool blend': 3,
  'Curtains/drapes — lined or coated': 5,
  'Wedding gown — after the wedding (capped at 50%)': 3
};

const ADJ_BANDS = {
  1:  [[0,4],[4,7],[7,9],[9,11],[11,13],[13,Infinity]],
  2:  [[0,4],[4,7],[7,13],[13,19],[19,25],[25,Infinity]],
  3:  [[0,4],[4,10],[10,19],[19,28],[28,37],[37,Infinity]],
  4:  [[0,4],[4,13],[13,25],[25,37],[37,49],[49,Infinity]],
  5:  [[0,4],[4,16],[16,31],[31,46],[46,61],[61,Infinity]],
  10: [[0,12],[12,48],[48,72],[72,96],[96,132],[132,Infinity]]
};
const ADJ_PCT = [
  { excellent: 100, average: 100, poor: 100 },
  { excellent: 75,  average: 75,  poor: 60  },
  { excellent: 70,  average: 60,  poor: 45  },
  { excellent: 50,  average: 40,  poor: 30  },
  { excellent: 30,  average: 20,  poor: 15  },
  { excellent: 20,  average: 15,  poor: 10  }
];

export function calcAdjustment(c) {
  const le = LIFE_EXPECTANCY[c.article];
  if (!le) throw new Error('unknown article: ' + c.article);
  const rc = parseFloat(c.replacementCost);
  const ageMonths = (parseInt(c.ageYears, 10) || 0) * 12 + (parseInt(c.ageMonths, 10) || 0);
  const bands = ADJ_BANDS[le];
  let idx = bands.findIndex(([lo, hi]) => ageMonths >= lo && ageMonths < hi);
  if (idx === -1) idx = bands.length - 1;
  const pct = ADJ_PCT[idx][c.condition || 'average'];
  let amount = rc * pct / 100;
  let capped = false;
  if (/after the wedding/i.test(c.article)) {
    const cap = rc * 0.5;
    if (amount > cap) { amount = cap; capped = true; }
  }
  const band = bands[idx];
  return {
    le, ageMonths, pct, amount, capped, replacementCost: rc,
    bandLabel: band[1] === Infinity ? `${band[0]}+ months` : `${band[0]}–${band[1]} months`
  };
}
