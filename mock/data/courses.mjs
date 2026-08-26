// One course the business wrote itself, generated from its own intake SOP.
//
// It is published and it `replaces` the built-in 'tagging' course, which is the
// interesting part: activeCourses() then drops the built-in and shows this one in
// its place at 03, while the register keeps the old 'tagging' passes as history.
// That is the whole argument of the feature — "where your procedure differs from
// the generic course, yours should win" — and it only shows if the seed has
// records on both sides of the switch.

import { UID } from './identity.mjs';

const T = (iso) => new Date(iso + 'T09:00:00+10:00').getTime();

// sourceDocId is stitched in by build.mjs once the intake SOP has an id.
export const CUSTOM_COURSE = {
  id: 'Cmsdtagging',
  num: '03',
  title: 'Tagging garments the Main Street way',
  blurb: 'How we tag, record and authorise a garment at this counter — the docket, the inspection order, what goes on an at-risk tag, and the conversation you have before the customer walks away.',
  minutes: 12,
  reviewed: 'August 2026',
  source: 'SOP 01 — Counter intake, inspection and at-risk tagging, v4',
  sourceDocId: null,
  replaces: 'tagging',
  status: 'published',
  createdAt: T('2026-08-03'),
  updatedAt: T('2026-08-06'),

  lessons: [
    { h: 'Why the tag is the evidence',
      body: `Almost every claim this business has lost, it lost at the counter — not in the plant.

By the time a garment comes back six weeks later, nobody remembers what it looked like when it arrived. What remains is the docket, the tag and the photographs. If those are thin, the customer's account of the garment's condition is the only account there is, and we will be arguing against it with nothing.

So treat the ninety seconds at intake as the most valuable ninety seconds in the job. Two things come out of it:

- **A record** — what the garment was, what was already wrong with it, and what we said we would do.
- **A decision** — whether we take it at all, and on what terms.

Neither can be reconstructed later. Both are cheap now.`
    },

    { h: 'The docket, and getting it right first time',
      body: `Every garment gets a docket before it leaves the counter. No exceptions, no "I'll do it in a minute".

- **Bendigo dockets are prefixed B-. Kangaroo Flat dockets are prefixed K-.** The prefix travels with the garment, so a K- docket in the Bendigo plant tells the operator it came through the drop store and the intake was done by somebody working alone.
- **Count the pieces out loud, with the customer watching.** A two-piece suit is two pieces. A dress with a separate belt is two pieces. Say the number back to them.
- **Phone number is not optional.** If someone will not give one, write on the docket that they declined and read them the collection date instead. A garment we cannot ring about is a garment that sits on the rack for three months.
- **Collection date** is what we can actually do, not what they would like. If it is going out to the leather specialist, it is three to four weeks and you say so now.`
    },

    { h: 'The inspection, in order',
      body: `Work the same order every time. Order is what stops you missing things when the shop is busy.

**Collar → shoulders → cuffs → front → back → hem → lining → pockets → closures → trims.**

At each point you are looking for three things: damage that is already there, wear that will become damage, and anything that will not survive the process.

Specifically:

- **Collar and cuffs** — build-up, shine, fraying at the fold. Build-up on a collar changes what machine the garment goes into.
- **Shoulders** — sun fade, which is common in Bendigo and always worse on the side the customer drives with.
- **Pockets** — empty them. Every one. A pen in a pocket is a claim, and it is a claim we cannot defend.
- **Closures and trims** — buttons, zips, beading, sequins, appliqué, anything glued rather than sewn.
- **Lining** — split linings at the underarm are so common that not recording one is negligent.

Use the daylight lamp at the end of the counter, not the overhead fluorescents. Take a garment to the window if you are unsure.`
    },

    { h: 'What makes a garment at-risk',
      body: `A garment is at-risk if any of these are true. This is not a judgement call — if it is on the list, it is at-risk.

- Beading, sequins, or any applied embellishment
- Applied print, foil, flock or transfer
- Polyurethane, coated, bonded or fused construction
- Leather or suede, including trim on an otherwise ordinary garment
- Faux fur
- **No care label**, or a label that is cut out, illegible, or contradicts the fabric
- The garment is more than about five years old
- A wedding gown, or any made-to-measure formal
- Curtains, in every case
- It is already damaged, stained or worn through
- **The customer tells you it is precious.** Their word for it counts.

Each of those fails in its own way. Beads cloud and lose their coating. Prints crack and lift. Bonded fabrics delaminate. Coated fabrics go tacky. None of it can be predicted from looking, and none of it is our fault when it happens — but only if we said so first.`
    },

    { h: 'The conversation, and the signature',
      body: `The at-risk conversation is the part people avoid, because it sounds like telling a customer their garment might get wrecked. Done properly it does the opposite: it tells them we know what we are looking at.

Something close to this works:

> "I want to point something out before I take this. The beading here is plastic rather than glass, and plastic beading sometimes goes cloudy in solvent — it's the coating on the bead, not the cleaning. I'll run it on the gentlest machine we have, but I can't promise the beads. Are you happy for me to go ahead on that basis?"

Then:

- **The authorisation is signed before we accept the garment. Never after.** An authorisation signed when the customer comes to collect is worth nothing at all.
- Name the specific risk on the form. "At-risk garment" on its own means nothing. "Plastic bugle beading may cloud, dull or lose surface" is a record.
- **Photograph it.** Minimum four for anything at-risk, with a scale reference, and close-ups of whatever you have just written down.
- If they push back, or if you are not sure, we would rather decline the garment than take one we cannot clean safely. Nobody will ever be in trouble for declining.

And at Kangaroo Flat, working alone: **photograph, ring Bendigo, and do not accept an at-risk garment on your own judgement.**`
    }
  ],

  quiz: [
    { q: 'A customer brings in a dress with plastic sequins across the bodice. What is the correct sequence?',
      a: ['Take it, clean it on the gentlest cycle, and mention the risk if she asks',
          'Explain the risk, have her sign the at-risk authorisation, photograph it, then accept it',
          'Decline it — sequinned garments are never accepted',
          'Accept it and note "at-risk" on the docket'],
      correct: 1,
      why: 'The authorisation is signed before the garment is accepted, the specific risk is named, and it is photographed. Noting "at-risk" on the docket without a signature and without naming the risk is not a record of anything.' },

    { q: 'What does a K- prefix on a docket tell the plant operator?',
      a: ['The garment is a knitwear item',
          'The garment came through the Kangaroo Flat drop store',
          'The garment is for a commercial account',
          'The garment needs a specialist clean'],
      correct: 1,
      why: 'K- is Kangaroo Flat, B- is Bendigo. It matters because the drop store is staffed by one person working alone, so the intake decision there was made without a second opinion.' },

    { q: 'In what order do you inspect a garment?',
      a: ['Whatever order the garment suggests',
          'Front, back, then anything that looks unusual',
          'Collar, shoulders, cuffs, front, back, hem, lining, pockets, closures, trims',
          'Pockets first, then the rest by eye'],
      correct: 2,
      why: 'The same order every time is what stops you missing things when the shop is busy. Working by eye means you find what catches your attention, not what is actually there.' },

    { q: 'A jacket has no care label at all. What follows?',
      a: ['Clean it as you would any similar fabric',
          'It is automatically an at-risk garment',
          'Refuse it outright',
          'Ask the customer what the label said and write that down'],
      correct: 1,
      why: 'No label, a cut-out label, an illegible label or a label that contradicts the fabric all put the garment on the at-risk list. It may still be accepted — on a signed authorisation.' },

    { q: 'When may an at-risk authorisation be signed?',
      a: ['Any time before the garment is collected',
          'Before the garment is accepted, and only then',
          'At collection, when the customer can see the result',
          'Whenever the customer next comes in'],
      correct: 1,
      why: 'Before acceptance. An authorisation signed afterwards records nothing about the decision the customer actually made, and will not survive being tested.' },

    { q: 'A customer says the dress is not valuable but that it was her mother’s. Is it at-risk?',
      a: ['No — value is what decides it',
          'Only if it is also over five years old',
          'Yes — the customer telling you it is precious puts it on the list',
          'Only if it has beading or a coating'],
      correct: 2,
      why: 'Their word for it counts. What a garment is worth to the person standing in front of you is not the same as what it is worth, and it is the first thing that decides how a complaint goes.' },

    { q: 'You are alone at Kangaroo Flat and a customer brings in a beaded gown. What do you do?',
      a: ['Photograph it, ring Bendigo, and do not accept it on your own judgement',
          'Take it on an at-risk authorisation as you would at Bendigo',
          'Decline it and send the customer to Bendigo',
          'Accept it and flag it for the driver to raise'],
      correct: 0,
      why: 'Working alone means there is no second opinion available, so the rule is explicit: photograph, ring Bendigo, and let the decision be made with someone else’s eyes on it.' },

    { q: 'Why does build-up on a collar change anything?',
      a: ['It does not — it comes out in any machine',
          'It means the garment must be declined',
          'It changes which machine the garment goes into, or means it is pre-spotted first',
          'It only matters on white shirts'],
      correct: 2,
      why: 'Product and perspiration build-up weakens the dye underneath it. Our procedure sends that garment to hydrocarbon or has it pre-spotted. Skipping that step is how the Lindsay suit jacket came back two shades lighter across the collar.' }
  ]
};

// The built-in course this one replaces is switched off by `replaces`, not by
// hiddenCourses — so nothing goes here. Left explicit so it is clear it was a
// decision and not an omission.
export const HIDDEN_COURSES = [];
