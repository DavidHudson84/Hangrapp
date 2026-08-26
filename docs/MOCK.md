# The mock tenant — a dry cleaner you can demonstrate

There is a second business on the project. It is called **Main Street Dry
Cleaners**, it is in Bendigo, it has ten staff, six logins, a full document
library and a claims history, and none of it is real.

It exists for one reason. Demonstrating Hangr meant signing into an actual
business, which meant showing a prospect a real roster, a real lease, real
customers and a real wage dispute. That is a privacy problem before it is
anything else, and it also makes the demo unrepeatable — anything a prospect
touches is live data that has to be put back.

## Signing in

Six logins, one per role, all sharing the password `MainStreet2026!`.

| Email | Role | Who they are |
|---|---|---|
| `karen@mainstreetdrycleaners.com.au` | owner | Karen Whitfield, proprietor since 2016 |
| `nadia@mainstreetdrycleaners.com.au` | admin | Nadia Farrell, office admin and bookkeeper |
| `sharon@mainstreetdrycleaners.com.au` | manager | Sharon Delaney, shop manager |
| `emma@mainstreetdrycleaners.com.au` | staff | Emma Sutton, counter |
| `rebecca@mainstreetdrycleaners.com.au` | staff | Rebecca Toomey, drop store, works alone |
| `chloe@mainstreetdrycleaners.com.au` | staff | Chloe Barnes, Saturday junior |

The password is meant to be typed on a projector. Nothing behind these logins is
worth protecting.

## What it is for

Karen's login shows the business. Emma's login shows the part that is harder to
explain in words: a counter staff member has no Claims, no Staff, no Users and no
Bill Compare, the lease and the insurance are invisible in her document library,
and she sees only the problem reports and letters she raised herself. The two
sign-ins side by side make the role model concrete in about fifteen seconds.

Three questions are worth asking the consultant in front of an audience, because
each one can only be answered out of a seeded document:

- **"The boiler is locked out on B14, what is it?"** — answered from the Fulton
  manual's fault code table.
- **"What does the lease say about the rent review?"** — answered from the lease.
- **"What do we charge to clean and box a wedding gown?"** — answered from the
  price list.

If any of those comes back as general knowledge rather than from the document,
retrieval is not working and you have found that out before a prospect did.

## The shape of the data

| | |
|---|---|
| Sites | Bendigo production plant, Kangaroo Flat drop store |
| Staff | 10 across five award classifications and three employment types |
| Documents | Lease, licence, insurance, two supply agreements, boiler inspection, environmental manual, two SOPs, brand standards, six equipment manuals |
| Problem reports | 8, across all four statuses |
| Letters | 11 — 8 garment and intake, 3 HR |
| Claims | 4 paid, 2 defended, 1 goodwill, 1 risk flagged at intake |
| Training | 34 records, plus one course the business wrote from its own SOP |
| Bills | 32, with real seasonal shape |

The claims register is wired the way the app wires it: every claim traces back
through a letter to the chat message that offered it and to the problem report
the counter raised. Clicking "redraft as a settlement offer" on a seeded letter
works, because the message it came from exists and carries a `letterOffer`.

The training register is deliberately uneven. Sharon and Peter have passed
everything; Emma has three of six; Chloe has one pass on her second attempt and
an open fail. A register where everybody has passed everything is the single
clearest tell that a demo dataset is fake.

## Two things that were decided rather than defaulted

**Nothing purports to be a real organisation's document.** Machine makes are real
with invented model numbers — a Union XL-800, a Fulton FB-030 — because a dry
cleaner in the room should recognise the marque. But the insurer, the landlord,
the chemical supplier and the pressure vessel inspector are all invented, because
those documents are *records*, and fabricating a real insurer's policy schedule is
a different thing from writing a manual for a plausible machine. `mock/PERSONA.md`
carries the rule.

**Long documents are split, not truncated.** `index.html` keeps 20,000 characters
of a document and 60,000 of an equipment manual. Several of these run well past
that — the Fulton manual is 123,000 characters with 35 fault codes. A prefix slice
would have kept the cover page and the safety warnings and thrown away the fault
codes, which are the only pages anybody ever asks about. So `mock/build.mjs` cuts
a long document into balanced parts at real section boundaries and files each part
as its own document against the same machine, each with its own knowledge card.
No change to `index.html` was needed and nothing is lost.

## Rebuilding and reloading

```
node mock/build.mjs --report    # assemble and validate; writes mock/blob.json
node mock/emit-sql.mjs          # turn blob.json into mock/sql/NN-*.sql
```

`00-users.sql` creates the logins and is run once. The blob itself loads either
by generating `mock/sql/NN-*.sql` and running them in numeric order, or — since
the repository is public — by letting Postgres fetch `mock/blob.json` itself with
the `http` extension, which is how it was loaded the first time and is one
statement instead of thirty. `mock/README.md` has both, including the checksum
guard worth putting on the fetch and the reminder to drop the extension
afterwards. Either path can be re-run to reset a demo that has been poked at,
without touching the six logins. `99-teardown.sql` removes the tenant entirely.

`node mock/verify.mjs` is the other half. It lifts the real functions out of
`index.html` and runs them against the built blob rather than reimplementing
them, which would only prove the reimplementation is consistent with itself.
Forty-eight checks, covering the claims arithmetic, the course replacement, the
training spread, the role boundaries, the manuals-to-machines wiring, and whether
the three demo questions above actually retrieve the documents that answer them.

`build.mjs` will not write a blob that would render an empty panel. It checks that
every claim has a letter behind it, that every letter's `sourceMsgId` is a chat
message carrying a `letterOffer`, that every manual is filed against a machine
that exists, that every training record names a real course and a real person,
that every site string matches a site, and that no letter still contains a
bracketed placeholder. None of that is enforced by Postgres — the whole tenant is
one `jsonb` blob — so it is enforced here or not at all.

## Files

| Where | What |
|---|---|
| `mock/PERSONA.md` | The canonical fact sheet. Every document was written from it. |
| `mock/LETTERSPEC.md` | The brief the letters and chat transcripts were written to. |
| `mock/data/*.mjs` | The structured records — profile, staff, casework, HR, training, bills, courses, chats. |
| `mock/data/adjust.mjs` | A copy of `calcAdjustment()` from `index.html`, so settlement offers are computed rather than typed. |
| `mock/documents/*.md` | The source documents, at full length. |
| `mock/letters/*.txt` | Letter bodies, and the chat exchanges that produced them. |
| `mock/cards/*.txt` | The knowledge card for each stored document record. |
| `mock/build.mjs` | Assembles and validates; writes `mock/blob.json`. |
| `mock/verify.mjs` | Runs `index.html`'s own functions against the built blob. 48 checks. |
| `mock/emit-sql.mjs` | Turns `blob.json` into the SQL under `mock/sql/`. |
| `mock/sql/00-users.sql` | The six logins. Hand written; run once. |
| `mock/sql/99-teardown.sql` | Removes the tenant completely. |

## Creating the logins, and why it looks roundabout

`on_auth_user_created` on `auth.users` calls `handle_new_user()`, which creates a
`businesses` row and an `owner` membership for every new auth user. That is what
brings the tenant into existence when Karen is inserted, and it is five businesses
too many after that.

The obvious answer is to disable the trigger around the other five inserts.
`00-users.sql` deliberately does not: `auth.users` is owned by
`supabase_auth_admin`, so disabling a trigger on it leans on a privilege this
connection should not need, and a script that half-runs would leave the trigger
off on a live auth table. Instead it lets the trigger fire six times, marks the
five placeholder businesses by name, repoints those memberships at Karen's
business with their real roles, and deletes the placeholders. That is ordinary DML
on public tables.

Two details that would otherwise cost an afternoon:

- Every user needs a row in `auth.identities`. Without one the account looks
  correct in `auth.users` and cannot sign in.
- No seeded user carries `must_change_password` in its metadata. `index.html:9092`
  reads that flag, and with it set every demo login lands on a password-reset
  screen instead of the app.
