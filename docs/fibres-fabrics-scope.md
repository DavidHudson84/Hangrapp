# Fibres, fabrics and cleaning method — scope for a new course

> **Status: all three batches built and pushed. Nothing is deployed.** They land as three
> commits on `claude/fibres-fabrics-cleaning-scope-qcyxnq`, one per batch, so each can be
> reviewed or reverted on its own.
>
> Four decisions were put to David on 22 September 2026 and answered. Three confirm the
> recommendation — the course carries a practical bench test, it ships required with a 60-day
> deadline and a 24-month refresh, and curtain work stays out. The fourth went the other way:
> **the burn test is out entirely.** Set out under *Decisions taken*.
>
> Where the build diverged from this scope, noted inline: the course is **eight lessons, not
> seven** — the professional care circle earned one of its own; the mock tenant needed two
> bug fixes to take a ten-question course at all; and `mock/verify.mjs` grew its own tests
> rather than the browser pass standing alone. Covered by 103 assertions in `mock/verify.mjs`
> plus a driven browser pass through the register, all eight lessons, the quiz and the
> sign-off form.

Scoped against `app/index.html` at `36e8311`, with `docs/TRAINING.md` as the reference for how
the training engine already works and `docs/manual-handling-scope.md` as the precedent for a
course that carries a practical half.

## The gap this fills

Every course we ship after the law one assumes the person already knows what they are holding.
*Taking garments in* tells them to check the label. *Tagging* tells them to record what they
found. *Reading the garment* teaches them to spot risk — worn seats, glued stones, sun-rotted
curtains — on a garment whose fibre they have somehow already established. *Whose fault is it?*
adjudicates the damage afterwards.

Nobody has been taught the step underneath all of that: **what is this made of, and what will
that let me do to it.**

It is not an academic gap. The expensive failures in a plant are almost never a missed stain —
they are a garment put through the wrong process. Viscose that lost half its strength the
moment it got wet. An acetate lining touched with an acetone-based spotter. A wool skirt
wet cleaned on a programme meant for cotton. A polyester print that bled at press temperature.
Each of those is a write-off, and each of them was decided by somebody who read a label they
did not understand, or read no label at all and guessed. The `F` in the circle on a jacket
lining is the difference between a normal day and a claim, and I would put money on most
counters in this country not knowing what it means.

The DLI TABS families already in the knowledge base say the same thing from the other end: the
specialty fabrics, coatings, fusibles and dye-bleed bulletins are largely a catalogue of what
happens when fibre and process are mismatched. The knowledge is in the app. It is not in the
training.

## Where it sits in the running order

**Recommend 05**, which pushes the three courses below it down one:

| Course | Now | Proposed |
|---|---|---|
| How to use Hangr | 01 | 01 |
| The law at the counter | 02 | 02 |
| Taking garments in | 03 | 03 |
| Tagging garments | 04 | 04 |
| **Fibres, fabrics and cleaning method** | — | **05** |
| Reading the garment | 05 | 06 |
| Whose fault is it? | 06 | 07 |
| Lifting and moving things safely | 07 | 08 |

Renumbering costs nothing. Attempts, sign-offs and `state.courseRules` are all keyed on the
course **id**, and `courseWithNum()` re-reads a replacement course's number from the built-in it
replaces, so every existing pass, deadline and custom course survives the move untouched. We
have done it once already — *How to use Hangr* went from 06 to 01 for the same reason it goes
here: **the running order is the teaching order**, and you cannot teach someone to read a
garment for risk before you have taught them what the garment is.

Appending it as 08 is the alternative and it is worse for one reason only — a new starter works
down the list in order, and on that ordering they would learn to assess risk in month one and
learn what fabric they were assessing in month three.

## What has to move out of *Reading the garment*

There is real overlap with course 05-as-it-stands, and it needs deciding rather than leaving to
drift. The split is **mechanics here, liability there**:

| Content | Where it lives | Why |
|---|---|---|
| What the symbols mean, how the grammar works, word labels vs symbol labels | **New course** | It is a skill, taught once, with diagrams. |
| A label is the manufacturer's opinion, not a guarantee | Stays in *Reading the garment* | It is the framing for the at-risk conversation, and it belongs next to the liability point. |
| Departing from the label shifts liability to us | Stays | Same reason. This is the legal point of the whole course. |
| No label means at-risk, every time | **Both** — taught here, applied there | Short enough to repeat, important enough to. |
| Wool shrinks / silk perishes / leather varies by panel | Stays | That lesson is about spotting *damage and wear*, not identifying fibre. |
| What wool, silk, viscose, acetate and polyester tolerate | **New course** | Process tolerance, not risk-spotting. |
| Sewn or glued, coatings, fusible interfacing | Stays, cross-referenced | Construction risk is that course's strongest lesson. This one points at it rather than repeating it. |

In practice that is a trim of roughly a screen from *Reading the garment*'s first lesson, which
becomes a short liability framing plus a pointer, and no change at all to its other four.

## The four decisions

| | Decision | Why |
|---|---|---|
| **Audience** | Built-in, required of everyone, counter staff included | The counter is where the label is read and where the at-risk conversation happens. A plant-only course leaves the decision with the person who never saw the garment. |
| **Depth** | Quiz **plus a practical bench test**, signed off | This is the second course where knowing and doing genuinely differ. Somebody can name six fibres on a multiple choice and still not tell viscose from linen with it in their hand. |
| **Rules** | Required, due within **60 days** of start, **24-month** refresh | 60 rather than 30 because manual handling already owns the 30-day slot and stacking two hard deadlines on a new starter's first month means both get missed. 24 months because fibre behaviour does not change but label practice and new fabrics do. |
| **Figures** | Redraw the full care-symbol set as inline SVG | You cannot teach symbol grammar in prose. This is the largest content lift in the build and the reason the course is worth more than a page of notes. |

All four are now settled — see *Decisions taken*. The only one that moved off the
recommendation is depth's companion question, the burn test, which is out.

## What the course teaches

Seven lessons, about eighteen minutes, ten questions, same 80 per cent pass mark as the rest.
Source line: *AS/NZS 1957:1998, the ISO 3758 care symbol set, and the DLI Textile Analysis
Bulletins.*

Built as **eight** lessons rather than seven. *The circle, which is the one that matters to us*
was the back half of lesson 4 in this scope and would not fit: the letters, the bars, the two
crossed forms and the point that the circle is an instruction to the plant rather than advice
to the customer is a lesson, not a section. Splitting it also puts the two figures that matter
most on a page of their own.

| # | Lesson | The point of it |
|---|---|---|
| 1 | Why this is the first question, not the last | The four write-offs that start here — viscose wet, acetate and acetone, wool felted, disperse dye at press heat. Fibre decides process; everything else is a modifier. |
| 2 | The fibre families and what they tolerate | Five families, not forty fibres. What each one does with water, heat, agitation, alkali and solvent. |
| 3 | Identifying it without a label | Hand, drape and lustre, the wet-thread test, and the solvent spot test. **No burn test** — decided out, see below. |
| 4 | Reading a care label | The five symbols and the modifier grammar. The circle is ours and it gets the most room. |
| 5 | Labels that lie, contradict or are missing | Mislabelled imports, "dry clean only" as legal cover, the label that describes the face fabric and ignores the glued trim, two halves of a suit labelled differently, no label at all. |
| 6 | From fibre to process | The routing decision, and the three things that override the face fabric: trim, interlining and colour. |
| 7 | Putting the call on the ticket | The fibre call, the test you ran, and the at-risk wording. Short. |

Lesson 2 is the one a business is most likely to want to replace with a list matched to its own
work — a shirt laundry and a bridal specialist do not meet the same fibres — and the existing
custom-course tool already allows exactly that.

Lesson 3 does the work the burn test would have done through the **wet-thread test** instead:
pull a thread from a seam allowance, wet it, and tug. Viscose loses up to half its strength wet
and parts under a pull that cotton shrugs off, which is the one distinction the burn test was
carrying. It is slower and it is less certain on a blend, and it is the honest substitute for a
technique we have decided not to teach.

## Reading a care label — what lesson 4 actually has to contain

This is the part with no equivalent anywhere in the app today. The knowledge base cites
AS/NZS 1957 seven times and never once explains what the symbols mean.

**AS/NZS 1957:1998** allows care instructions in words, in symbols, or both. Australian-made and
Australian-labelled goods usually carry words; imports usually carry symbols only; fast fashion
carries whichever the factory had on the roll. The course has to teach both, and has to say
plainly that a label being present is not the same as it being right.

Five symbols, and every one of them is a base shape plus modifiers:

| Symbol | Means | The grammar |
|---|---|---|
| **Wash tub** | Domestic washing | A number is the maximum temperature in °C (dots on some labels). One bar underneath means reduced mechanical action, two bars means much reduced. A hand in the tub means hand wash only. Crossed out means do not wash. |
| **Triangle** | Bleach | Empty means any bleach. Two diagonal lines mean oxygen bleach only, no chlorine. Crossed out means no bleach at all. |
| **Square** | Drying | A circle inside means tumble dry, with dots for heat. Lines inside mean line dry, flat dry or drip dry depending on their direction. Crossed out means do not tumble. |
| **Iron** | Ironing | One dot about 110 °C for synthetics, two about 150 °C for wool, three about 200 °C for cotton and linen. Crossed out means do not iron. Crossed steam lines beneath it mean no steam. |
| **Circle** | **Professional textile care — ours** | **P** — tetrachloroethylene and hydrocarbon. **F** — hydrocarbon solvent only. **W** — professional wet cleaning. A bar underneath means a mild process, two bars a very mild one. A crossed circle means do not dry clean; a crossed **W** means do not wet clean. |

The circle is the lesson. Everything else on the label is advice to the customer; the circle is
an instruction to us, and **F** on a garment we would have put through perc is a claim waiting
to be made. The bar under the letter is the half of it that gets missed most often — it is not
decoration, it is a reduced-action, lower-temperature, shorter-cycle instruction, and ignoring
it is exactly the kind of departure that shifts liability onto the plant.

One more point, repeated from *Reading the garment* because it earns the repetition: **the label
describes the main fabric.** It says nothing about the leather cuff trim, the acetate lining,
the glued appliqué or the fusible in the collar, all of which will behave differently in the
process the label recommends.

### The line the course turns on

When the label and the garment disagree — and on imports they disagree often — the rule to teach
is one sentence:

> **The garment decides what is safe. The label decides who pays.**

So the safe route is the one you take; the departure is a decision that gets named to the
customer and written on the ticket; and the label is what you point at afterwards if the
garment fails anyway.

## From fibre to process

Lesson 6 is where the course pays for itself. Draft of the routing table it is built on:

| Family | Behaves like | Default route | The thing that catches people |
|---|---|---|---|
| **Cotton, linen** | Strong wet, takes heat, tolerates alkali, shrinks if not pre-shrunk | Launder or wet clean; dry clean when the construction or the dye demands it | Linen creases and shrinks; dark cottons crock. |
| **Wool, cashmere, mohair** | Felts with heat, moisture and agitation together; alkali damages it; solvent-safe | Dry clean, or wet clean on a controlled wool programme | It is the *combination* that felts it, not the water alone. |
| **Silk** | Weak wet, water-spots, dye bleeds, degraded by light and perspiration | Dry clean | Perspiration damage is already there before we see it. |
| **Viscose, rayon, modal** | Loses up to half its strength when wet, shrinks, distorts, water-marks | Dry clean unless the label says otherwise and the garment agrees | Feels and drapes like silk. Lyocell is far more stable — do not lump them together. |
| **Acetate, triacetate** | Dissolves in acetone and several spotting agents; heat-sensitive; water-spots | Dry clean, low heat, and never an acetone-based spotter | It is usually the *lining*, so the garment does not look like an acetate problem until it is one. |
| **Polyester** | Robust, holds oily soil, heat-set pleats, disperse dyes sublime with heat | Almost anything, watching press temperature | Low-sublimation dyes bleed onto everything at the press. |
| **Nylon, polyamide** | Strong, scavenges loose dye out of a dirty load, yellows with heat and age | Launder or wet clean, light colours separately | The greying is picked up from the load, not from the garment. |
| **Acrylic** | Heat-sensitive, pills, stretches and distorts when warm and wet | Cool, low agitation, supported drying | Comes back a size larger and nobody believes it was the garment. |
| **Elastane blends** | Degraded by heat, chlorine and body oils | Decided by the partner fibre, at the lower of the two heat limits | The elastane is 3 per cent of the garment and 100 per cent of the constraint. |
| **Leather, suede, fur** | Its own trade | Specialist process only | Never routed by the face-fabric rule at all. |

Then the three overrides, each of which beats the fibre call: **trim** (glued, coated,
laminated, beaded), **interlining and fusibles** (an adhesive that will bubble regardless of
what the face fabric tolerates), and **colour** (a dye that is not fast, which decides the load
before it decides the process).

## The practical half

A bench test, watched: five garments, at least two with no usable label, and the trainee names
the fibre family, reads the label where there is one, checks lining and trim separately, runs the
test that garment calls for, and routes it — saying why.

Six checks, same shape as the manual handling sign-off:

1. Names the fibre family by hand and drape on an unlabelled garment
2. Reads a symbol label correctly, including the modifier bars and the professional-care letter
3. Checks lining, trim and interlining separately from the face fabric
4. Runs the right test before committing — colour transfer, wet-thread, solvent spot
5. Routes each garment to a process and can say what drove the decision
6. Recognises and correctly words the at-risk cases, and records them

### The one engine change this needs

`SIGNOFF_CHECKS` is currently a single flat array of the six manual-handling items, because
manual handling is the only practical course. A second practical course makes it a per-course
list — `course.signoffChecks`, with the existing six moving onto course 07-as-it-becomes-08 and
`renderSignoff()` reading them off the course rather than the constant.

Existing sign-off records already carry `courseId`, so old records render against the right list
with no migration. The one wrinkle is the same trade the app already makes for course rules:
checklists are not versioned, so editing a check later re-labels the boxes on records already
written. That is acceptable for the same reason it is acceptable there, and if it ever stops
being acceptable the fix is to stamp the labels onto the record at `saveSignoff()` time.

Everything else comes free: `training.signoff` already exists and already includes managers, the
`awaiting-signoff` standing already works, the queue at the top of the register already lists
whoever is waiting, and both exports already print it.

## Figures

The biggest single piece of work, and the reason to build this rather than email a PDF around.

**Seven inline SVGs**, in `TRAINING_FIGURES` alongside the four manual-handling ones:

| Key | Shows |
|---|---|
| `sym-wash` | The tub, with temperature, the one and two bars, the hand, and the crossed form |
| `sym-bleach` | The triangle, empty, oxygen-only, and crossed |
| `sym-dry` | The square: tumble with heat dots, line, flat, drip, and crossed |
| `sym-iron` | The iron at one, two and three dots, crossed, and no-steam |
| `sym-pro` | The circle: P, F, W, the bars, and both crossed forms |
| `label-read` | A whole label read end to end, with the trap — a `W` with a bar under it |
| `route` | The routing path: fibre → construction → trim → colour → process |

Grouping by family rather than one file per symbol keeps it to seven constants instead of
twenty-odd, and puts the modifiers next to the base shape, which is how the grammar is actually
learned.

Build note: draw them. The symbol set is standardised in ISO 3758 and reproduced in AS/NZS 1957,
and GINETEX asserts rights over the marks in a number of jurisdictions — so the diagrams are our
own line drawings teaching the shapes, not a chart lifted out of somebody's manual. They also
need to pick up the theme variables so they read in dark mode, which is the same reason the
manual handling figures are SVG rather than images.

## Rules, and switching it on

Shipping required puts the same one-off flag on every business that manual handling did: a new
required course appears for everyone, and anybody more than 60 days past their start date reads
as overdue the moment the release lands. `trainingNoticeHtml()` and `state.seenNotices` already
exist for exactly this — the notice just needs its second case.

The 60-day default is the one thing worth arguing about. It is deliberately looser than manual
handling's 30 because the risk it controls is commercial rather than physical: a person who has
not done this course yet costs us a garment, not a back. Any owner can tighten it to 30 on the
rules panel.

## Suggested batches

| Batch | What | Risk |
|---|---|---|
| **A** | The course — seven lessons, ten questions, rule defaults, the renumber to 05, and the trim to *Reading the garment* | Low. Content plus a number change nothing is keyed on. |
| **B** | The seven figures | Low, and self-contained. The renderer already takes them. |
| **C** | Per-course sign-off checklists, and the bench test wired up as this course's practical | Medium. Touches records that already exist for manual handling. |

All three are built, as three commits. A and B were kept separable as planned, and C landed in
the same pass rather than a later release — the change turned out smaller than scoped, because
`SIGNOFF_CHECKS` had only three call sites and sign-off records already carried `courseId`.

### Two bugs the build turned up, both in the mock

Neither is in the app, and both were latent before this course existed.

**The answer generator hung.** `markAnswers()` walks the question list by a fixed step to
scatter the wrong answers, and the step could share a factor with the question count — with ten
questions and a step of five it revisits two questions forever and never fills the set. Eight
questions hid it; the first ten-question course seeded into the mock made it a hang rather than
a latent bug. The walk now steps by a value coprime with the count.

**The declaration lifter read apostrophes inside comments as strings.** `mock/verify.mjs` pulls
declarations out of `index.html` by balancing braces, tracking string literals so a brace inside
one does not count. It did not know about comments, so *a business's own course* in a comment
opened a string that never closed and the declaration read as unbalanced to the end of the file.
It now skips comments whole.

## How it gets tested

Both mock guards were updated as expected — the active-course count, and `BUILT_IN_MODULES` so
the demo tenant has attempts against the new course rather than a register that is red down one
whole column. Five people now sit the fibres course in the demo, four of them awaiting a
sign-off, which is what a register looks like in the months after a course is switched on.

The counts that were hard-coded to six now count against the active list, so the next course to
land changes what they mean without changing what they assert. **103 assertions pass**, including
the new ones: that each practical course serves its own checklist, that a passed quiz with no
sign-off reads as `awaiting-signoff` and is never overdue, that the rule defaults are what was
decided, that every figure a lesson asks for exists, and that every course is sittable.

The browser pass drove the real app against the mock tenant: the register and its new-course
notice, all eight lessons with their figures, the ten-question quiz, and the sign-off form
showing the fibres checklist rather than the lifting one. It caught two captions overflowing
their own viewBox, which no assertion in `verify.mjs` could see — the sandbox has no DOM and
`getBBox()` is the only honest way to measure rendered text.

## Decisions taken

Four questions were put to David on 22 September 2026. All four are answered and the build can
proceed on them.

1. **Does the course end with a practical?** **Yes — a quiz plus a watched bench test.** Naming
   six fibres on a multiple choice is not the same skill as telling viscose from linen with it in
   your hand, and the sign-off machinery already exists. Roughly 40 labour hours across the group
   to get everyone through, recurring at each refresh, against one wrongly routed garment. It
   ships as batch C, after the content, so nothing is held behind it.
2. **What does it ask of a person?** **Required of everyone, due within 60 days of starting,
   refreshing every 24 months.** 60 rather than 30 because manual handling already owns the first
   month; 24 months because fibre behaviour does not change but label practice does. Everyone
   past their first 60 days reads as overdue the day it releases, and the one-time notice on the
   register is what explains that.
3. **Does it teach the burn test?** **No — out entirely.** No open flame is taught anywhere in
   our training. That is the one decision that went against the recommendation in the original
   scope, and it costs the course its cleanest viscose-versus-cotton call; lesson 3 carries the
   wet-thread test in its place, which is slower and less certain on a blend. The technique is
   not named, not described and not gated — it is simply absent, which is the only version of
   "out" that holds up if anything ever goes wrong.
4. **Does curtain and blind work get covered?** **No — out of scope.** Same answer the Gordon
   Hotel got on manual handling. Dr Drapes fabrics share the fibre families and almost none of
   the constructions, and folding them in would make a built-in course look written for one
   business. A curtain course is a separate course if it is worth one.

## Still open

Two items where the recommendation stands and the build proceeds on it unless someone says
otherwise, plus one that is genuinely follow-on work.

- **05 or 08.** Proceeding on **05**, ahead of *Reading the garment*, for the reasons under
  *Where it sits in the running order*. It is a one-line change either way and nothing is keyed
  on the number, so it stays reversible after release.
- **Images in the quiz.** Proceeding **without them**. Identifying fibre from a photograph is not
  the same skill as identifying it in your hand, so the questions can carry the course; the
  symbols are visual by definition, but they are taught in the lesson figures and the quiz tests
  what they mean rather than which shape is which. Revisit if the pass rates say otherwise.
- **Photographs instead of line drawings.** Weave, nap, lustre and pilling are the things a photo
  teaches better than a drawing, and the renderer was built to take a `src` when image support
  lands. Same position as manual handling: real photographs belong in a business's own course,
  and image upload for custom courses is still deliberately unbuilt, because `renderMarkdown()`
  escapes before it parses and that escape is what keeps an AI-drafted course from injecting
  markup.

## Files this touches

| Where | What |
|---|---|
| `app/index.html` → `TRAINING_MODULES` | the new course, and the renumber of the three below it |
| `app/index.html` → *Reading the garment* lesson 1 | trimmed to the liability framing plus a pointer |
| `app/index.html` → `TRAINING_FIGURES` / `MH_FIG_*` neighbours | the seven care-symbol and routing figures |
| `app/index.html` → `COURSE_RULE_DEFAULTS` | required, 60-day deadline, 24-month refresh |
| `app/index.html` → `SIGNOFF_CHECKS` / `renderSignoff` / `saveSignoff` | checklists per course rather than one global list |
| `app/index.html` → `trainingNoticeHtml` | the second case for a newly required course |
| `index.html` (landing) line 681 | "Seven built-in courses" becomes eight |
| `mock/build.mjs` line 35 | `BUILT_IN_MODULES`, so the demo tenant has attempts against it |
| `mock/verify.mjs` line 215 | the active-course count |
| `docs/TRAINING.md` | the running order table, and the second practical course |
