# The mock tenant

A complete fictional dry cleaner — **Main Street Dry Cleaners**, Bendigo VIC — that
exists so Hangr can be demonstrated without signing into a real business.

Everything here is invented. No real customer, employee, claim or contract appears
anywhere in it, and no document purports to be issued by a real insurer, landlord,
supplier or regulator. See `PERSONA.md` for the naming rule that keeps it that way.

## Signing in

All six logins share the password **`MainStreet2026!`**

| Email | Role | Who |
|---|---|---|
| `karen@mainstreetdrycleaners.com.au` | owner | Karen Whitfield, proprietor |
| `nadia@mainstreetdrycleaners.com.au` | admin | Nadia Farrell, office admin |
| `sharon@mainstreetdrycleaners.com.au` | manager | Sharon Delaney, shop manager |
| `emma@mainstreetdrycleaners.com.au` | staff | Emma Sutton, counter |
| `rebecca@mainstreetdrycleaners.com.au` | staff | Rebecca Toomey, drop store |
| `chloe@mainstreetdrycleaners.com.au` | staff | Chloe Barnes, Saturday junior |

Sign in as Karen to show the business. Sign in as Emma to show what a counter
login cannot reach — no Claims, no Staff, no Users, no Bill Compare, and no lease
or insurance in the document library.

## Rebuilding it

```
node mock/build.mjs --report    # assemble and validate; writes mock/blob.json
node mock/emit-sql.mjs          # turn blob.json into mock/sql/NN-*.sql
```

`build.mjs` refuses to write a blob that would render an empty panel. It checks
that every claim has a letter behind it, every letter's `sourceMsgId` is a chat
message that actually carries a `letterOffer`, every manual is filed against a
machine that exists, every training record names a real course and a real person,
every site string matches a site, and that no letter still contains a bracketed
placeholder. If it fails, nothing is written.

## Loading it

Run the SQL in `mock/sql/` **in numeric order**.

- `00-users.sql` — the six logins. Run once. Creating Karen is what brings the
  business into existence, via the `on_auth_user_created` trigger.
- `01-base.sql` — profile, roster, and empty arrays.
- `02-…` onwards — the arrays, appended in chunks of at most 70 KB.
- `99-teardown.sql` — removes the tenant completely. Use it to retry from clean.

Re-running the whole set from `01` reproduces the blob exactly, because `01`
resets the arrays before the appends begin. Re-running a *single* append file
would double that array — run the set, not a file.

## Resetting after a demo

A demo that has been poked at can be put back without touching the logins:

```
node mock/build.mjs && node mock/emit-sql.mjs
# then run 01-base.sql onwards again
```

## What is in it

| | |
|---|---|
| Sites | 2 — Bendigo production plant, Kangaroo Flat drop store |
| Staff | 10, across five award classifications and three employment types |
| Logins | 6, one per role plus three counter staff |
| Documents | The lease, the licence, insurance, two supply agreements, the boiler inspection, the environmental manual, two SOPs, brand standards, and six equipment manuals |
| Price list | Full 2026 retail list, priced against real posted Australian lists |
| Problem reports | 8, across all four statuses |
| Letters | 11 — 8 garment and intake, 3 HR |
| Claims | 8 — 4 paid, 2 defended, 1 goodwill, 1 risk flagged at intake |
| Chats | 10 — 8 hanging off a problem report, 2 standalone |
| Training | 34 records, deliberately uneven, plus one course the business wrote itself |
| Bills | 32 — electricity, gas and water with real seasonal shape |

## How the files fit together

```
PERSONA.md        the canonical fact sheet — every document was written from this
LETTERSPEC.md     the brief the letters and chat transcripts were written to
data/*.mjs        the structured records
documents/*.md    the source documents, full length
letters/*.txt     letter bodies and the chat exchanges that produced them
cards/*.txt       the knowledge card for each stored document
parts/*.txt       generated — exactly what each document record will hold
build.mjs         assembles and validates; writes blob.json
emit-sql.mjs      turns blob.json into the SQL under sql/
```

`data/adjust.mjs` is a copy of `calcAdjustment()` from `index.html`, so every
settlement figure in the seed is computed on the Fair Claims Guide method rather
than typed. A hand-typed offer that disagrees with what the app recalculates is
the first thing a dry cleaner notices.

## Documents longer than the cap

`index.html` keeps 20,000 characters of a document and 60,000 of an equipment
manual. Several of these documents are longer than that, so `build.mjs` cuts them
into balanced parts at real section boundaries and files each part as its own
document with its own knowledge card.

That is deliberate. A prefix slice would have been simpler and much worse: on a
manual the fault codes and the service schedule live in the back half, and those
are the only pages anyone ever asks about. Splitting keeps everything, needs no
change to the app, and both parts stay attached to the same machine.
