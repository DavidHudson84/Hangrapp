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

Users → Add someone. Enter their email, pick a role, hand over the temporary
password. They choose their own the first time they sign in and the temporary one
stops working.

There is no invite email. Counter staff often have no work inbox they check, and
an invite link would need Supabase's SMTP pointed at Resend first. The owner is
usually standing in front of the person anyway, which is a stronger handover than
an email either way.

The password is shown **once**, on screen, after the login is created. It is not
stored and cannot be looked up. If it is lost before handover, remove the person
and add them again.

## Rules the server enforces

These live in `supabase/functions/manage-access/index.ts`, not in the browser.
The browser copy of a rule is a suggestion, and this one hands out access.

- Only an **owner** may list, create, change or remove. Everyone else gets a 403.
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
| `supabase/functions/manage-access/index.ts` | every rule that matters |
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
not in the repo. `manage-access` needs only `ALLOWED_ORIGIN`; the three
`SUPABASE_*` values it uses are provided by the platform.
