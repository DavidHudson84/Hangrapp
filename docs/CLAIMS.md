# The claims register

A dry cleaner settling a claim has never had a number to settle it against. Not
their own — nobody writes down what last year's claims cost — and certainly not
the trade's. The register is the first of those. The second is what it is built
to become.

## What lands in it

Two things, and they are the same kind of record.

**Letters.** Every claim letter the app drafts records a line automatically:
a defence, a settlement, a goodwill letter, a complaint response, an at-risk
authorisation taken at intake. The line traces back through the letter to the
chat message that offered it and to the problem report the counter raised, so
the register is never a retyping of anything.

**Everything else.** A claim settled verbally over the counter, on the phone, by
an insurer, or before anyone thought to open the app. **Add a claim** on the
Claims screen opens the same form, filled in by hand. It carries `source:
'manual'`, it has no letter and no report behind it, and it counts in every total
and every report exactly like the others.

That second case was the hole. Most claims a busy shop settles never generate a
letter — the manager hands back a credit and the matter is closed — and a
register that only holds the ones that did is a register that under-reports what
claims cost by a margin nobody can estimate.

## Correcting a line

Every field on every line is editable, and nothing about a line is final.

A claim recorded from a letter has two layers. The letter owns the fields it
filled in — the date, the customer, the garment, the outcome, the figures — and
refreshes them whenever it is redrafted. Anything typed over one of those is kept
as an **override**, in `edits`, and a redraft does not touch it. The field is
marked *overridden* in the editor with a **revert** beside it that drops the
override and puts the letter's own figure back. That separation is the whole
trick: the register can be corrected without the correction being silently undone
the next time someone regenerates a letter, and the letter's own arithmetic is
never lost.

Fields the letter knows nothing about — where the fault lay, the type of damage,
the article category, the date it was actually settled, the cleaning charge
waived, the notes — are simply the operator's, and are written straight to the
record. A manual claim has no second layer at all; every field is written
directly.

**Deleting** is a soft delete. The line comes off the register, off every total
and out of every report, and sits in **Deleted lines**, where it can be restored.
It is kept rather than destroyed for two reasons: deleting the wrong line at
speed is easy, and a tombstone is what stops a redraft of the same letter quietly
putting the line back on the register a week later. From the deleted list a line
can be erased for good — and if it came from a letter, redrafting that letter
will record it again, which the confirmation says out loud.

## Filling in a register that pre-dates the fields

A claim recorded before the register held the coded fields has them blank, even
though the letter behind it carries most of them: the settlement panel knew the
article, the condition and the age, and whether the cleaning charge was waived;
the facts knew the fabric; the problem report knew the brand, the colour and the
day the customer actually walked in. None of that is a guess. It is data already
on file that the record was never given a place to put.

**Fill in from the letters** appears on the Claims screen whenever some line is
missing something a letter can supply, and says how many. It writes blanks only —
nothing typed or corrected is touched, it can be run twice with no effect, and it
leaves no override behind, because none of these fields is one the letter owns in
the override sense.

`mock/verify.mjs` ages every seeded claim back to the old shape and checks that
what the backfill puts back is exactly what a claim recorded today would hold.

Three fields it will not touch, and cannot: **where the fault lay**, **the type of
damage** and **the reference relied on**. None of them is written down anywhere in
a form a rule can read — the letter argues the position in prose rather than
recording it. They are a judgement, they are the three that carry the most weight
in the industry data, and somebody has to make them. A model reading the letter
and the problem report could propose all three, but a proposal is not a finding:
anything an AI suggests here has to be shown with its evidence and confirmed one
claim at a time before it is written, or the register stops being a record of what
the business decided and becomes a record of what a model guessed.

## Reporting on it

The register filters on period, outcome, fault, how it was settled, site and free
text. The period presets are the ones an Australian business actually uses:
this month, last month, this quarter, **this financial year**, **last financial
year** (1 July to 30 June), last twelve months, or two dates typed in. The tiles
and every total follow the filter, so the register and the report always agree.

Three things come out of it:

| | |
|---|---|
| **CSV** | Exactly what is on screen, every field, one row per claim. What gets opened in Excel and sent to the accountant. |
| **Period report** | A printable document on the business's letterhead: the totals, then the breakdown by month, outcome, fault, garment category, site and settlement channel, then every claim in the period. Print to PDF from the browser. |
| **Industry file** | The de-identified contribution. See below. |

A claim is dated from the day the customer raised it, not the day the letter went
out, which is what makes *days to settle* a real number.

Claim dates written before this change were stored the way a letter prints them —
"18 June 2026" — which sorts alphabetically and filters not at all. They are read
back into an ISO date on the fly rather than migrated, so an old backup reports
correctly without being rewritten.

## The money

Four figures, and they are not the same figure.

**Value at stake** is what the customer asked for. **Paid out** is cash that left.
**Cleaning charge waived** and **cost of the re-clean or repair** are the two
costs that never appear on a settlement letter and are most of what a claim
actually costs a plant. **Cost to the business** is the three of them added up —
the number to divide into turnover, and the one no operator has ever had.
**Claimed, not paid** is the gap between what was asked and what was handed over:
the value of holding a position, which is the thing the Fair Claims Guide exists
to defend and the thing nobody has ever put a figure on.

## Where this is going

One shop's register is an operating number. Every shop's register, in the same
shape, is the thing the trade has never had: what actually fails, whose fault it
is, how it is usually resolved, and what it costs. Not argued about at a
conference — counted.

That only works if the fields are coded rather than written. Free text describes
one claim; a code describes ten thousand. So the register codes the four fields
that carry the signal — the Fair Claims Guide article, the type of damage, where
the fault lay, and how it was settled — against fixed vocabularies, and the
garment attributes that explain them (brand, fabric, colour, age, condition) sit
beside them. Prose lives in the notes, and the notes never leave the business.

### What a contribution is

`CLAIM_FIELDS` in `app/index.html` is the single definition. A field with an
`ind` goes into the industry file; a field without one never does. Customer name,
docket, the garment description, what the case was called and the notes have no
`ind`, and that is the whole privacy model — there is no scrubbing step to get
wrong, because the identifying fields are never assembled into the file in the
first place.

On top of that: dates are cut back to their month, the business and each of its
sites appear as a hash rather than a name, and the postcode is reduced to its
first two digits. Each claim carries a stable pseudonymous key so a contribution
sent twice is counted once and a business that later withdraws can have its rows
removed without anyone needing to know which business it was.

Nothing is transmitted. The button writes a file to the operator's own machine,
after a dialog that names every field going into it and every field that is not.
Contribution is an act, not a setting.

### The phases

**Now.** The coded fields exist and are filled in. The file can be written and
sent by hand. One business can already answer "what did claims cost me last
financial year, and where was the fault" — which nothing else in this trade does.

**Next.** A `contribute` edge function beside the existing ones, insert-only,
taking the same JSON against an opt-in recorded on the business. Monthly, in the
background, with the same "here is exactly what goes" dialog the first time and a
way to stop at any point.

**Then — and this is the part that makes anyone contribute.** The aggregate comes
back into the consultant. A counter asks about a three-year-old wool coat with
colour loss at the collar, and the answer carries the trade's own numbers:
how often that presentation is found to be the manufacturer's, what it usually
settles at, how long it takes. An operator will not contribute data out of civic
feeling. They will contribute it to get a defensible position they can put in a
letter that afternoon.

**After that.** An annual claims report for the industry, and a dataset that has
value to insurers, to suppliers whose products keep appearing in the fault
column, and to the manufacturers being found at fault — none of which is possible
until the first two phases have run long enough to have something to report.

Two rules hold from the first day, because they are much harder to add later.
Aggregates are never shown below a floor — no cell that draws on fewer than a
handful of businesses, or a handful of claims, however tempting the question —
since a benchmark thin enough to identify one shop's claims is a benchmark that
shop will never contribute to again. And a contributor can withdraw and have
their rows removed, which is what the stable contributor key is for.

## Where the code is

| | |
|---|---|
| `CLAIM_FIELDS` | Every field once. The editor, the CSV, the period report and the industry file are all built from it. |
| `recordClaim()` | What a letter writes, and only that. Overrides, notes and operator fields are never touched here. |
| `claimView()` | The record as it should be read — the letter's fields with the overrides on top, plus the computed figures. |
| `filteredClaims()` / `claimPeriod()` | The filter bar and the financial-year presets. |
| `claimIndustryRows()` | The de-identification. |
| `mock/verify.mjs` | Runs the real functions against the seeded blob — the totals, the override behaviour, and that a hand-entered claim has nothing behind it. |
