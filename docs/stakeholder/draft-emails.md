# Draft emails — demo access

Two separate drafts, both carrying the shared demo login.

- **Catherine's** is self-contained — the changes are listed in the email itself,
  no attachment.
- **Rita's** still goes with `Hangr-Introduction-LAA-Rita-Morrison.docx` attached,
  since hers is an introduction rather than an update.

---

## 1. Catherine — Drycleaning Institute of Australia

**Attach:** nothing.

**Subject:** Hangr — what's changed, and a login to try it

Hi Catherine,

An update on where Hangr has got to since we last spoke. The last few months have
been structural rather than cosmetic, so rather than write you an essay, here is
the list.

**What's new**

- Multi-user logins. A business now has an owner and can add admins, managers and
  staff, each on their own login, with four roles enforced on the server as well
  as on screen — and in what the AI is told. A staff login isn't just blocked from
  the HR and claims screens; that data never enters the prompt, so it can't be
  talked into disclosing a wage dispute or a claims history.
- Problem Solver. The JotForm counter report is now a module in the app. Field
  order was rebuilt against about 230 real submissions, it saves as you type, and
  one incident stays one record — the report, the chat about it, any claim and
  every letter that follows are linked instead of sitting in three unconnected places.
- Letters. Nineteen types now: garment and claims work, HR, and commercial
  documents. The app won't draft until the facts that make a letter defensible are
  in — care label wording, method and solvent, precautions applied, who inspected
  at intake, who noticed the fault and when, whether an at-risk tag went on. Gaps
  are flagged rather than written around.
- Branded output. Letterhead, ABN and signature block, printing cleanly, and
  exporting to PDF or Word. A letter can be emailed from inside the app.
- Claims register. Every claim drafted is recorded — garment, who was at fault,
  what was at stake, what was paid.
- Settlement figures are now calculated against the International Fair Claims
  Guide (Table I life expectancy, Table II adjustment values) rather than guessed
  at the counter.
- Knowledge base is up to 47 documents — thirteen TABS families, the ACL service
  guarantees, the Fair Claims Guide, MA000096, Fair Work essentials, super, GST
  and BAS, payroll tax and workers comp, solvent chemistry, equipment, intake
  procedure, insurance, pricing and marketing, plus WHS for all eight states and
  territories and EPA for six.
- Staff Training. Six courses, each a short read and a quiz at an 80% pass mark,
  with a dated completion register per staff member. Authored rather than
  generated, deliberately — a score is only worth showing an insurer if the same
  questions come back the same way every time. An owner can also build courses
  from the business's own SOPs.
- Staff records — classification, employment type, start date — with HR letters
  drafted straight off the record on a fair-process structure.
- Document filing. Leases, insurance policies, supplier contracts, SOPs,
  certificates and permits, with equipment manuals filed against the machine they
  belong to. Price lists are read straight out of a spreadsheet.
- Platform work: hosted accounts with cloud sync, two-factor authentication,
  password reset, the navigation rebuilt for phone and iPad, and Hangr's own
  verified sending domain.

**Deliberately switched off**

- Bill Compare is built but off for the pilot, so it shows as coming soon.
- Emailing a letter directly to a customer is disabled at the server until the
  terms and liability position is settled in writing. Sending to your own inbox works.
- Privacy and terms drafts are with a lawyer before the pilot widens.

**Have a look for yourself**

    Site:      https://davidhudson84.github.io/Hangrapp/
    Username:  karen@mainstreetdrycleaners.com.au
    Password:  MainStreet2026!

It's a mock business with sample data, so click anything — nothing there touches a
real operator. It's a shared demo login, so please don't change the password. Best
starting point is Chat (Module 02) — ask it something you'd normally get asked as
a consultant — then Problem Solver (03) and Letters (04) to see what comes out the
other end.

Two things I'd like your view on when you've had a look: the permission position on
the TABS material before the pilot goes any wider, and whether there are member
businesses worth approaching to run it properly for a few months.

Happy to walk you through it live if that's easier.

Kind regards,
David Hudson
Hudson Group
david@hudsongroup.com.au

---

## 2. Rita Morrison — Laundry Association Australia

**Attach:** `Hangr-Introduction-LAA-Rita-Morrison.docx`

**Subject:** Hangr — the introduction I promised

Hi Rita,

Thanks again for the time on the phone. I said I'd send something through in
writing, so it's attached — two pages on what Hangr is, the problem it's aimed
at, and what's in it.

Rather than ask you to take it on trust, here is a login to the demo site:

    Site:      https://davidhudson84.github.io/Hangrapp/
    Username:  karen@mainstreetdrycleaners.com.au
    Password:  MainStreet2026!

It's a mock business with sample data in it, so there's nothing you can break —
sign in and go wherever you like. It's a shared demo login, so please leave the
password as it is. If it helps, the quickest way to get a feel for it:

- Chat (Module 02). Ask it something you'd expect an operator to ring someone
  about. It answers in the context of that business's sites, machinery and staff.
- Problem Solver (03) and Letters (04). This is the part I'd most like a laundry
  operator's read on — a counter report, and the document that comes out of it.
- Training (Module 08). Six courses with quizzes and a dated completion register,
  built for staff who are three weeks into the job.

One housekeeping note: Bill Compare is built but switched off for the pilot, so it
shows as coming soon.

What I'd value from you, in order: your honest read on what a laundry business
would need that this doesn't yet do; whether the commercial documents (quotes,
requests for proposal, scopes of works) match how contract linen work is actually
tendered; and, if it stands up to that, an introduction to a few members who
might run it in a real business for a few months.

I'd be glad to take you through it on a screen share — half an hour would show
you more than the attachment will. Any time that suits you.

Kind regards,
David Hudson
Hudson Group
david@hudsongroup.com.au

---

## Before you send

- **One login, two recipients.** Both emails carry the same demo account, so
  neither should change the password — both drafts say so. If either of them does,
  the other is locked out and you'd have to reset it.
- **The password in the email.** It's in plain text alongside the link. That's a
  judgement call for a throwaway demo account with no real customer data behind it;
  if you'd rather not, cut the password line and text it to them instead.
- **The URL.** `https://davidhudson84.github.io/Hangrapp/` is the github.io address
  — the `CNAME` was deleted in `32b06c6`. Worth confirming it loads before you send.
  If you'd rather they landed on `app.hangr.au`, set that up first (`docs/DNS.md`).
- **Password change prompt.** The app forces a new password on sign-in whenever the
  account carries a `must_change_password` flag, which Users → Add someone sets. If
  `karen@` was created that way, whichever of them signs in first will be made to
  change it and the other is locked straight out. Sign in as her once yourself: if
  it goes to the app rather than a "choose your own password" screen, you're fine.
