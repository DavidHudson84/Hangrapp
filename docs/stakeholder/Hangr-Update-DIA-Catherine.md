HANGR CONSULTANT

Development update

Prepared for Catherine — Drycleaning Institute of Australia  ·  David Hudson, Hudson Group  ·  August 2026

Dear Catherine,

Since we last spoke, Hangr has gone through the largest block of work it has had. Almost none of it is cosmetic. The app has moved from a single-operator advice tool to something a whole shop can sign into, with the record-keeping, role separation and document output that actually makes it usable behind a counter. This is a summary of what changed and where the finished product now sits.

## It is now a multi-user business system

The biggest structural change. A business has an owner account and can add admins, managers and staff, each on their own login. The four roles are enforced in three separate places — what the screen shows, what the server allows, and, importantly, what the AI is told. A staff login does not merely have HR and financial screens hidden from it; that data is never placed in the prompt, so the consultant cannot be talked into disclosing a wage dispute or a claims history to a counter assistant. Access is granted and revoked by the owner, with the rules re-checked server-side rather than trusted from the browser.

## The counter report has been rebuilt as the Problem Solver

What used to be a JotForm has become a proper module. The field set was rebuilt against roughly 230 real submissions — the fields staff genuinely complete sit up top, the ones filled less than a third of the time moved into an optional group, and the three narrative fields were renamed for the question they actually answer, because on the old form problem descriptions routinely landed in “customer instructions”. The report now saves as you type, and one counter incident stays one thread: the report, the chat about it, any claim and every letter that follows are linked to the same record instead of sitting in three unconnected places.

## Letters will not draft on thin facts

There are now nineteen letter types — garment and claims work (defence, settlement offer, denial of liability, goodwill, complaint response, apology, at-risk authorisation at intake, advice note), HR (first and final warning, show cause, casual conversion, change of hours, redundancy), and commercial (quote, request for proposal, scope of works, service request). Before it drafts, the app works through the facts a defensible letter actually needs — care label wording, method and solvent, precautions applied, who inspected at intake, who noticed the fault and when, whether an at-risk tag was applied — and flags the material gaps rather than writing around them. Letters carry the business letterhead, ABN and signature block, print cleanly, and export to PDF or Word.

## Claims are recorded, and settlement figures are calculated

Every claim letter drafted lands in a claims register: what the garment was, who was at fault, what was at stake and what was paid. That is a number almost no operator in the country keeps. Settlement offers are calculated against the International Fair Claims Guide — Table I life expectancy and Table II adjustment values — so what goes to a customer is a figure that can be explained and defended, not a guess made under pressure at the counter.

## The knowledge behind the advice

The app carries 47 reference documents, retrieved selectively so only the relevant material reaches the model on any given question. They cover thirteen condensed DLI Textile Analysis Bulletin families (leather and napped fabrics, dye bleed, fusible interfacings, coatings and films, stains, shrinkage and distortion, laundered shirts, household textiles, fading, chemical damage, specialty fabrics, wear and age, prints and trims), the Australian Consumer Law service guarantees, the Fair Claims Guide, the Dry Cleaning and Laundry Industry Award MA000096, Fair Work essentials, superannuation, GST and BAS, payroll tax and workers compensation for every state, solvent chemistry, equipment troubleshooting, intake procedure, insurance, pricing and marketing — plus work health and safety guidance for all eight states and territories and EPA requirements for six.

## Staff training with a defensible record

Six courses, each a short read followed by a quiz at an 80% pass mark, with a dated completion register per staff member: the law at the counter, taking garments in, tagging, reading the garment, whose fault is it, and how to use Hangr. The content is authored rather than AI-generated on purpose — a score is only worth showing an insurer if the same questions come back the same way every time. Separately, an owner can now generate courses from the business’s own SOPs and publish them alongside.

## The business’s own paperwork, and the platform underneath

Leases, insurance policies, supplier contracts, equipment manuals, SOPs, certificates and compliance permits can be filed against the business — and equipment manuals against the specific machine they belong to — so the consultant answers from the operator’s actual documents. Price lists are read straight out of a spreadsheet. Underneath all of it: hosted accounts with cloud sync, two-factor authentication, password reset, a sidebar rebuilt for phone and iPad, and Hangr’s own verified sending domain with DKIM, SPF and DMARC in place, so a letter can be emailed from inside the app.

## Where it stands, and what is deliberately held back

The build is essentially complete and pilot-ready. Three things are held on purpose. Bill Compare — utility bill tracking with contract-renewal alerts — is built but switched off for the pilot. Sending a letter directly to a customer is disabled at the server until the terms and liability position are settled in writing; letters to the operator’s own inbox work now, which keeps Hangr out of the chain of any document that might end up in a dispute. And the privacy and terms drafts are with a lawyer before the pilot widens.

## Two things I’d value your view on

- The TABS material. The bulletin content is condensed and Australianised, and it is currently treated as internal subscriber material. Before the pilot goes beyond a handful of sites I want the permission and licensing position agreed with the DIA — I would rather have that conversation early than retrofit it.

- Pilot sites and the claims data. I am looking for a small number of member businesses to run it properly for a few months. The claims register also produces something the industry has never had at any scale — fault attribution and settlement values across real jobs — and I would like to talk about how that could be shared back to the Institute in aggregate.

Happy to walk you through it live whenever suits — it demonstrates far better than it reads.



Kind regards,

David Hudson

Hudson Group

david@hudsongroup.com.au
