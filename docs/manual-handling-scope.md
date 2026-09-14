# Manual handling — scope for module 07

> **Status: built and pushed. Nothing is deployed.** Raised by Rita during testing —
> the training engine already did everything a manual handling course needs except
> prove the person can actually lift.
>
> Where the build diverged from this scope, noted inline below: the refresh requires
> **both** halves again rather than one (Q1, decided); the sign-off queue ships without
> the ageing flag; an owner may self-sign; and the release carries a one-time notice on
> the register. Batches A, B and C all landed rather than A and B alone. The figures are
> generic line diagrams as scoped — photographs of a real plant remain follow-on work.

Scoped against `index.html` at `3f5952d`, with `docs/TRAINING.md` as the reference for
how module 08 already works.

## Why this one is different from the six that exist

The six built-in courses are all knowledge. You read five pages about the Australian
Consumer Law, you answer eight questions, and the record says you understood it. That
is the right shape for the law at the counter, because knowing it *is* the competence.

Manual handling is not that. A person can score ten out of ten on lifting technique and
still wreck their back the first time they pull a loaded cage out of the van, because
knowing and doing are different things and only one of them is worth anything when
someone is holding forty kilos of wet curtain. Every regulator in the country takes the
same view: instruction on its own is not control of the risk.

So this course carries a second half the others do not have — a supervisor watching the
person do the work and recording that they did it properly. That is the substance of
this build. The lesson text is a day's writing; the sign-off is the feature.

## The four decisions

| | Decision | Why |
|---|---|---|
| **Audience** | Built-in course 07, shipped to every business | Every dry cleaner has the same tasks and the same duty. A course only Master Dry Cleaners can see answers nobody's problem but ours, and the custom-course tool already lets any business replace it with their own. |
| **Depth** | Quiz **plus supervisor sign-off** | Instruction without observed practice is the thing regulators specifically say is not enough. It is also the half that makes the printed record worth producing. |
| **Rules** | Required of everyone, due within **30 days** of start, **12-month** refresh | Counter staff carry bulk orders and load cages too — excluding them leaves a gap you would have to explain after a counter injury. These are defaults written into `courseRule`; any owner can change all three. |
| **Diagrams** | Extend the lesson renderer to take figures; ship generic line diagrams | You cannot teach a lift in prose. The renderer change is reusable by every future course, which is most of why it is worth doing here. |

The rules are the first built-in course to ship with anything other than the defaults —
required, no deadline, no expiry. That is deliberate and it is worth being clear about
the consequence: **on the release that carries this, every existing business gets a new
required course and every staff member older than 30 days shows it as overdue.** See
*Switching it on* below.

## What the course teaches

Six lessons, roughly fifteen minutes, ten questions, same 80 per cent pass mark as the
rest. Written to the common ground between the Victorian OHS Regulations 2017 Part 3.1
(hazardous manual handling) and the WHS Regulations reg 60 that the other states use, so
one course is correct nationally. The course names both rather than pretending Australia
has one scheme.

| # | Lesson | The point of it |
|---|---|---|
| 1 | What the law actually asks | The duty is to eliminate or minimise the risk so far as is reasonably practicable — not to hold a lifting demonstration once. Consultation is part of it. |
| 2 | What actually hurts people here | The real task list: cages and rails, wet curtains, bulk bags, solvent drums, press work, van loading, bending into machines, standing all day. Force, posture, repetition, duration. |
| 3 | Before you lift | The first decision is whether to lift at all. Assess, plan the route, clear it, get help, get the trolley. |
| 4 | Lifting, carrying, pushing, lowering | Technique, team lifts, and why pushing beats carrying nearly every time. |
| 5 | The injuries that come from small things | Most of a pressing day is a light movement done four hundred times. Rotation, bench height, micro-breaks. |
| 6 | Say something early | A twinge reported today is a conversation. The same back reported in six weeks is a WorkCover claim. Reporting is not blame. |

Lesson 2 is the one an owner will most want to replace with their own task list, which
the existing custom-course tool already allows.

## How the sign-off works

### The record

A new `state.signoffs` array, append-only, merged into the cloud blob by id exactly the
way `mergeTrainingBeforeSave()` already merges attempts.

It has to be a separate record rather than a field stamped onto the quiz attempt, and the
reason is mechanical rather than aesthetic. Sign-off happens after the quiz, sometimes
days later and by a different person on a different device. Attempts are unioned by id
before every cloud write — so a supervisor editing an existing attempt record on the back
office machine would have that edit silently overwritten by the counter iPad's untouched
copy of the same id. Separate records are only ever added, never mutated, and the
existing merge handles them correctly with no new failure mode. `mergeTrainingBeforeSave`
generalises to union both keys.

```
{ id, staffId, staffName, courseId,
  byUserId, byName,          // who watched
  observed: [six booleans],  // the checklist
  competent: true | false,
  note: '',
  at: <timestamp>,
  selfSigned: true | false }
```

### What the supervisor is actually ticking

Six items, all six required before the sign-off can be recorded as competent, plus a free
text note:

1. Assesses and plans before lifting — asks for help or gets equipment when the load needs it
2. Lifts and lowers with a stable base, load close, no twisting
3. Pushes rather than carries wherever a trolley or cage is available
4. Communicates and leads a team lift properly
5. Works at an adjusted bench or press height and rotates through tasks
6. Knows how to report discomfort, and when

A supervisor can also record **not yet competent** with a note. That is worth having
rather than leaving the record blank: it shows the observation happened and what needs
work, which is a better training record and better evidence than silence. It reads as
`retry` on the register, same as a failed quiz.

### Where it appears in the engine

One new standing, slotted into `courseStanding()`:

| State | Outstanding? | Means |
|---|---|---|
| `awaiting-signoff` | yes | Quiz passed, practical not yet observed |

It counts as outstanding because the course genuinely is not finished, but it renders
amber rather than red — it is waiting on the business, not on the trainee, and the
register needs to show the owner that distinction so they know whose move it is.

The course is `passed` as at the **sign-off date**, not the quiz date, and the 12-month
refresh counts from there. The date competence was observed is the date you would defend.

### Who can sign off

A new `training.signoff` permission, granted to `owner`, `admin` and `manager`. Managers
need it — they are the people actually on the floor watching the work, and requiring the
owner to do every sign-off across four sites guarantees it does not happen.

Nobody signs off their own practical, with one exception: a sole owner has nobody above
them, so the owner role can self-sign, the record carries `selfSigned: true`, and the
certificate says so. An honest record beats a blocked one, and beats a dishonest one by
more.

## Figures

Lessons gain an optional `figures: [{ svg, caption, alt }]`, rendered under the body.
Built-in diagrams ship as inline SVG constants in `index.html` — no hosting, no
bandwidth, no storage limit, sharp at any size, and they can pick up the theme variables
so they work in dark mode, which a photograph cannot.

Deliberately **not** a markdown syntax change. `renderMarkdown()` escapes its input
before parsing, which is what keeps AI-drafted custom courses from injecting anything; an
image tag in the markdown path would have to punch a hole in exactly that. A separate
keyed field keeps the escape intact.

Photographs of our own plant and image upload for custom courses are both follow-on work,
noted here so the renderer is built to take them: `figures` entries would carry a `src`
instead of an `svg`, with the usual size cap.

## What was built

| Batch | What | Status |
|---|---|---|
| **A** | Course 07 content, quiz, and its rule defaults | Built. Six lessons, ten questions, 80% pass mark, `COURSE_RULE_DEFAULTS` carrying the 30-day deadline and 12-month refresh. |
| **B** | `figures` support in the lesson renderer, plus the diagrams | Built. Four inline SVG diagrams: the lift, twisting, pushing a cage, working height. Rendered for built-in courses only. |
| **C** | Sign-off: records, merge, standing, permission, queue, certificate, CSV | Built. `state.signoffs`, the `awaiting-signoff` standing, `training.signoff` for managers, the waiting queue, and both exports. |

Covered by 43 tests driving the real code in `index.html` — the standing machine, the
refresh arithmetic on both halves, who may sign what, the form's validation, the queue,
the notice, and both exports — plus a browser pass through the whole flow.

## Switching it on

The release that carries batch A turns a new required course on for every business at
once, and everyone past their first month reads as overdue the moment it lands. Three
ways to handle it, and the middle one is the recommendation:

**Ship it required, and say so.** A short note on the training screen the first time an
owner opens it after the update, explaining what appeared and that the deadline and
refresh are theirs to change. Honest, and the overdue flags are arguably correct — nobody
has done this training.

Ship it optional and let each owner switch it on, which avoids the red but means most
businesses never turn it on and the feature does nothing. Or date the deadline from the
release rather than the person's start date, which sounds kinder but puts a date on the
record that is not defensible later — *within 30 days of starting* is a rule a tribunal
can check, *within 30 days of whenever we updated the app* is not.

## Questions, and how they were answered

1. **Does the 12-month refresh require the quiz again, the sign-off again, or both?**
   **Both.** Each half carries its own expiry and the course falls due when the first of
   them does, so re-sitting the questions cannot revive a year-old practical and a fresh
   observation cannot revive a year-old quiz.
2. **What happens to someone with no supervisor at their site on the day?** They sit in
   `awaiting-signoff`, which is outstanding but never overdue — it is the business
   holding them up, not the other way round. The queue at the top of the register is what
   keeps that visible. The ageing flag that would turn a long wait red as the *business's*
   overdue was considered and left out; if these queues start sitting for weeks, that is
   the change to make.
3. **Gordon Hotel.** Kegs, cartons and cellar work are the same duty and different tasks.
   Out of scope — a hospitality variant is a separate course, not a branch inside this
   one.

## Still open

- **Photographs instead of line drawings.** The renderer takes a `figures` array keyed to
  diagrams shipped in the file; the same shape would take a `src`. Real photos of the
  Altona plant would teach better and would also make the built-in course look specific to
  one business, so they belong in a business's own course rather than this one.
- **Image upload for a business's own courses.** Deliberately not built. Custom courses
  arrive through the cloud blob and go through `renderMarkdown`, which escapes before it
  parses — that escape is what stops an AI-drafted course injecting markup, and an image
  would need a hole in it. Worth doing properly rather than quickly.
- **A per-site register of hazardous tasks** — the third option in the original depth
  question. Still the thing that would move this from a good course to the control the
  regulations actually contemplate, and still a separate feature.

## Files this touches

| Where | What |
|---|---|
| `index.html` → `TRAINING_MODULES` | course 07 and its six lessons |
| `index.html` → `courseRule` defaults | the 30-day deadline and 12-month refresh |
| `index.html` → `renderTrainingLesson` | `figures` rendering |
| `index.html` → `courseStanding` | the `awaiting-signoff` standing |
| `index.html` → `mergeTrainingBeforeSave` | union sign-offs as well as attempts |
| `index.html` → `renderTrainingTeam` | the sign-off column and the recording panel |
| `index.html` → `PERMS` | `training.signoff` for owner, admin, manager |
| `index.html` → certificate export | the sign-off row, and the self-signed note |
| `docs/TRAINING.md` | the new standing, and who may sign off |
