# Cosmetic changes — scope for review

> **Status: all three batches are built and pushed. Nothing is deployed.** They land as three
> separate commits on `claude/app-cosmetic-improvements-yuikhf`, one per batch, so each can be
> reviewed or reverted on its own.
>
> Where the build diverged from this scope, noted inline below: the facts panel opens on
> *material* gaps rather than any gap (01); the Settings strip had a second cause, nested scroll
> containers (04); and item 05 shipped without route B's storage change — manuals are capped at
> 60,000 characters, and chunked retrieval was built regardless since it works wherever the text
> lives. A print fix raised after this was written is in the Batch B commit.

Scoped against `index.html` at `94fb45c`. Line references are to the working tree as it was
before these changes landed.

Six of the eight requests are genuinely cosmetic. **Machinery manuals (05) is not** — it is a
storage and retrieval change wearing a UI hat, and it is blocked on one decision.

## Suggested order

| Batch | Items | Why grouped |
| --- | --- | --- |
| A — low risk | 03, 04, 02, 01, 07 | Presentation and navigation only. No data shape changes. |
| B — medium | 06 | Touches stored records; needs a label-migration guard. |
| C — real work | 05 | Storage, retrieval and role visibility all change. Blocked on Q1. |

---

## 01 — Collapse the claim and facts panels

**Verdict: agreed.** On a settlement letter you scroll past a 5-field claim calculator and a
12-row facts grid — roughly two screens of form you have already filled in — before the letter
appears.

`claimPanelHtml()` (4014) and `factsPanelHtml()` (4088) each render a `.facts-head` with a title
and summary count, then dump the grid below it. Both are already hidden at print time (337, 356),
so collapsing cannot affect the printed letter.

Recommend the panel's own state decides the default, so the common case needs no clicks:

- Facts panel — open when facts are missing, collapsed when all confirmed.
- Claim panel — open until a figure calculates, collapsed once it has.
- After any successful rebuild — collapse both. That is the moment you want to read the letter.
- A manual click always wins and sticks for the session.

The collapsed header must keep telling you the answer or you will just reopen it. Both summary
lines already exist — promote them:

- Facts → `3 of 12 still open — 1 of them material` (already computed, 4095).
- Claim → `$842.00 offer · Wool overcoat · 36 months · average`, from the `calcAdjustment()` result.

**Implementation note.** `render()` replaces `screen.innerHTML` wholesale, so collapse state cannot
live on the DOM node or in a `<details>` element — it springs open on every keystroke that triggers
a re-render. It must sit in `state` (a transient `state.letterPanels`, kept out of `buildStateBlob()`).

Touches: 4014, 4088, plus new `.panel-collapsed` CSS. ~70 lines.

---

## 02 — "Customer Problems" → "Problem Solver"

**Verdict: agreed, with one refinement.** "Customer Problems" names the bad thing; "Problem Solver"
names what the module does, and matches the verb-shaped naming already in the menu (Bill Compare,
Training, Letters).

Refinement: change the *menu label* to Problem Solver, but keep individual records called **problem
reports**. The place should sound like a tool, the record like a document. That is already the
language inside the screen ("New problem report", "No problem reports yet"), so it costs nothing.

- `TABS` label at 1137, `<h2>` at 8713.
- Tab id stays `'problems'` — no migration, no saved records affected.

**Spotted while in there.** Module numbers are out of order: Problem Solver carries `num: '07'` but
sits third, between Chat (02) and Letters (03). Not rendered in the sidebar, but it shows as
"Module 07" in the screen header. Either renumber `TABS` to match running order or drop `num`.

Touches: 1137, 8713. ~4 lines.

---

## 03 — Letters menu reverting to the last letter

**Verdict: confirmed bug, cause found.** Two-line fix.

`renderLetters()` (4181) shows the library *only* when `state.currentLetter === null`; otherwise it
renders that letter. `goToTab()` (8119) sets `state.activeTab` and nothing else. So clicking
**Letters** while a letter is open re-renders the open letter. The only way back to the list today
is the "← All letters" button inside the letter, which does clear it (4300).

Fix: clear the open record in `goToTab()` when navigating to that section. **Problem Solver has the
identical bug** — `renderProblems()` (8708) gates on `state.currentProblem` the same way — so fix
both in one place.

**Check before clearing.** The letter body is editable in place ("Edit body", 4292). If an
in-progress edit is only committed to `state.currentLetter` on blur or save, navigating away would
silently discard it. Commit any pending body edit before clearing, and do not clear while
`l.pending` is true — the draft is mid-flight to the model at that point.

Touches: 8119, 4181, 8708. ~6 lines.

---

## 04 — The Settings tab strip

**Verdict: agreed.** The screenshot shows two scrollbars on a single row of eight tabs. Both are
accidental.

`.step-nav` (501) sets `overflow-x: auto` and leaves `overflow-y` alone. Per the CSS spec, once one
axis is non-visible the other computes to `auto` rather than staying visible — so the horizontal
scrollbar appears, eats ~15px of height, that overflows the row's height, and a *vertical* scrollbar
appears to scroll it. That is the thumb on the right of the screenshot. The scrollbar is also
completely unstyled, which is why it reads heavier than anything else on screen.

Fix:

- `overflow-y: hidden` — kills the vertical scrollbar outright.
- Style the horizontal one to a 4–6px hairline via `::-webkit-scrollbar` and `scrollbar-color`,
  using `--rule-strong` so it belongs to the theme.
- Move the `border-bottom` off `.step-nav` onto a wrapper, so the underline spans the full panel
  width instead of scrolling away with the pills. The detached-looking rule under "Business" is the
  `margin-bottom: -1px` trick fighting the scroll container.
- Scroll the active pill into view on render (`scrollIntoView({ inline: 'nearest', block: 'nearest' })`).
  Today, jumping to Brand leaves the strip parked at the left.
- Edge fade masks so it is obvious there is more to the right.

**Why not wrap.** The comment at 497 says wrapping was tried and rejected — eight ragged-width
labels wrapped badly and "Price list" broke across two lines. Keep the single scrolling row and make
it look deliberate. Relevant to 07: any new Settings section makes this strip more crowded.

Touches: 501, 507, 3359. ~15 lines.

---

## 05 — Manuals attached to each machine

**Verdict: right idea, but not cosmetic.** The per-line-item framing is correct — a manual for *the
boiler* is far more useful than one filed loose in Documents. Three things underneath will defeat
the feature if only the UI is built, and one needs a decision.

### Build on the existing document store

Documents already have file reading, AI card building (`buildDocCardPrompt`, 7128), retrieval and
prompt injection (2048–2054), deletion and cloud sync. A parallel store duplicates all of it. Add
two fields to the document record instead:

- `machineryKey` — `dryCleaning:0`, `boiler`, `compressor`, `washers`, `dryers`, `press`,
  `finisher`, or a free-text unit.
- `machineryLabel` — "Union L800 dry cleaning machine", for display and retrieval scoring.

Each block in `machineryStep()` (3024) then grows a manuals strip: existing manuals as chips, plus
**+ Add manual** opening the standard document form pre-filled with type, title and key. Same rules,
same knowledge base — as requested.

### Blocker — a manual will not fit in the current store

`DOC_TEXT_CAP` is **20,000 characters** (7046), stored as a flat prefix slice. A real equipment
manual runs 150,000–500,000 characters, so today we would keep the cover, contents page and safety
warnings and discard the fault codes, service intervals and part numbers — the entire reason to
upload it.

Worse, the whole app state is one JSON blob written to `businesses.data` on *every* save
(`scheduleCloudSave`, 1220). Four manuals at full text would make every autosave a multi-megabyte
write.

### Decision needed (Q1)

| Route | What it means | Cost |
| --- | --- | --- |
| **A — cards only** | Read the manual once, keep only the AI card (~2–4k chars) plus a short index. Full text discarded after processing. | Small. No schema change, ships with the rest. Cannot quote the manual verbatim. |
| **B — chunked** | Full text to Supabase Storage or its own `documents` table; keep card + chunk index in the blob; retrieve best 2–3 matching chunks at question time. | Real work — a table, a fetch path, chunked scoring. Answers cite the actual page. |

Recommend **B**: "what does the L800 do on error E17" is precisely the question a manual is for, and
A can only paraphrase a card. A is legitimate if you want this in front of customers sooner, and can
be upgraded to B later without breaking stored records.

### Two more things worth fixing while in here

- **Staff cannot see documents at all.** `ROLE_CAPS.staff` (8231) has no `documents` capability, so
  manuals would be invisible to the person standing at the machine. Recommend per-document
  visibility defaulting by type — manuals and SOPs staff-visible, insurance and leases owner/admin
  only. A small, honest addition to the existing role model. (Q2)
- **Scanned manuals will read as nothing.** `extractPdfText` (7079) is a hand-rolled regex over PDF
  content streams. It handles compressed text, but a scanned manual has no text layer and there is
  no OCR. The UI must say so plainly rather than silently saving an empty document.

### On "per customer level or per user level"

Per-customer is already done by construction — one `businesses.data` row per business, with
`memberships` binding users to it (1255). Manuals inherit that automatically. Per-user would need a
new `visibility` field, and I would argue against it: a plant manual is a shared asset, not personal.
The per-document role gate above gives the control actually wanted.

Also: "the dry pan machine" was listed alongside the boiler and compressor. Boiler and compressor
are existing fixed keys; a dry pan is not, and its only home today is the single free-text `other`
field (3100). This needs a proper "add another unit" row so anything off the fixed list can carry a
manual.

Touches: 3024, 7045, 7046, 7128, 7178, 8226, plus a manual-specific card prompt. ~250 lines + a decision.

---

## 06 — Typed document buttons

**Verdict: agreed, with a caution and a bonus.** Today there is one **+ Add a document** button and
the type is a dropdown buried inside the form (7222) — so the type is an afterthought when it should
shape the whole form.

`DOC_TYPES` (7045) already holds eight: Insurance policy · Lease / agreement · Supplier contract or
quote · Equipment manual · SOP / procedure · Certificate / registration · Council / EPA / compliance
· Other. The list exists; it is in the wrong place in the flow.

Recommend:

- Replace the single button with a labelled row — "Add a document:" then type buttons. Picking one
  opens the form with `type` set and the select replaced by a heading ("Adding an insurance policy"
  plus a small "change type" link).
- **Caution on eight buttons:** eight is a wall, and Certificate / Council / SOP are rare. Show the
  four actually reached for — Lease, Insurance policy, Supply contract, Equipment manual — plus a
  **More** control. Same result, quieter screen. (Q3)

**Migration gotcha.** "Supply Contract" was the requested wording; the stored value is "Supplier
contract or quote". The type string is written onto every saved document (`doc.type`, 7166) and
rendered back as the tag in the library list (7215). Renaming the constant leaves existing documents
showing a stale label matching no button. Fix: keep stored keys stable and give `DOC_TYPES` separate
`key` and `label` fields, so display wording can change freely from here on.

**The bonus.** Once the type is known *before* the form opens, both the form and the AI card can be
type-specific. `buildDocCardPrompt` (7128) currently asks one generic question of a lease, a policy
and a manual alike. Instead:

- Lease — term, rent and review dates, option to renew, make-good, outgoings.
- Insurance policy — insurer, sum insured, excess, renewal date, exclusions.
- Supply contract — supplier, rates, minimum volumes, notice period, price review.
- Equipment manual — model, service intervals, fault codes, consumables, lockout steps.

That turns a cosmetic change into a materially better knowledge base for the same edit.

Touches: 7045, 7202, 7251, 7128. ~50 lines.

---

## 07 — Explaining the staff view PIN

**Verdict: agreed, and the read on it is correct.** The expectation that "the access levels and
authorisation levels will counteract this function for the most part" is borne out by the code.
Write the explainer from that honest position rather than overselling the PIN.

`ownerPin` is set in the Brand step (3156) and read in exactly one place: `exitStaffMode()` (1696).
Entering staff view needs no PIN; leaving it does. The toggle only renders for owner and admin
logins (8083), and while staff view is on, `effectiveRole()` (8249) forces the role to `staff` for
every capability check and for the AI's own prompt rules.

So it is a **lock on a preview**, not an access control. It stops someone at the counter flipping an
already-signed-in browser back to owner view. It is not what keeps staff out of the HR file or the
bills — memberships and roles do that (`ROLE_CAPS`, 8226), enforced whether or not a PIN exists.

What to write in the app:

- **It does** — stop someone using this device switching out of staff view back to owner view. It
  survives a page reload (`staffMode` is saved with the rest of state, 1524).
- **It does not** — replace a staff login. Anyone signing in with their own account gets their
  role's permissions, PIN or no PIN. Setting a PIN does not restrict anyone; leaving it blank does
  not expose anything a proper login would have protected.
- A live status line: "Staff view is locked with a PIN" / "No PIN set — anyone using this device can
  switch back to owner view".
- A pointer to where staff accounts are managed, since that is the control most owners will be
  looking for when they land on this field.

Two smaller observations:

- **It sits in the wrong section.** An access setting under "Brand" is odd, but a ninth Settings tab
  makes 04's crowded strip worse. Recommend a divider and sub-heading inside the Brand step
  ("Access & staff view") rather than a new tab. Safe to move: `stepFilled('brand')` only checks the
  logo and assistant name (3355).
- **The PIN is stored in plain text** in the profile blob and shown in a plain input. Defensible —
  `settings` access is required to reach the field, and staff view has no settings access — but
  worth one honest line rather than implying it is a secret.

Touches: 3156, 1696, 8083. ~30 lines.

---

## Open decisions

1. **Machinery manuals — cards only, or chunked full text?** Route A ships with the rest of the
   batch and can only paraphrase. Route B needs a storage change but can quote the manual.
   Recommend B. Nothing on item 05 starts until this is settled.
2. **Should staff be able to read manuals and SOPs?** They currently cannot see any document.
   Manuals are worth little if the person at the machine cannot open them — but it means adding
   per-document visibility to the role model.
3. **All eight document type buttons, or four plus "More"?** Taste call, easy to change after
   seeing it. Recommend starting with four.
