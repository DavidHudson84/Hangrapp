# Letter and chat spec

Eight cases. For each you write **three** files:

```
mock/letters/<slug>.txt          the letter body
mock/letters/<slug>.q.txt        what the owner/staff member typed into the chat
mock/letters/<slug>.a.txt        what the consultant answered, ending in the letter offer
```

Read `mock/data/casework.mjs` for the full facts of every case — customer, garment,
care label, method, dates, damage, what the customer wants. Everything you write must
agree with it exactly. Read `mock/PERSONA.md` for the business.

## The letter body — hard rules for every type

- **Body only.** No letterhead, no date, no recipient address, no "Re:" line, no
  signature block. The app renders those. Start at the salutation and end with
  "Yours sincerely," on its own final line.
- Australian English. Metric. `$1,250` style.
- **No square-bracket placeholders.** Every fact you need is in casework.mjs.
- 5–9 short paragraphs. No preamble, no postscript, no headings.
- Never invent a DLI TAB number. Cite only from the list below, **by title**, and
  only the one assigned to that case.

## The available DLI TABS — cite by title, never invent a number

- DLI TABS — Leather, Suede, Velvet & Napped Fabrics
- DLI TABS — Wear, Abrasion, Pilling, Holes & Age
- DLI TABS — Laundered Shirt Problems
- DLI TABS — Prints, Embellishments, Trims & Notions
- DLI TABS — Stretch, Shrinkage & Distortion
- DLI TABS — Coatings, Films, Vinyl, PU & Metallics
- DLI TABS — Stains: Food, Body, Environmental & "Invisible"
- DLI TABS — Household Textiles (drapes, comforters, down, linens)
- DLI TABS — Dye Bleed, Migration & Colour Run
- DLI TABS — Chemical & Substance Damage (acids, alkalis, bleach, salt, sulfur)
- DLI TABS — Fusible Interfacings & Bonded Constructions
- DLI TABS — Colour Fading & Discoloration (light, gas, atmospheric)
- DLI TABS — Specialty Fabrics (silk, acetate, neckties)

---

## Type: `twimc` — defence letter (case: beaded-gown)

Handed to the customer to take back to the retailer. **The cleaner is not at fault.**
A technical position, not an apology. Cite **Prints, Embellishments, Trims & Notions**.

Structure, in this order:
1. "To Whom It May Concern," on its own line
2. Confirm the garment was professionally cleaned at our premises on behalf of "our mutual customer Marguerite Oakley", with the date
3. Care label quoted exactly, the solvent actually used, the precautions applied, and that the method was gentler than the label permitted — and why
4. The damage, precisely, in textile language
5. Diagnosis — name the failure mode and why it is a manufacturing/component fault
6. The TAB, by title, what it says the cause is, and that this cannot be predicted or prevented by a cleaner following the care label. Mention the International Fair Claims Guide on where responsibility sits.
7. Care labelling — the label does not account for the trim, which is non-compliance with AS/NZS 1957 Textiles — Care Labelling, and inadequate instructions may have contributed
8. Conclusion — cleaned strictly in accordance with the care label with all professional precautions; in our professional opinion the damage results from the bead coating failure, not the cleaning process
9. Recommend return to the original point of purchase for assessment
10. Offer further technical information, then "Yours sincerely,"

**No apology. No admission of liability. No offer of payment.**

---

## Type: `denial` — denial of liability (case: curtains)

Firm but not cold, and it goes to the customer rather than to a retailer. Cite
**Stretch, Shrinkage & Distortion**. Note also that there was no care label at all.

Structure: salutation to Mrs Kastellorizos; confirm the work and the dates;
the measurements at intake and now, and that the difference is 1.5%; that
relaxation shrinkage of up to 3% is normal, inherent to an uncoated cotton/linen
union hung for seven years, and is a fabric characteristic and not a cleaning
fault; the TAB by title; the drapery advice she signed on 30 March and what it
said; the absence of any care label and what that means; that we do not accept
liability; **then the practical offer** — our alterations room will let the hems
down at our cost, there is turn-up in them, and she is welcome to bring them in;
close warmly; "Yours sincerely,".

**No admission of liability, but the offer of the free alteration must be there.**

---

## Type: `settlement` — four cases. The owner IS at fault and is accepting it.

Own it in the **first paragraph**. Plainly. No "we regret that you feel", no
hedging, no grovelling, no corporate apology language. Decent, direct, commercial.

Structure, in this order:
1. "Dear <first name>," using the real name
2. Accept responsibility, first paragraph
3. What happened and why, in plain terms
4. The basis of the offer — the International Fair Claims Guide, the standard the
   industry uses. Name the life expectancy, the age, the condition and the
   resulting percentage. Show the working in one short paragraph so the number
   does not look plucked from the air. Be straight that it is depreciated value,
   not the price of a new one, and why that is how textile claims are settled.
5. The offer, stated clearly. Say the cleaning charge is waived.
6. Ownership — on payment of the full adjusted value the garment becomes our
   property, but offer to return it if they would rather keep it.
7. How to accept and how they will be paid
8. "Yours sincerely,"

**Use these figures exactly. Do not recompute, round or argue with them.**

| Case | Article (Table I) | LE | Age | Band | Condition | Replacement | Table II | Offer | Charge waived |
|---|---|---|---|---|---|---|---|---|---|
| `wool-suit` | Suit — wool or wool blend | 3 yrs | 36 months | 28–37 months | average | $1,250 | 20% | **$250.00** | $32.00 |
| `silk-dress` | Dress — fancy | 2 yrs | 8 months | 7–13 months | excellent | $680 | 70% | **$476.00** | $28.00 |
| `cashmere-jumper` | Jumper/cardigan — wool | 4 yrs | 14 months | 13–25 months | excellent | $640 | 70% | **$448.00** | $24.00 |
| `wedding-gown` | Wedding gown — after the wedding | 3 yrs | 10 months | 10–19 months | excellent | $3,200 | 70%, **then capped at 50%** | **$1,600.00** | $295.00 |

Case notes:
- `wool-suit` — the honest cause is that our own procedure says a collar showing
  product build-up goes to hydrocarbon or gets pre-spotted, and neither happened.
  Say so. $250 on a $1,250 suit will feel low to him, so the working has to be
  clear and the tone has to be straight. Cite **Colour Fading & Discoloration**.
- `silk-dress` — the belt was left on, against the care label's own instruction and
  against our intake procedure. There is no defensible version. Cite
  **Dye Bleed, Migration & Colour Run**.
- `cashmere-jumper` — a plant error visible in our own machine log: the wool
  programme ran at 40°C with a general extract instead of 30°C reduced. Say that
  we found it in our logs and that the machine has been re-parameterised and
  locked. Cite **Stretch, Shrinkage & Distortion**.
- `wedding-gown` — the box was packed with ordinary tissue, not the acid-free
  tissue the preserve service is sold on. **Explain the 50% cap explicitly**: the
  Guide caps a post-wedding gown at half its replacement cost because it has served
  its purpose, so the adjustment of 70% is reduced to the $1,600 cap. Also offer to
  attempt a reduction of the discolouration at our cost, since she may want the
  gown more than the money. Cite **Colour Fading & Discoloration**.

---

## Type: `goodwill` — goodwill offer (case: down-jacket)

Not a claim. Nothing is damaged. Warm, short, practical. **No admission of fault**
and **no settlement figure** — this is an offer to put it right plus a credit for
the trouble.

Structure: "Dear Fiona,"; thank her for bringing it back in; explain plainly that
down migrates and clumps after cleaning and that this is normal and recoverable,
not damage; that one re-loft cycle is our standard and this jacket needs more;
cite **Household Textiles (drapes, comforters, down, linens)** for the proposition
that down clumping after cleaning is expected and recoverable; the offer — bring it
back in and we will run a full extended re-loft at no charge, usually two to three
cycles, and a **$40 credit on her account** for the inconvenience; what to do next
and that Sharon will be expecting her; "Yours sincerely,".

---

## Type: `intake-authorisation` — at-risk authorisation (case: leather-jacket)

This is **not a letter to send**. It is a form printed at the counter and signed by
the customer **before** the garment is accepted. Write it as a form, not a letter.

It must contain, in this order:
1. A heading line: `AUTHORISATION TO PROCEED — GARMENT ACCEPTED AT CUSTOMER'S RISK`
2. Customer, docket number, site, date, staff member — as labelled lines
3. The garment, described in full, with brand and stated value
4. The care label, quoted, and whether it is present
5. **Condition at intake** — a numbered list of every pre-existing defect from the
   facts. Be specific and unflattering; this list is the whole point of the form.
6. **What we propose to do** — the method, that it is going to a specialist leather
   cleaner, and that the whole jacket will be re-finished rather than spot-finished
7. **The risks, as a numbered list** — colour will change and may not return to the
   original shade; further loss of finish at the cuffs and collar is likely; the
   mark on the lower back may not come out at all; the quilted panels may not take
   the re-finish evenly; turnaround is 3–4 weeks not the usual 5 days
8. A short paragraph on the DLI position, citing **Leather, Suede, Velvet & Napped
   Fabrics** by title, on why leather cleaning carries these risks inherently
9. **The authorisation wording** the customer signs — that they have read the above,
   that they accept the garment is accepted at their risk, that they authorise us to
   proceed, and that this does not exclude the guarantees under the Australian
   Consumer Law that cannot be excluded (say that plainly — it matters and it is true)
10. Signature blocks for the customer and the staff member, with printed name and date

---

## The chat files

For every case, `<slug>.q.txt` and `<slug>.a.txt` recreate the conversation that
produced the letter.

**`<slug>.q.txt`** — what a real person typed. Written by the person named in
`takenBy`. First person, natural, a bit rushed, no headings, no bullet lists —
the way someone types between customers. 60–140 words. It should carry the
essential facts but not read like a form.

**`<slug>.a.txt`** — the consultant's answer. 180–320 words. This is the app's
own voice: calm, specific, Australian, no bullet-point spray, no "Great question!".
It should:
- say where the business stands, in the first line
- give the reasoning — the care label, the method, who carries the risk
- name the relevant DLI TAB by title where it decides the point
- name the practical next step
- **end by proposing the letter**, in a sentence that reads naturally, e.g.
  "I'd put that in a defence letter she can take back to Myer — want me to draft it?"

Do **not** put a "Subject: ... / Type: ..." offer block in the text. The offer is
carried separately in the data.

---

Write all 24 files. Report the character count of each letter body only.
