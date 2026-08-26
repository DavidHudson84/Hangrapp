const fs = require('fs');
const {
  Document, Packer, Paragraph, TextRun, AlignmentType, BorderStyle,
  HeadingLevel, convertInchesToTwip, LevelFormat, ExternalHyperlink
} = require('docx');

const INK = '1A1A1A';
const MUTED = '5C5C5C';
const RULE = 'BBBBBB';

// ---------- building blocks ----------

const brandLine = (text) => new Paragraph({
  spacing: { after: 40 },
  children: [new TextRun({ text, font: 'Calibri', size: 20, bold: true, characterSpacing: 60, color: MUTED })],
});

const title = (text) => new Paragraph({
  spacing: { before: 60, after: 60 },
  children: [new TextRun({ text, font: 'Georgia', size: 34, bold: true, color: INK })],
});

const subtitle = (text) => new Paragraph({
  spacing: { after: 160 },
  border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: RULE, space: 8 } },
  children: [new TextRun({ text, font: 'Calibri', size: 20, color: MUTED })],
});

const h = (text) => new Paragraph({
  heading: HeadingLevel.HEADING_2,
  spacing: { before: 240, after: 80 },
  children: [new TextRun({ text, font: 'Georgia', size: 23, bold: true, color: INK })],
});

const p = (text, opts = {}) => new Paragraph({
  spacing: { after: opts.after === undefined ? 120 : opts.after, line: 276 },
  alignment: AlignmentType.LEFT,
  children: runs(text),
});

const bullet = (text) => new Paragraph({
  numbering: { reference: 'dots', level: 0 },
  spacing: { after: 80, line: 276 },
  children: runs(text),
});

const closing = (lines) => lines.map((t, i) => new Paragraph({
  spacing: { before: i === 0 ? 200 : 0, after: 0, line: 276 },
  children: [new TextRun({ text: t, font: 'Calibri', size: 22, color: INK })],
}));

const footnote = (text) => new Paragraph({
  spacing: { before: 240, line: 260 },
  border: { top: { style: BorderStyle.SINGLE, size: 6, color: RULE, space: 8 } },
  children: [new TextRun({ text, font: 'Calibri', size: 17, color: MUTED, italics: true })],
});

// **bold** markers inside body text
function runs(text) {
  return text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean).map((seg) => {
    const bold = seg.startsWith('**') && seg.endsWith('**');
    return new TextRun({
      text: bold ? seg.slice(2, -2) : seg,
      bold,
      font: 'Calibri',
      size: 22,
      color: INK,
    });
  });
}

const numbering = {
  config: [{
    reference: 'dots',
    levels: [{
      level: 0,
      format: LevelFormat.BULLET,
      text: '–',
      alignment: AlignmentType.LEFT,
      style: { paragraph: { indent: { left: convertInchesToTwip(0.28), hanging: convertInchesToTwip(0.18) } } },
    }],
  }],
};

function build(children, outPath) {
  const doc = new Document({
    numbering,
    styles: { default: { document: { run: { font: 'Calibri', size: 22, color: INK } } } },
    sections: [{
      properties: {
        page: {
          margin: {
            top: convertInchesToTwip(0.9),
            bottom: convertInchesToTwip(0.9),
            left: convertInchesToTwip(1.0),
            right: convertInchesToTwip(1.0),
          },
        },
      },
      children,
    }],
  });
  return Packer.toBuffer(doc).then((buf) => fs.writeFileSync(outPath, buf));
}

// ================= DOCUMENT 1 — Catherine, DIA =================

const dia = [
  brandLine('HANGR CONSULTANT'),
  title('Development update'),
  subtitle('Prepared for Catherine — Drycleaning Institute of Australia  ·  David Hudson, Hudson Group  ·  August 2026'),

  p('Dear Catherine,'),

  p('Since we last spoke, Hangr has gone through the largest block of work it has had. Almost none of it is cosmetic. The app has moved from a single-operator advice tool to something a whole shop can sign into, with the record-keeping, role separation and document output that actually makes it usable behind a counter. This is a summary of what changed and where the finished product now sits.'),

  h('It is now a multi-user business system'),
  p('The biggest structural change. A business has an owner account and can add admins, managers and staff, each on their own login. The four roles are enforced in three separate places — what the screen shows, what the server allows, and, importantly, what the AI is told. A staff login does not merely have HR and financial screens hidden from it; that data is never placed in the prompt, so the consultant cannot be talked into disclosing a wage dispute or a claims history to a counter assistant. Access is granted and revoked by the owner, with the rules re-checked server-side rather than trusted from the browser.'),

  h('The counter report has been rebuilt as the Problem Solver'),
  p('What used to be a JotForm has become a proper module. The field set was rebuilt against roughly 230 real submissions — the fields staff genuinely complete sit up top, the ones filled less than a third of the time moved into an optional group, and the three narrative fields were renamed for the question they actually answer, because on the old form problem descriptions routinely landed in “customer instructions”. The report now saves as you type, and one counter incident stays one thread: the report, the chat about it, any claim and every letter that follows are linked to the same record instead of sitting in three unconnected places.'),

  h('Letters will not draft on thin facts'),
  p('There are now nineteen letter types — garment and claims work (defence, settlement offer, denial of liability, goodwill, complaint response, apology, at-risk authorisation at intake, advice note), HR (first and final warning, show cause, casual conversion, change of hours, redundancy), and commercial (quote, request for proposal, scope of works, service request). Before it drafts, the app works through the facts a defensible letter actually needs — care label wording, method and solvent, precautions applied, who inspected at intake, who noticed the fault and when, whether an at-risk tag was applied — and flags the material gaps rather than writing around them. Letters carry the business letterhead, ABN and signature block, print cleanly, and export to PDF or Word.'),

  h('Claims are recorded, and settlement figures are calculated'),
  p('Every claim letter drafted lands in a claims register: what the garment was, who was at fault, what was at stake and what was paid. That is a number almost no operator in the country keeps. Settlement offers are calculated against the International Fair Claims Guide — Table I life expectancy and Table II adjustment values — so what goes to a customer is a figure that can be explained and defended, not a guess made under pressure at the counter.'),

  h('The knowledge behind the advice'),
  p('The app carries 47 reference documents, retrieved selectively so only the relevant material reaches the model on any given question. They cover thirteen condensed DLI Textile Analysis Bulletin families (leather and napped fabrics, dye bleed, fusible interfacings, coatings and films, stains, shrinkage and distortion, laundered shirts, household textiles, fading, chemical damage, specialty fabrics, wear and age, prints and trims), the Australian Consumer Law service guarantees, the Fair Claims Guide, the Dry Cleaning and Laundry Industry Award MA000096, Fair Work essentials, superannuation, GST and BAS, payroll tax and workers compensation for every state, solvent chemistry, equipment troubleshooting, intake procedure, insurance, pricing and marketing — plus work health and safety guidance for all eight states and territories and EPA requirements for six.'),

  h('Staff training with a defensible record'),
  p('Six courses, each a short read followed by a quiz at an 80% pass mark, with a dated completion register per staff member: the law at the counter, taking garments in, tagging, reading the garment, whose fault is it, and how to use Hangr. The content is authored rather than AI-generated on purpose — a score is only worth showing an insurer if the same questions come back the same way every time. Separately, an owner can now generate courses from the business’s own SOPs and publish them alongside.'),

  h('The business’s own paperwork, and the platform underneath'),
  p('Leases, insurance policies, supplier contracts, equipment manuals, SOPs, certificates and compliance permits can be filed against the business — and equipment manuals against the specific machine they belong to — so the consultant answers from the operator’s actual documents. Price lists are read straight out of a spreadsheet. Underneath all of it: hosted accounts with cloud sync, two-factor authentication, password reset, a sidebar rebuilt for phone and iPad, and Hangr’s own verified sending domain with DKIM, SPF and DMARC in place, so a letter can be emailed from inside the app.'),

  h('Where it stands, and what is deliberately held back'),
  p('The build is essentially complete and pilot-ready. Three things are held on purpose. **Bill Compare** — utility bill tracking with contract-renewal alerts — is built but switched off for the pilot. **Sending a letter directly to a customer** is disabled at the server until the terms and liability position are settled in writing; letters to the operator’s own inbox work now, which keeps Hangr out of the chain of any document that might end up in a dispute. And the privacy and terms drafts are with a lawyer before the pilot widens.'),

  h('Two things I’d value your view on'),
  bullet('**The TABS material.** The bulletin content is condensed and Australianised, and it is currently treated as internal subscriber material. Before the pilot goes beyond a handful of sites I want the permission and licensing position agreed with the DIA — I would rather have that conversation early than retrofit it.'),
  bullet('**Pilot sites and the claims data.** I am looking for a small number of member businesses to run it properly for a few months. The claims register also produces something the industry has never had at any scale — fault attribution and settlement values across real jobs — and I would like to talk about how that could be shared back to the Institute in aggregate.'),

  ...closing([
    'Happy to walk you through it live whenever suits — it demonstrates far better than it reads.',
    '',
    'Kind regards,',
    'David Hudson',
    'Hudson Group',
    'david@hudsongroup.com.au',
  ]),
];

// ================= DOCUMENT 2 — Rita Morrison, LAA =================

const laa = [
  brandLine('HANGR CONSULTANT'),
  title('An introduction'),
  subtitle('Prepared for Rita Morrison, Chief Executive Officer, Laundry Association Australia  ·  David Hudson, Hudson Group  ·  August 2026'),

  p('Dear Rita,'),

  p('Thank you for the time you gave me when we spoke. As promised, here is the written version of what I have been building, so you can read it properly rather than take my word for it over the phone.'),

  h('What Hangr is'),
  p('Hangr is an AI consultant built specifically for Australian dry cleaning and laundry operators. It is not a point-of-sale system, a route tracker or a production system — it sits alongside whatever an operator already runs. What it does is answer the questions an operator would otherwise ring a consultant, an HR adviser or a lawyer about, and then produce the document that has to go out afterwards.'),

  h('The problem it is aimed at'),
  p('In this industry the knowledge that decides an outcome sits in very few heads. An operator facing an angry customer at the counter on a Saturday morning has no framework to work from and nobody to ask, so they either pay out on a garment that was never their fault or refuse one that was, and either way they write a letter that will not survive being read back to them. Behind that sits an award with its own classification structure, work health and safety obligations that differ in every state, environmental requirements for solvent and waste, and staff turnover that means the person at the counter is often three weeks into the job. Hangr puts that knowledge behind a chat window, and puts a defensible document at the end of it.'),

  h('What is in it'),
  bullet('**Onboarding** — the business profile: sites, services offered, machinery, solvents, utilities, documents and price list. Everything after this is answered in the context of that specific business.'),
  bullet('**Chat** — owner-to-owner advice that knows the operator’s own sites, staff and equipment. Complaints, HR, claims, suppliers, compliance.'),
  bullet('**Problem Solver** — the counter report. Staff capture what happened while the customer is still standing there; the report, the advice and any letter stay linked as one thread.'),
  bullet('**Letters** — nineteen types across garment and claims work, HR, and commercial documents (quote, request for proposal, scope of works, service request), on the business’s letterhead with its ABN and signature block. The app asks for the facts a defensible letter needs before it will draft one.'),
  bullet('**Staff** — the team on file, with classification and employment type, and standardised HR letters drafted from the record following a fair-process structure.'),
  bullet('**Claims** — a register of every claim: what it was, who was at fault, what was at stake, what was paid. Settlement figures are calculated against the International Fair Claims Guide rather than guessed.'),
  bullet('**Staff Training** — six short courses with quizzes and a dated completion register, plus the ability to build courses from the business’s own procedures.'),
  bullet('**Bill Compare** — utility bills tracked over time, with a contract-renewal alert before an operator is rolled onto a worse rate. Built, and on the roadmap to switch on after the pilot.'),

  h('What it is grounded in'),
  p('The advice sits on 47 reference documents, all Australian where it matters: the Dry Cleaning and Laundry Industry Award MA000096, Fair Work essentials, superannuation, GST and BAS, payroll tax and workers compensation for every state and territory, Australian Consumer Law service guarantees, the International Fair Claims Guide, thirteen textile-analysis families covering the fabric and finish failures that drive claims, solvent chemistry, equipment troubleshooting, intake procedure, insurance, pricing and marketing — plus work health and safety guidance for all eight states and territories and EPA requirements for six. The app retrieves only what a given question needs, so answers stay specific.'),

  h('The guardrails'),
  p('Each business’s data is isolated to that business. Staff, manager, admin and owner are separate roles, and the separation is real: HR and financial material is kept out of the AI’s context entirely for a staff login, so it cannot be coaxed into disclosing it. Everything the app produces is a draft for a human to read, edit and sign — HR and legal output is labelled as general information, not advice on a specific dispute. Logins carry two-factor authentication, and letters are emailed from a verified sending domain.'),

  h('Why I wanted the laundry side to see it'),
  p('Much of what is in there is not dry-cleaning-specific. MA000096 covers the laundry classifications as well as the dry cleaning ones. Hospitality linen, workwear and uniforms, wash and fold, manchester, and commercial contract work are all in the service model, and the commercial letter set — quotes, requests for proposal, scopes of works, service requests — was built for exactly the tendering that contract linen operators do. The work health and safety and environmental material applies across both trades. What I do not have is a laundry operator’s read on where the gaps are, and that is worth more to me at this stage than another feature.'),

  h('Where it is up to, and what I’d ask of you'),
  p('The build is essentially finished and about to go into pilot with a small number of sites. What I would like from you is, first, a proper look at it — it demonstrates far better than it reads, and half an hour on a screen share would tell you more than this page. Second, your honest view on what laundry members would need that a dry-cleaning-shaped product does not yet do. And if it stands up to that, an introduction to a handful of members willing to run it in a real business for a few months.'),

  ...closing([
    'I would welcome the chance to show you. Any time that suits you works for me.',
    '',
    'Kind regards,',
    'David Hudson',
    'Hudson Group',
    'david@hudsongroup.com.au',
  ]),
];

const dir = '/home/user/Hangrapp/docs/stakeholder/';
Promise.all([
  build(dia, dir + 'Hangr-Update-DIA-Catherine.docx'),
  build(laa, dir + 'Hangr-Introduction-LAA-Rita-Morrison.docx'),
]).then(() => console.log('written'));
