# Training — who does what, and how the app knows

Module 08. Every role can open it, including `staff`: staff records are the
owner's business, training is the staff member's, and a course the person on the
counter cannot open trains nobody. The owner-only half — the register and the
course rules — is gated inside the screen on `training.manage`.

## The two lists, and the one link between them

There are two separate things and it matters which is which:

| | What it is | Where it lives |
|---|---|---|
| **Login** | an email and a password that can sign in, and a role | Supabase `auth.users` + `memberships` |
| **Staff record** | who that person is to the business — name, role, classification, start date | `state.staff`, in the business `data` blob |

`staff.userId` is the only thing joining them. It is set:

1. **When the owner creates the login** (Users → Add someone). This is the normal
   path and the one to use — the person is recognised the first time they sign in.
2. **When someone picks their own name** in Training, if their login has not
   already claimed a record. This is the fallback for a device with no login of
   its own.
3. **From the Users screen**, per row, to fix a link or make one for a login that
   pre-dates this.

A login claims **at most one** record. `trainingKnownWho()` resolves the person
in front of the app: the claimed record if there is one, otherwise whoever they
picked this session, otherwise nobody, which is what triggers the picker.

### Why the picker is filtered

`trainingPickableRoster()` offers only records that are unclaimed or claimed by
the current login. A record another login owns is never offered — that person has
their own sign-in and should be using it, and without the filter any staff login
could pick a colleague's name and sit their quiz under it.

Unclaimed records stay open to anyone, on purpose. That is what keeps the shared
counter iPad working for casuals who have no login at all, and picking one from a
login that already holds a record does **not** move the link — a borrowed device
records a result, it does not change who owns what.

## What a course asks of a person

`state.courseRules[courseId]`, edited on Team progress → *What each course asks of
a person*:

| Field | Default | Means |
|---|---|---|
| `required` | `true` | on everyone's checklist, and counted in "x of y" |
| `dueDays` | `null` | must be passed within N days of the person's **start date** |
| `refreshMonths` | `null` | a pass older than N months falls due again |

The defaults are exactly the old behaviour — required of everyone, no deadline,
no expiry — so a business that never opens this panel sees nothing change and no
register turns red overnight. `setCourseRule()` stores nothing for a course left
at its defaults, which keeps the defaults free to change later.

Deadlines count from the start date in Staff because it is the only anchor the
business can defend: *"within 30 days of starting"* is a rule a tribunal can
check; *"within 30 days of whenever we switched this on"* is not. No start date
means the course is still required but has no date attached, and the panel says
how many of the team that applies to.

## Where someone stands

`courseStanding(who, course, staffRec)` is the single source of truth. Every
chip, cell, count and printed row goes through it, so the trainee's list, the
owner's register and the certificate cannot disagree.

| State | Outstanding? | Means |
|---|---|---|
| `passed` | no | done, still in force |
| `expiring` | no | done, refresh falls due within 30 days |
| `expired` | yes | was passed, refresh now overdue |
| `overdue` | yes | required, not passed, past the deadline |
| `retry` | yes | required, sat it, did not pass |
| `todo` | yes | required, never attempted |
| `optional` | no | not required of anyone |

`trainingSummary()` counts those into the one line the staff card, the user row
and the trainee's own header all show.

A **retired** course — switched off, or replaced by one of the business's own —
keeps its column on the register and its row on the certificate, but is never
outstanding. Someone who passed Tagging last month genuinely passed it; switching
that course off must not blank their record, and must not hold it against them
either.

## The record itself

Attempts are append-only. A fail followed by a pass is a better training record
than a bare pass, and the register is an audit trail rather than a scoreboard.
`mergeTrainingBeforeSave()` unions attempts by id before every cloud write, so
the counter iPad and the back office do not erase each other.

Rules are not versioned. Changing a deadline re-reads every existing record
against the new rule rather than recording what the rule was at the time. That is
the right trade for an owner tightening a policy and the wrong one for proving
what was required two years ago; if the second matters, stamp the rule onto the
attempt at `submitTrainingQuiz()` time.

## Files

| Where | What |
|---|---|
| `index.html` → `TRAINING_MODULES` | the six built-in courses |
| `index.html` → `courseRule` / `setCourseRule` | what each course asks |
| `index.html` → `courseStanding` / `trainingSummary` | where someone stands |
| `index.html` → `trainingKnownWho` / `trainingPickableRoster` / `trainingSetWho` | who the app thinks is in front of it |
| `index.html` → `renderTrainingTeam` | the register and the rules panel |
| `index.html` → `linkUserToStaff` | tying a login to a roster record |
