# Users — who can sign in, and as what

## The four roles

| Role | What they get |
|---|---|
| **Owner** | Everything, including who else has access. One per business — the account that signed up. |
| **Admin** | Everything except managing access. The setup and onboarding role. |
| **Manager** | Day-to-day operations: chat, letters, claims, pricing. No HR, no financials. |
| **Staff** | Chat, their own letters, and the price list. Nothing else. |

The capability map behind this is `ROLE_CAPS` in `index.html`. A role is enforced
in three places, not one:

1. **Sections** — `SECTION_CAP` hides what the role cannot open.
2. **The prompt** — `ROLE_FORBIDDEN` and `ROLE_BLOCKED_KB` keep the matching data
   out of what the consultant is told. Hiding a screen is the least of it: a
   staff login cannot be *talked into* revealing a wage dispute, because the wage
   dispute was never in the prompt.
3. **The server** — `send-letter` re-checks the role before emailing a customer,
   and `manage-access` re-checks it before touching the roster.

## Adding someone

Users → Add someone. Enter their email, their name, pick a role, and hand over
the temporary password. They choose their own the first time they sign in and
the temporary one stops working.

Creating the login also creates their **staff record** and ties the two together
(`staff.userId`). That link is what lets Training recognise them the first time
they sign in instead of asking them to pick their name off a dropdown — see
`docs/TRAINING.md`. If the person is already on the staff list, pick their name
under **Staff record** instead of creating a second one.

Every user row shows which staff record it is tied to and how that person's
training is going, and the same dropdown re-ties a row that was created before
this existed, or fixes one tied to the wrong person.

## Getting the password to them

The password is shown **once**, on screen, after the login is created. It is not
stored and cannot be looked up. If it is lost before the handover, remove the
person and add them again.

Three ways off that screen, and it is worth knowing why there are three:

1. **Read it out.** The owner is often standing in front of the person, which is
   a stronger handover than any email.
2. **Copy the message.** The card carries a ready-made plain-text message —
   where to sign in, their email, the temporary password, and that they will be
   asked to choose their own. **Copy message** puts it on the clipboard for
   WhatsApp, Messenger, or the owner's own email to whatever address that person
   actually reads. This always works, configured or not.
3. **Email it from `hangr.au`.** Tick *Email the details to them as well* on the
   form, or use **Email it** on the card afterwards. It goes out from
   `EMAIL_FROM` with the business's own email as the reply-to. The address
   defaults to the login email; override it when the person has no work inbox and
   reads a personal one.

There is still no Supabase **invite link** — that would need Supabase's own SMTP
pointed at Resend, and a link is worse than a password for someone who will be
signing in on a shared counter machine anyway.

Option 3 needs `RESEND_API_KEY` and `EMAIL_FROM` readable by `manage-access`.
On this project they already are: **Edge Function secrets are set per project, not
per function**, so the two values `send-letter` has been using are the same two
`manage-access` reads, and there is nothing to add. A different deployment that
has never set them gets a disabled tickbox that says so, with options 1 and 2
unaffected. The app asks the function whether it can send rather than keeping its
own copy of the answer, so setting them takes effect without redeploying
`index.html`.

**Email it** works only while the card is on screen. The password is stored
nowhere, so the browser has to hand back the one it still holds in memory;
once the card is dismissed there is nothing left to send.

## Rules the server enforces

These live in `supabase/functions/manage-access/index.ts`, not in the browser.
The browser copy of a rule is a suggestion, and this one hands out access.

- Only an **owner** may list, create, change, remove, or send a handover email.
  Everyone else gets a 403.
- **Owner cannot be created, demoted or removed.** There is one, it is the
  account that signed the business up, and no path here can lock it out.
- **You cannot change or remove yourself** — that is the other half of not
  locking the owner out.
- Minimum 10 characters on the temporary password.
- **One person, one business.** An email that already has a Hangr login is
  refused. `loadCloud()` reads a single membership at sign-in, so a second one
  would silently decide which business that person lands in.
- Removing someone deletes the membership *and* the login, so no orphan account
  is left able to sign in and reach an empty app.
- **The email body is built on the server**, from a fixed template. The caller
  supplies the recipient, two names and the temporary password — all bounded and
  stripped of control characters — and nothing else. It cannot supply a body. A
  function that holds a send key and will email whatever it is handed is a relay,
  and this one hands out passwords.
- **The sign-in link comes from `ALLOWED_ORIGIN`**, not from the request, unless
  that secret is unset — in which case the browser's own address is accepted, and
  only over https.
- **One recipient per send.** `send_invite` also re-reads the login's address
  from `auth` rather than trusting the body, so nobody is emailed a password for
  an account that is not theirs.

Removing someone does **not** delete their staff record or their training
history — those belong to the business. The browser releases the `staff.userId`
link on the way out, so the record can be re-tied to whoever replaces them and
does not sit unpickable behind a dead account.

## The blob, and how the role is actually enforced

The entire app state — chats, letters, claims, price lists, staff records,
training — is one `data` blob on one row of `businesses`. That used to mean the
role system was decoration. Two RLS policies let **any member** SELECT and UPDATE
that row, so every staff login downloaded the wage dispute along with everything
else and could write the whole thing back over the top. Hiding a screen is not
access control when devtools is one keystroke away.

The browser no longer touches the table. `supabase/functions/state/index.ts` holds
the service role key and is the only reader and the only writer:

- **load** returns only what the caller's role may see.
- **save** merges the request into the stored blob key by key. A section the
  caller may not write is taken from the stored copy, never from the request.

So a staff login that posts a doctored blob changes nothing it could not already
change through its own screens, and never receives the sections it has no
business holding in the first place.

### What each role is sent

| Section | owner / admin | manager | staff |
|---|---|---|---|
| profile | all | no owner PIN | no owner PIN |
| chats, problems | all | all | their own |
| letters | all | all | their own, minus HR |
| claims | yes | yes | **withheld** |
| bills | yes | **withheld** | **withheld** |
| staff records | full | name, login, start date | name, login, start date |
| documents | all | all | manuals and SOPs only |
| price list | yes | yes | yes |
| training | all | all | all |

Training is everyone's on purpose — a course the person on the counter cannot
open trains nobody — and it is merged rather than replaced, by union on id. That
also fixes the read-then-write race the old browser-side merge could only narrow.

### The invariant that keeps merging safe

For the sections filtered per item rather than per key — chats, letters,
problems — the `owns` predicate used by the merge **must match the read filter
exactly**. The merge reads "the caller owns it and did not send it back" as a
deletion, so a filter that hid an item the merge believed they owned would delete
that item on their next save. The two are written next to each other in the
function for that reason. Change them together, and re-run the round-trip test:
loading as a role and immediately saving must leave every key byte-identical.

### Deploy order

Applying the migration before the matching `index.html` is live breaks the app
for everyone signed in, because the old client reads the table directly:

1. `supabase functions deploy state --project-ref cntwhojxperdrrufpokl`
2. publish `index.html` (merge to `main`; GitHub Pages does the rest)
3. `supabase/migrations/20260914_lock_business_blob.sql`

Between 2 and 3 both paths work, so there is no moment where a signed-in browser
has no way to load.

## Two records for one person

Adding a login offers to create a staff record. Picking that when the person is
already on the roster leaves them on it twice, with their training split across
both halves and neither telling the whole story.

The Staff screen notices. Any name held by more than one record raises a banner
at the top: pick which record to keep, and the rest fold into it. Letters and
training move across, blank fields on the survivor are filled in from what is
absorbed — never the other way round — and notes from both are kept, because
that is the one field where picking a winner can lose something that matters in
a dispute.

A record carries at most one login. If both halves had one, the login on the
record you keep stays and the other is left unlinked, which the confirmation says
before you commit; re-tie it from the dropdown on the Users screen. Training
records that were never tied to a record match by name, so they follow the
survivor with nothing to do.

## Files

| Where | What |
|---|---|
| `index.html` → `ROLE_CAPS`, `SECTION_CAP` | what each role may open |
| `index.html` → `renderUsers()` | the screen |
| `index.html` → `inviteMessage()` | the message to copy and paste |
| `index.html` → `linkUserToStaff()` | tying a login to a roster record |
| `index.html` → `duplicateStaffGroups()`, `mergeStaffRecords()` | folding two records for one person back together |
| `supabase/functions/state/index.ts` | what each role may read and write of the blob |
| `supabase/migrations/20260914_lock_business_blob.sql` | took the table away from the browser |
| `supabase/functions/manage-access/index.ts` | every rule that matters, and the emailed copy (`inviteBody`) |
| `supabase/migrations/20260826_manager_role.sql` | made `manager` a legal role |

## Deploying a change

The functions in `supabase/functions/` are the source of truth. They were
recovered from the deployed versions on 2026-08-26 — before that the only copy
lived on Supabase, where a bad deploy would have lost them.

```
supabase functions deploy manage-access --project-ref cntwhojxperdrrufpokl
supabase functions deploy send-letter   --project-ref cntwhojxperdrrufpokl
supabase functions deploy state         --project-ref cntwhojxperdrrufpokl
supabase functions deploy ai            --project-ref cntwhojxperdrrufpokl
```

Secrets are set in the dashboard (Project Settings → Edge Functions → Secrets),
not in the repo, and they belong to the **project** — every function in it reads
the same set, so there is no such thing as adding a secret to one function.
`manage-access` uses `ALLOWED_ORIGIN`, the three platform-provided `SUPABASE_*`
values, and — for the handover email — `RESEND_API_KEY` and `EMAIL_FROM`, which
are already set because `send-letter` sends with them. Nothing to add here; see
[EMAIL.md](EMAIL.md) for what they hold.

`ALLOW_CUSTOMER_SEND` is **not** consulted here. That switch is about letters to
customers; telling your own new staff member their password is not the same act
and is not held behind it.
