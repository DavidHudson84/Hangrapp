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

`00-users.sql` creates the six logins and is run **once**. Creating Karen is what
brings the business into existence, via the `on_auth_user_created` trigger.

Then load the blob, either way:

**The short way.** The blob is one JSON object and the repository is public, so
Postgres can fetch it itself. This is how it was loaded the first time.

```sql
create extension if not exists http with schema extensions;

with fetched as (
  select content from extensions.http_get(
    'https://raw.githubusercontent.com/DavidHudson84/Hangrapp/<COMMIT-SHA>/mock/blob.json')
),
checked as (
  select content, encode(extensions.digest(convert_to(content,'UTF8'),'sha256'),'hex') as sha
    from fetched
)
update public.businesses b
   set data = (select content::jsonb from checked where sha = '<SHA256 OF blob.json>'),
       name = 'Main Street Dry Cleaners'
 where b.id = (select business_id from public.memberships
                where user_id = '9fd9feee-078b-4811-81ce-8c1558efa005')
   and exists (select 1 from checked where sha = '<SHA256 OF blob.json>');

drop extension http;
```

Two things that are not optional.

**Use the commit SHA in the URL, not the branch name.** `raw.githubusercontent.com`
caches a branch path for a few minutes, so a fetch straight after a push returns
the *previous* blob. A commit path is immutable and always fresh. Get it with
`git rev-parse HEAD`.

**Keep the checksum guard.** `sha256sum mock/blob.json` gives the expected value.
A stale or truncated response is still valid JSON and still loads — it is just
quietly the wrong blob, and you would not find out until a demo. The guard is
what caught exactly that on the first load here: the update matched no rows
rather than writing a cached copy.

Drop the extension afterwards. It lets the database make outbound HTTP requests
and there is no reason to leave that switched on.

**The portable way.** Generate the SQL and paste it into the Supabase SQL editor
in numeric order:

```
node mock/emit-sql.mjs
```

- `01-base.sql` — profile, roster, and empty arrays.
- `02-…` onwards — the arrays, appended in chunks of at most 70 KB.

Re-running the whole set from `01` reproduces the blob exactly, because `01`
resets the arrays before the appends begin. Re-running a *single* append file
would double that array — run the set, not a file.

`99-teardown.sql` removes the tenant completely — the business, the memberships,
the identities and the six logins. Use it to retry from clean.

The generated `sql/NN-*.sql` files are not committed; they are derived from
`blob.json` and regenerating them is one command. `00-users.sql` and
`99-teardown.sql` are hand written and are in the repository.

## Resetting after a demo

A demo that has been poked at can be put back without touching the logins — the
blob is replaced, the six accounts are not. Either re-run the `http_get` update
above, or `node mock/build.mjs && node mock/emit-sql.mjs` and run `01-base.sql`
onwards again.

## Checking it

```
node mock/verify.mjs
```

This lifts the real functions out of `index.html` — `claimsTotals`,
`activeCourses`, `docVisibleToRole`, `calcAdjustment`, `docChunks`, `_scoreText`
— and runs them against the built blob, rather than reimplementing them. A
reimplementation only ever proves the reimplementation is consistent with itself.

Forty-eight checks: the claims dashboard adds up and each settlement still
recomputes to the figure in its letter, the business's own course displaces the
built-in one while the old passes stay on the register, the training spread is
uneven in the ways a real one is, a counter login cannot reach the lease or the
claims, every machine has a manual filed against it, and the three demo
questions each retrieve the document that answers them.

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
