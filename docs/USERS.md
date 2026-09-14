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

## Known gap — worth reading before you add staff

`businesses` has an RLS policy allowing **any member** to UPDATE the row, and the
entire app state — chats, letters, claims, price lists, training — is one `data`
blob on that row.

So a staff login cannot *see* the claims register, but the database would not
stop it *overwriting* the blob that contains it. Nothing in the UI does this, and
it needs deliberate effort rather than an accident; but it is a real hole and the
role system does not close it.

Fixing it properly means splitting the blob so each role writes only its own
part, which is an architectural change, not a policy tweak. Until then, treat
staff logins as trusted-but-limited rather than untrusted.

## Files

| Where | What |
|---|---|
| `index.html` → `ROLE_CAPS`, `SECTION_CAP` | what each role may open |
| `index.html` → `renderUsers()` | the screen |
| `index.html` → `inviteMessage()` | the message to copy and paste |
| `index.html` → `linkUserToStaff()` | tying a login to a roster record |
| `supabase/functions/manage-access/index.ts` | every rule that matters, and the emailed copy (`inviteBody`) |
| `supabase/migrations/20260826_manager_role.sql` | made `manager` a legal role |

## Deploying a change

The functions in `supabase/functions/` are the source of truth. They were
recovered from the deployed versions on 2026-08-26 — before that the only copy
lived on Supabase, where a bad deploy would have lost them.

```
supabase functions deploy manage-access --project-ref cntwhojxperdrrufpokl
supabase functions deploy send-letter   --project-ref cntwhojxperdrrufpokl
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
