// The casework: eight counter incidents, the chats they opened, the letters they
// produced and the claims those letters recorded.
//
// This is one file on purpose. A problem, its chat, its letter and its claim are
// four records wired together by five different id fields, and the database
// enforces none of it. Splitting them across four files is how you end up with a
// claims register that points at a letter that points at a chat that isn't there.
//
// The wiring, once, so it can be checked by eye:
//
//   problem.chatId   -> chat.id          chat.problemId  -> problem.id
//   problem.claimId  -> claim.id         letter.problemId-> problem.id
//   letter.sourceMsgId == claim.id == the id of the AI message that offered
//                                       the letter (msg.letterOffer)
//
// Settlement amounts are computed by adjust.mjs, not typed. See the note there.

import { UID, SITE_MAIN, SITE_DROP } from './identity.mjs';
import { calcAdjustment } from './adjust.mjs';

const T = (iso) => new Date(iso + 'T09:00:00+10:00').getTime();

// Every case in one shape. buildCase() below fans each one out into the four
// records the app actually stores.
export const CASES = [
  {
    slug: 'beaded-gown',
    status: 'claim',
    takenBy: 'Emma Sutton', createdBy: UID.emma, site: SITE_MAIN,
    date: '2026-06-12', letterDate: '2026-06-18',
    docket: 'B-24118',
    customerName: 'Marguerite Oakley', phone: '0417 662 038', email: 'm.oakley@example.com',
    garment: 'Navy beaded evening gown', colour: 'Navy', style: 'Full length, cap sleeve, all-over bugle beading',
    brand: 'Carla Zampatti', purchasedFrom: 'Myer Bendigo, October 2023',
    identifying: 'Beading is dense across the bodice and thins over the skirt. Small repair to the left shoulder seam predating us.',
    whatHappened: 'Gown came in for cleaning before a 50th. At intake the beads were noted as plastic, not glass, and the customer was told they may not survive solvent. She signed the at-risk authorisation. Cleaned in the hydrocarbon machine on the beaded programme — the gentlest we have and gentler than the "P" on the label allows. On inspection after the cycle a proportion of the bugle beads on the bodice had gone cloudy and lost their surface. The fabric itself is unmarked.',
    actionTaken: 'Photographed at intake and after. At-risk authorisation on file, signed 10 June. Karen inspected. We did not press it. Held it and called the customer before she came in.',
    customerWants: 'Full replacement — she has quoted $890, the original purchase price.',
    recommended: 'Defend. The authorisation was signed, the method was gentler than the care label permitted, and the beads are a coating failure on a component the manufacturer chose. Offer to have the bodice re-beaded by our alterations room at our cost if she would rather have the gown than an argument.',
    letterType: 'twimc',
    subject: 'Navy beaded evening gown — docket B-24118',
    value: '$890',
    facts: {
      customerName: 'Marguerite Oakley',
      garment: 'Carla Zampatti navy beaded evening gown, full length',
      fabric: '100% polyester ground; bugle beads, unlabelled, tested as plastic not glass',
      value: '$890',
      purchased: 'Myer Bendigo, October 2023',
      priorCleans: 'Twice by us, October 2024 and December 2025, both without incident. None elsewhere that the customer is aware of.',
      site: SITE_MAIN,
      dateCleaned: '10 June 2026',
      docket: 'B-24118',
      method: 'Hydrocarbon, Realstar HM-450, programme 6 (beaded/at-risk) — 4 minute bath, no spin above 200 rpm, dried at 38 degrees C with extended cool-down',
      precautions: 'Net bag, beads turned inward, short cycle, low heat, no press. Load run alone rather than with other work.',
      gentler: 'Yes. The care label permits "P" — perchloroethylene. We used hydrocarbon on the gentlest programme available, which is materially milder than the label allows.',
      careLabel: 'Dry clean only. Symbol: circle containing "P" with a bar beneath. No supplementary warning about the trim.',
      labelCondition: 'Intact, legible, sewn into the left side seam. Non-compliant in that AS/NZS 1957 requires the label to account for the whole garment including trim, and this one does not mention the beading.',
      intakeInspector: 'Emma Sutton',
      tags: 'Yes — at-risk authorisation signed by the customer 10 June 2026, specifically naming the beading and the possibility of clouding, dulling or loss.',
      faultNoticedBy: 'Peter Nguyen, on unloading the machine, 10 June 2026. Reported before the garment left the plant.',
      photos: 'Yes — six at intake including two close-ups of the bodice beading, four after the cycle.',
      damage: 'Approximately 15% of bugle beads on the bodice have lost surface clarity and gone matt. No beads lost. Ground fabric unaffected. Stitching intact.',
      customerClaim: 'That the gown was undamaged when she brought it in and is now ruined.',
      remedySought: 'Full replacement at $890.'
    },
    claim: null
  },

  {
    slug: 'wool-suit',
    status: 'resolved',
    takenBy: 'Sharon Delaney', createdBy: UID.sharon, site: SITE_MAIN,
    date: '2026-05-28', letterDate: '2026-06-04',
    docket: 'B-23904',
    customerName: 'Trevor Lindsay', phone: '0428 119 774', email: 't.lindsay@example.com',
    garment: 'Charcoal wool suit — jacket and trousers', colour: 'Charcoal', style: 'Two button, notch lapel, half lined',
    brand: 'Hugo Boss', purchasedFrom: 'David Jones Melbourne, autumn 2023',
    identifying: 'Trousers unaffected. Jacket has a small ink mark inside the right cuff from before we saw it.',
    whatHappened: 'Suit cleaned 22 May. Customer returned 28 May with the jacket, pointing out that the collar and the top of both shoulders have gone noticeably lighter than the rest of the jacket and than the trousers. Under daylight there is a clear tide line where the collar meets the body.',
    actionTaken: 'Sharon looked at it with the customer, then Karen looked at it in daylight. Compared against the trousers, which are unchanged. Checked the docket and the machine log for 22 May.',
    customerWants: 'The suit replaced, or the value of the suit. He says the jacket is unwearable with the trousers now.',
    recommended: 'Ours, at least in part. The collar and shoulders are where hair product and perspiration concentrate, and perc will lift a dye that has already been weakened by them — but our own SOP says a garment showing that kind of build-up goes to hydrocarbon or gets a pre-spot, and neither was done. Offer the adjusted settlement and say why the figure is what it is.',
    letterType: 'settlement',
    subject: 'Charcoal wool suit jacket — docket B-23904',
    value: '$1,250',
    facts: {
      customerName: 'Trevor Lindsay',
      garment: 'Hugo Boss charcoal wool suit jacket, two button, half lined',
      fabric: '100% wool, S110s. Lining 100% viscose.',
      value: '$1,250',
      purchased: 'David Jones Melbourne, March 2023',
      priorCleans: 'Four times by us since March 2023. Not cleaned elsewhere.',
      site: SITE_MAIN,
      dateCleaned: '22 May 2026',
      docket: 'B-23904',
      method: 'Perchloroethylene, Union XL-800, programme 3 (wool/tailored) — standard bath, 320 rpm spin, dried at 52 degrees C',
      precautions: 'Standard tailored cycle. No pre-spot applied to the collar. No net bag — not required for tailoring.',
      gentler: 'No. The label permits "P" and we used "P" on a standard tailored programme.',
      careLabel: 'Dry clean only. Symbol: circle containing "P". Present on both jacket and trousers.',
      labelCondition: 'Intact and legible.',
      intakeInspector: 'Chloe Barnes',
      tags: 'No at-risk tag applied. Collar build-up was not recorded at intake, and under our own procedure it should have been.',
      faultNoticedBy: 'The customer, on 28 May 2026, six days after collection.',
      photos: 'None at intake. Four taken on 28 May when he brought it back.',
      damage: 'Dye loss across the collar and the upper shoulders, roughly two shades lighter than the body, with a defined tide line at the collar seam. Trousers unaffected.',
      customerClaim: 'That the jacket went in one colour and came back another.',
      remedySought: 'Replacement of the suit, or its value.'
    },
    claim: { article: 'Suit — wool or wool blend', replacementCost: '1250', ageYears: '3', ageMonths: '0', condition: 'average', waiveCharge: true, charge: '32.00', keepGarment: false }
  },

  {
    slug: 'silk-dress',
    status: 'resolved',
    takenBy: 'Rebecca Toomey', createdBy: UID.rebecca, site: SITE_DROP,
    date: '2026-07-16', letterDate: '2026-07-21',
    docket: 'K-08812',
    customerName: 'Priya Raman', phone: '0402 883 517', email: 'p.raman@example.com',
    garment: 'Emerald silk wrap dress with self belt', colour: 'Emerald green', style: 'Midi wrap, three-quarter sleeve, matching tie belt',
    brand: 'Scanlan Theodore', purchasedFrom: 'Scanlan Theodore online, November 2025',
    identifying: 'The belt is the same fabric, dyed in a separate lot — visibly a deeper green than the dress even when new.',
    whatHappened: 'Dropped at Kangaroo Flat 13 July, cleaned at Bendigo 14 July. The belt was left threaded through the loops and went through the machine with the dress. Dye from the belt has bled into the dress at both hips and across the small of the back, leaving three darker patches with soft edges.',
    actionTaken: 'Peter attempted a reduction on the spotting board on 15 July, which lifted perhaps a third of it and no more. Karen stopped further work rather than risk the ground colour. Photographed. Rebecca called the customer before she came to collect.',
    customerWants: 'Replacement. The dress was worn twice.',
    recommended: 'Pay it. Our own procedure says belts, scarves and detachable trims are removed at intake and bagged separately, and that did not happen. There is no defensible version of this one. Offer the adjusted figure, waive the cleaning charge, and say plainly that it was our error.',
    letterType: 'settlement',
    subject: 'Emerald silk wrap dress — docket K-08812',
    value: '$680',
    facts: {
      customerName: 'Priya Raman',
      garment: 'Scanlan Theodore emerald silk wrap dress with matching self belt',
      fabric: '100% silk, crepe de chine. Belt the same, dyed in a separate lot.',
      value: '$680',
      purchased: 'Scanlan Theodore online, November 2025',
      priorCleans: 'First clean. Worn twice.',
      site: SITE_DROP + ' (received) / ' + SITE_MAIN + ' (cleaned)',
      dateCleaned: '14 July 2026',
      docket: 'K-08812',
      method: 'Perchloroethylene, Union XL-800, programme 5 (silk/delicate) — short bath, 240 rpm, dried at 40 degrees C',
      precautions: 'Net bag. Short cycle. The belt was NOT removed before cleaning, contrary to our intake procedure.',
      gentler: 'The programme was appropriate. The failure was in preparation, not method.',
      careLabel: 'Dry clean only. Symbol: circle containing "P". A supplementary line reads "Remove belt before cleaning".',
      labelCondition: 'Intact and legible, and it carried a specific instruction that we did not follow.',
      intakeInspector: 'Rebecca Toomey (Kangaroo Flat)',
      tags: 'No at-risk tag. None was called for; the risk here was created by us.',
      faultNoticedBy: 'Peter Nguyen on unloading, 14 July 2026.',
      photos: 'Yes — two at the drop store on intake, seven after the cycle including a scale reference.',
      damage: 'Three areas of dye transfer — both hips and the small of the back — approximately 60 mm to 110 mm across, darker than the ground colour with diffuse edges. Partially reduced by spotting on 15 July; no further improvement available.',
      customerClaim: 'That the dress was clean and undamaged when she left it and came back stained.',
      remedySought: 'Replacement at $680.'
    },
    claim: { article: 'Dress — fancy', replacementCost: '680', ageYears: '0', ageMonths: '8', condition: 'excellent', waiveCharge: true, charge: '28.00', keepGarment: false }
  },

  {
    slug: 'cashmere-jumper',
    status: 'claim',
    takenBy: 'Emma Sutton', createdBy: UID.emma, site: SITE_MAIN,
    date: '2026-08-05', letterDate: '2026-08-11',
    docket: 'B-25277',
    customerName: 'Geoffrey Wan', phone: '0439 205 661', email: 'g.wan@example.com',
    garment: 'Camel cashmere crew neck jumper', colour: 'Camel', style: 'Crew neck, ribbed cuff and hem',
    brand: 'Country Road', purchasedFrom: 'Country Road Bendigo, June 2025',
    identifying: 'Small moth repair at the left underarm, done by us in March 2026.',
    whatHappened: 'Booked in for wet cleaning on the strength of the label. Run in the Speed Queen on the wool programme. Come out of the machine it has felted across the body and shrunk roughly two sizes — chest measurement down from 560 mm to 430 mm flat. The ribbing has tightened and will not relax.',
    actionTaken: 'Peter checked the machine settings and the programme log. The wool cycle had been set to a 40 degree wash rather than the 30 degree it should hold, and the extract was on a general setting rather than the reduced one. Machine has since been re-parameterised and the settings locked. Photographed with a tape measure.',
    customerWants: 'Replacement at $640.',
    recommended: 'Pay it. This is a plant error we can point at in our own logs. Offer the adjusted figure and be straight about the cause — he will hear it better than a hedge.',
    letterType: 'settlement',
    subject: 'Camel cashmere jumper — docket B-25277',
    value: '$640',
    facts: {
      customerName: 'Geoffrey Wan',
      garment: 'Country Road camel cashmere crew neck jumper',
      fabric: '100% cashmere, 12 gauge',
      value: '$640',
      purchased: 'Country Road Bendigo, June 2025',
      priorCleans: 'Twice by us, both wet cleaned, September 2025 and March 2026, both without incident.',
      site: SITE_MAIN,
      dateCleaned: '3 August 2026',
      docket: 'B-25277',
      method: 'Wet cleaning, Speed Queen washer 2, wool programme',
      precautions: 'Net bag, flat dry. The programme itself was misconfigured — see below.',
      gentler: 'No. The programme ran at 40 degrees C with a general extract, where our wool programme is specified at 30 degrees C with reduced extract.',
      careLabel: 'Hand wash, do not tumble dry, dry flat. Symbol: tub with one hand, 30. Professional wet clean "W" also shown.',
      labelCondition: 'Intact and legible.',
      intakeInspector: 'Emma Sutton',
      tags: 'No at-risk tag. None was called for.',
      faultNoticedBy: 'Marco Rossi, on unloading, 3 August 2026.',
      photos: 'Yes — three at intake, five after, two of them with a tape measure against the chest.',
      damage: 'Felting across the body and sleeves with loss of surface definition. Chest flat measurement reduced from 560 mm to 430 mm. Body length reduced 70 mm. Irreversible.',
      customerClaim: 'That it was a size L when he left it and is now a child’s size.',
      remedySought: 'Replacement at $640.'
    },
    claim: { article: 'Jumper/cardigan — wool', replacementCost: '640', ageYears: '1', ageMonths: '2', condition: 'excellent', waiveCharge: true, charge: '24.00', keepGarment: false }
  },

  {
    slug: 'wedding-gown',
    status: 'claim',
    takenBy: 'Sharon Delaney', createdBy: UID.sharon, site: SITE_MAIN,
    date: '2026-08-10', letterDate: '2026-08-19',
    docket: 'B-22140',
    customerName: 'Alana Petrides', phone: '0431 778 205', email: 'a.petrides@example.com',
    garment: 'Ivory silk wedding gown, cleaned and boxed', colour: 'Ivory', style: 'A-line, sweetheart neckline, chapel train, silk mikado with tulle underskirt',
    brand: 'Made to measure — Rosalind Bridal, Melbourne', purchasedFrom: 'Rosalind Bridal Melbourne, October 2025',
    identifying: 'Hand-finished hem. A pale mark at the hem from the wedding day was reduced but not fully removed, and that was recorded at the time.',
    whatHappened: 'Married 17 January 2026. Gown cleaned and boxed by us in February 2026 under our clean-and-preserve service. Customer opened the box on 8 August 2026 to show her sister and found a broad yellow-brown discolouration across the bodice and down the right side of the skirt, worst where the fabric was folded.',
    actionTaken: 'Karen opened and examined the box with the customer present on 10 August. The tissue was ordinary white tissue, not the acid-free tissue our preserve service specifies, and the box is one of the older stock. Photographed the gown, the tissue and the box together. Retained the tissue.',
    customerWants: 'The cost of the gown. She has the invoice at $3,200.',
    recommended: 'Ours. The preserve service is sold on acid-free materials and this box was not packed with them. Offer the adjusted figure — note the wedding gown cap applies — and offer to attempt a reduction at our cost as well, since she may want the gown more than the money.',
    letterType: 'settlement',
    subject: 'Ivory silk wedding gown, clean and preserve — docket B-22140',
    value: '$3,200',
    facts: {
      customerName: 'Alana Petrides',
      garment: 'Ivory silk mikado wedding gown, A-line with chapel train, made to measure',
      fabric: 'Silk mikado outer, silk organza underlining, nylon tulle underskirt, polyester boning',
      value: '$3,200',
      purchased: 'Rosalind Bridal Melbourne, made to measure, collected October 2025',
      priorCleans: 'One — ours, February 2026, the clean and preserve after the wedding.',
      site: SITE_MAIN,
      dateCleaned: '11 February 2026, boxed 13 February 2026',
      docket: 'B-22140',
      method: 'Hydrocarbon, Realstar HM-450, programme 8 (bridal) — pre-spot on the hem, extended bath, minimal mechanical action, no spin, dried at 35 degrees C',
      precautions: 'Cleaned alone. Hem mark reduced by hand on the spotting board and the residual mark recorded on the docket and shown to the customer at collection.',
      gentler: 'Yes. The clean itself is not in question — the gown was sound when it went into the box.',
      careLabel: 'Specialist clean only. No symbol. Manufacturer’s tag reads "Rosalind Bridal — professional clean, silk, do not press directly".',
      labelCondition: 'Intact and legible.',
      intakeInspector: 'Sharon Delaney',
      tags: 'At-risk noted for the existing hem mark only, signed 9 February 2026. Nothing about storage.',
      faultNoticedBy: 'The customer, opening the box on 8 August 2026, six months after boxing.',
      photos: 'Yes — twelve from February including the residual hem mark, fourteen from 10 August including the tissue and the box.',
      damage: 'Broad yellow-brown discolouration across the bodice and the right skirt panel, following the fold lines. Consistent with acid migration from non-archival tissue. The February hem mark is unchanged.',
      customerClaim: 'That she paid for preservation and the gown has been ruined by the way we stored it.',
      remedySought: 'The full purchase price, $3,200.'
    },
    claim: { article: 'Wedding gown — after the wedding (capped at 50%)', replacementCost: '3200', ageYears: '0', ageMonths: '10', condition: 'excellent', waiveCharge: true, charge: '295.00', keepGarment: false }
  },

  {
    slug: 'curtains',
    status: 'claim',
    takenBy: 'Sharon Delaney', createdBy: UID.sharon, site: SITE_MAIN,
    date: '2026-04-09', letterDate: '2026-04-16',
    docket: 'B-22886',
    customerName: 'Deborah Kastellorizos', phone: '0407 331 962', email: 'd.kast@example.com',
    garment: 'Four pairs of lined pinch-pleat curtains', colour: 'Oatmeal', style: 'Pinch pleat, cotton/linen face with cotton sateen lining, 2,650 mm drop',
    brand: 'Made to measure — unbranded', purchasedFrom: 'Local curtain maker, 2019',
    identifying: 'Sun damage along the leading edge of the two north-facing pairs, obvious before cleaning and recorded.',
    whatHappened: 'Four pairs taken down and brought in 30 March, cleaned 2 April, collected 4 April. Customer rang 9 April to say two pairs no longer reach the floor — she measures them 40 mm short — and that the hems are pulling.',
    actionTaken: 'Measured the returned pairs against the intake measurements on the docket: 2,650 mm at intake, 2,610 mm now. Karen attended the house on 14 April and looked at them hung. Checked the fibre content, which the customer confirmed from the maker’s invoice as cotton/linen with a cotton lining, and no pre-shrunk treatment.',
    customerWants: 'New curtains, quoted at $2,400 by her original maker.',
    recommended: 'Defend, but carefully. A 1.5% relaxation shrinkage on an unlined-in-name-only cotton/linen curtain hung for seven years in a north-facing window is within what the trade accepts and what the customer was warned of in writing at intake. The sun damage on the leading edges also predates us and is on the docket. Deny liability but offer to have our alterations room let the hems down at our cost — there is turn-up in them.',
    letterType: 'denial',
    subject: 'Four pairs lined curtains — docket B-22886',
    value: '$2,400',
    facts: {
      customerName: 'Deborah Kastellorizos',
      garment: 'Four pairs pinch-pleat curtains, lined, 2,650 mm drop at intake',
      fabric: 'Cotton/linen union face, cotton sateen lining. No pre-shrink treatment per the maker.',
      value: '$2,400',
      purchased: 'Made to measure by a local curtain maker, 2019',
      priorCleans: 'Never cleaned in seven years, by us or anyone.',
      site: SITE_MAIN,
      dateCleaned: '2 April 2026',
      docket: 'B-22886',
      method: 'Perchloroethylene, Union XL-800, programme 9 (drapery) — extended bath, reduced mechanical action, 180 rpm, dried at 45 degrees C, hung immediately',
      precautions: 'Measured and recorded at intake. Hung to relax straight out of the machine. Customer signed the drapery advice, which states in terms that relaxation shrinkage of up to 3% is normal and not a fault.',
      gentler: 'Yes — the drapery programme is the mildest we run on a lined curtain.',
      careLabel: 'No care label present. None was supplied by the maker.',
      labelCondition: 'Missing entirely. The garment carries no care instruction of any kind.',
      intakeInspector: 'Sharon Delaney',
      tags: 'Yes — drapery advice signed 30 March 2026, covering relaxation shrinkage, sun damage and the risk to weakened fabric.',
      faultNoticedBy: 'The customer, 9 April 2026, five days after collection.',
      photos: 'Yes — eight at intake including the sun damage on the leading edges, six taken at the house on 14 April.',
      damage: 'Drop reduced from 2,650 mm to 2,610 mm, being 1.5%. Hem stitching under tension on the two north-facing pairs. Pre-existing sun degradation along the leading edges, unchanged.',
      customerClaim: 'That the curtains were the right length before cleaning and are now too short.',
      remedySought: 'Replacement of all four pairs at $2,400.'
    },
    claim: { article: 'Curtains/drapes — lined or coated', replacementCost: '2400', ageYears: '6', ageMonths: '0', condition: 'average', waiveCharge: false, charge: '186.00', keepGarment: false }
  },

  {
    slug: 'leather-jacket',
    status: 'open',
    takenBy: 'Rebecca Toomey', createdBy: UID.rebecca, site: SITE_DROP,
    date: '2026-08-24', letterDate: '2026-08-24',
    docket: 'K-09104',
    customerName: 'Sione Latu', phone: '0466 812 340', email: 's.latu@example.com',
    garment: 'Black lambskin leather jacket', colour: 'Black', style: 'Biker, asymmetric zip, quilted shoulder panels',
    brand: 'AllSaints', purchasedFrom: 'AllSaints Melbourne, 2021',
    identifying: 'Right sleeve is visibly lighter than the left and than the body — the customer parks with that arm at the window.',
    whatHappened: 'Brought into the drop store for cleaning. Nothing has gone wrong yet — this is an intake decision. The jacket shows uneven colour across the panels, the finish is worn through at both cuffs and the collar, and there is a stiffened area on the lower back consistent with a spill that has dried.',
    actionTaken: 'Rebecca stopped the booking and rang Bendigo rather than take it on the counter. Karen looked at photos. Decision made to take it only on a signed at-risk authorisation naming colour loss, further finish loss and stiffening, and to send it to the specialist leather cleaner rather than run it in-house.',
    customerWants: 'It cleaned and the back stain out.',
    recommended: 'Take it, but only on the authorisation, and set the expectation in writing before it leaves the counter. Leather comes back with a different colour more often than any other class we handle and this one is halfway there already.',
    letterType: 'intake-authorisation',
    subject: 'At-risk authorisation — black lambskin leather jacket, docket K-09104',
    value: '$1,100',
    factFamily: 'intake',
    facts: {
      customerName: 'Sione Latu',
      garment: 'AllSaints black lambskin biker jacket, asymmetric zip',
      fabric: 'Lambskin leather, quilted polyester shoulder panels, viscose lining',
      value: '$1,100',
      age: 'Approximately 5 years',
      careLabel: 'Leather specialist clean only. No symbol. Tag reads "By leather specialist only — colour change may occur".',
      labelPresent: 'Present and legible in the lining seam.',
      preExisting: 'Finish worn through at both cuffs and along the collar fold. Right sleeve two shades lighter than the body from sun. A stiffened area approximately 150 mm across on the lower back where something has dried into the skin.',
      atRiskFeatures: 'Leather with an applied surface finish, already uneven; five years of wear; a set stain of unknown origin; quilted panels of a different substrate that will respond differently.',
      serviceAsked: 'Full clean and removal of the mark on the lower back.',
      methodProposed: 'Sent out to our specialist leather cleaner. Clean, then re-finish the whole jacket to even the colour — not spot re-finish, which will show.',
      risksExplained: 'Told at the counter and set out in this authorisation: colour will change and may not return to the original shade; further loss of finish at the cuffs and collar is likely; the mark on the back may not come out at all; the quilted panels may not take the re-finish evenly. Turnaround 3 to 4 weeks, not the usual 5 days.',
      photosTaken: 'Yes — nine at the drop store, including the sleeve colour difference, both cuffs, the collar and the back mark with a scale.',
      staffMember: 'Rebecca Toomey',
      site: SITE_DROP,
      docket: 'K-09104'
    },
    claim: null
  },

  {
    slug: 'down-jacket',
    status: 'awaiting-customer',
    takenBy: 'Chloe Barnes', createdBy: UID.chloe, site: SITE_MAIN,
    date: '2026-08-22', letterDate: '2026-08-25',
    docket: 'B-25491',
    customerName: 'Fiona Brereton', phone: '0414 507 228', email: 'f.brereton@example.com',
    garment: 'Navy down puffer jacket', colour: 'Navy', style: 'Hip length, hooded, horizontal baffles',
    brand: 'Kathmandu', purchasedFrom: 'Kathmandu Bendigo, winter 2024',
    identifying: 'Small repaired tear on the right forearm, patched by the customer with adhesive tape residue still present.',
    whatHappened: 'Cleaned 20 August. Customer returned 22 August saying the jacket is flat and lumpy — the down has migrated within the baffles and clumped at the bottom of each channel, leaving cold spots along the top.',
    actionTaken: 'Emma looked at it and agreed it is clumped. Explained that down clumps after cleaning and is normally recovered by tumbling with dryer balls on low heat, which we had done once. Offered to take it back and do a full re-loft over a longer cycle at no charge.',
    customerWants: 'Either the jacket back to how it was or the price of a new one.',
    recommended: 'Not a claim in the ordinary sense. Down migration is a known and recoverable outcome and the jacket is not damaged. Offer the free re-loft in writing, and a goodwill credit for the trouble. She has not brought it back in yet.',
    letterType: 'goodwill',
    subject: 'Navy down puffer jacket — docket B-25491',
    value: '$520',
    facts: {
      customerName: 'Fiona Brereton',
      garment: 'Kathmandu navy hooded down puffer jacket, horizontal baffles',
      fabric: '100% polyamide shell, 700 fill power duck down, polyester lining',
      value: '$520',
      purchased: 'Kathmandu Bendigo, winter 2024',
      priorCleans: 'First clean with us. Customer has washed it at home once.',
      site: SITE_MAIN,
      dateCleaned: '20 August 2026',
      docket: 'B-25491',
      method: 'Wet cleaning, Speed Queen washer 3, down programme, followed by one low-heat tumble with dryer balls',
      precautions: 'Zips closed, hood detached, down programme with extended rinse. One re-loft cycle given as standard.',
      gentler: 'The method was correct for the garment. One tumble cycle is our standard and this jacket needed more.',
      careLabel: 'Machine wash cold, tumble dry low with dryer balls, do not dry clean. Symbol: tub 30, square with a dot.',
      labelCondition: 'Intact and legible.',
      intakeInspector: 'Chloe Barnes',
      tags: 'No at-risk tag. The taped repair on the right forearm was recorded on the docket.',
      faultNoticedBy: 'The customer, 22 August 2026.',
      photos: 'Two at intake showing the taped repair. Four on 22 August showing the clumping.',
      damage: 'No damage. Down has migrated and clumped at the base of each baffle, leaving the upper part of each channel thin. Recoverable by extended low-heat tumbling.',
      customerClaim: 'That the jacket has been ruined and is no longer warm.',
      remedySought: 'Replacement, or the jacket restored.'
    },
    claim: { article: 'Ski jacket — quilted', replacementCost: '520', ageYears: '2', ageMonths: '0', condition: 'average', waiveCharge: true, charge: '38.00', keepGarment: false }
  }
];

// What each letter type records in the claims register. Mirrors CLAIM_OUTCOMES
// in index.html (:4048).
const CLAIM_OUTCOMES = {
  twimc:                 { label: 'Defended', tone: 'defended' },
  denial:                { label: 'Defended', tone: 'defended' },
  settlement:            { label: 'Paid', tone: 'paid' },
  goodwill:              { label: 'Goodwill', tone: 'goodwill' },
  apology:               { label: 'Goodwill', tone: 'goodwill' },
  'complaint-response':  { label: 'Responded', tone: 'other' },
  'intake-authorisation':{ label: 'Risk flagged at intake', tone: 'intake' }
};

const parseMoney = (v) => {
  const n = parseFloat(String(v == null ? '' : v).replace(/[^0-9.]/g, ''));
  return isNaN(n) ? 0 : n;
};

const dateLong = (iso) => new Date(iso + 'T09:00:00+10:00')
  .toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Australia/Melbourne' });

// Fan one case out into the four records the app stores. bodies is a map of
// slug -> the letter text, read from mock/letters/ by build.mjs.
export function buildRecords(bodies) {
  const problems = [], chats = [], letters = [], claims = [];

  for (const k of CASES) {
    const pid   = 'P' + k.slug;
    const cid   = 'c' + k.slug;
    const userMsgId = 'm' + k.slug + '-u';
    const aiMsgId   = 'm' + k.slug + '-a';   // == letter.sourceMsgId == claim.id
    const ts    = T(k.date);
    const lts   = T(k.letterDate);

    problems.push({
      id: pid, date: k.date,
      docket: k.docket, customerName: k.customerName, phone: k.phone,
      email: k.email, noEmail: false, site: k.site,
      garment: k.garment, colour: k.colour, style: k.style, brand: k.brand,
      purchasedFrom: k.purchasedFrom, identifying: k.identifying,
      whatHappened: k.whatHappened, actionTaken: k.actionTaken,
      customerWants: k.customerWants, recommended: k.recommended,
      takenBy: k.takenBy, status: k.status,
      chatId: cid,
      claimId: CLAIM_OUTCOMES[k.letterType] ? aiMsgId : null,
      ackSentAt: k.ackSentAt || null, ackSentTo: k.ackSentTo || null,
      createdBy: k.createdBy,
      createdAt: ts, updatedAt: lts
    });

    const body = bodies[k.slug];
    if (!body) throw new Error('no letter body for case ' + k.slug);

    chats.push({
      id: cid,
      title: k.subject,
      createdAt: ts,
      createdBy: k.createdBy,
      kind: 'problem',
      problemId: pid,
      messages: [
        { id: userMsgId, role: 'user', content: bodies['chat:' + k.slug + ':q'] },
        { id: aiMsgId,   role: 'ai',   content: bodies['chat:' + k.slug + ':a'],
          letterOffer: { subject: k.subject, type: k.letterType } }
      ]
    });

    letters.push({
      id: 'L' + k.slug,
      date: dateLong(k.letterDate),
      subject: k.subject,
      type: k.letterType,
      family: k.factFamily || 'garment',
      scope: null,
      sourceMsgId: aiMsgId,
      staffId: null,
      body: body,
      facts: k.facts,
      claim: k.claim,
      problemId: pid,
      createdBy: k.createdBy,
      createdAt: lts, updatedAt: lts
    });

    const outcome = CLAIM_OUTCOMES[k.letterType];
    if (!outcome) continue;

    const calc = k.claim ? calcAdjustment(k.claim) : null;
    const offered = calc ? calc.amount : 0;
    const atStake = parseMoney(k.facts.value) || (calc ? calc.replacementCost : 0);

    claims.push({
      id: aiMsgId,
      date: dateLong(k.letterDate),
      ts: lts,
      customer: k.customerName,
      garment: k.garment,
      cause: k.subject,
      site: k.site,
      docket: k.docket,
      problemId: pid,
      type: k.letterType,
      outcome: outcome.label,
      tone: outcome.tone,
      atStake: atStake,
      paid: k.letterType === 'settlement' ? offered : 0,
      saved: outcome.tone === 'defended'
        ? atStake
        : (k.letterType === 'settlement' ? Math.max(atStake - offered, 0) : 0)
    });
  }

  return { problems, chats, letters, claims };
}
