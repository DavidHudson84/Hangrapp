# Knowledge card spec

Every stored document carries a **knowledge card** — a short, dense, factual
summary. The consultant retrieves the card first and only goes to the full text
when it needs a section, so a document without a card is half-useless and a
document with a card that invents a number is worse than useless.

In the live app these are written by the AI at upload time, from the prompt at
`index.html:7480`. These seeded ones must be indistinguishable from that output.

## One card per stored document record, not per source file

A long document is split into parts, and **each part is its own document record
with its own card**. Write the card for the part, describing what is in that
part — not the source file it came from.

The exact text of every record is written out to `mock/parts/<id>.txt` by the
build. **Read that file.** Do not read `mock/documents/*.md` — the split may not
fall where you would guess, and a card describing content that lives in the
other part is a card that lies.

Write each card to `mock/cards/<id>.txt`, matching the part filename exactly.

## Format

- **First line: one sentence saying what this document is.** Not "This document
  is a..." — just say it. "The Bendigo shop lease, second of three parts,
  covering insurance, default and the end of term."
- Then the facts that matter, as **short lines**. One fact per line.
- What belongs: parties, insurer, supplier, landlord; policy, account, agreement,
  registration and serial numbers; sums insured, sub-limits, excesses, premiums;
  rents, rates, unit prices, minimums; key dates — commencement, expiry, renewal,
  review, next inspection; obligations; exclusions; notice periods; fault code
  ranges and what they cover; service intervals; who is responsible for what.
- Australian context. `$` amounts, metric, dates as "30 September 2026".
- **Plain text. No markdown headings, no `#`, no `**bold**`, no tables.** Short
  lines and the occasional dash are all the structure there is.
- Tight. **Aim for 900–1,800 characters.** Well under a page. A card that
  restates the document is not a card.

## The rule that matters most

**BE FAITHFUL.** Use only what is in that part's text. If something important is
not stated in it, either leave it out or say it is not specified in this part.
**Never guess a number, a date, a name or a reference.** A card that invents a
policy excess is the single worst failure available here, because the consultant
will repeat it to a customer with total confidence.

## Two worked examples of the register

For a manual part:

```
Fault code and maintenance half of the Fulton FB-030 boiler manual, revision 7.
Covers codes B01 to B38, with B14, B19 and B37 reserved and unused.
Codes are classed by who may reset them: A operator once, B technician only, C gasfitter only.
Lockouts on the low water cut-out and the flame supervision are class B or C and must not be reset by an operator.
Prose troubleshooting for the eight most common faults, then six further notes.
Maintenance schedules: daily, weekly, monthly, quarterly, six-monthly and annual, each with task, tool and expected time.
Statutory items are marked separately in the schedules.
Spare parts list with part numbers for gaskets, probes, sight glasses, the relief valve and burner components.
Recommended stock holdings given per part.
```

For a commercial document:

```
The Meridian business pack policy schedule, first part, covering the sums insured section by section.
Insurer Meridian Underwriting Australia Pty Ltd, AFSL 241 663. Broker Hargreaves & Locke, Bendigo.
Insured Aveline Holdings Pty Ltd ACN 617 903 558 trading as Main Street Dry Cleaners.
Policy MDC-BP-4471822. Period 1 October 2025 to 30 September 2026 — renews 30 September 2026.
Standard excess $2,500.
Total premium $14,382.60 including fire services levy, GST and stamp duty.
Situations: Shop 4, 118 Hargreaves Street Bendigo, and Shop 12 Lansell Square Kangaroo Flat.
```

Notice what those do: they lead with what the thing is, then give the numbers a
person would actually ask for, and they stop.
