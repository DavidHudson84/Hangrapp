# Email — Resend and the send-letter function

## How a letter gets sent

The browser never talks to Resend. It posts the letter to a Supabase edge
function, `send-letter`, which holds the Resend API key in its own environment
and decides who the letter may go to.

```
index.html  ──POST──▶  send-letter (Supabase edge function)  ──▶  Resend  ──▶  inbox
  sendEmail()            holds RESEND_API_KEY
```

The function is already deployed to the `hangr-consultant` project
(`cntwhojxperdrrufpokl`). It refuses every request with a plain
"Email is not configured yet." until the secrets below are set.

## The secrets

Set these under **Project Settings → Edge Functions → Secrets** in the Supabase
dashboard. The function reads them at request time, so no redeploy is needed
after a change — but an in-flight instance can hold an old value for a minute or
so.

| Name | Value | Why |
|------|-------|-----|
| `RESEND_API_KEY` | `re_…` from the Resend dashboard | Sends the mail. Never goes near the browser. |
| `EMAIL_FROM` | `Hangr <letters@hangr.au>` | The From address. The domain part **must** be the verified Resend domain. The mailbox part (`letters`) need not exist — nothing is delivered to it. |
| `ALLOW_CUSTOMER_SEND` | `false` | Off until terms and liability are settled in writing. See below. |
| `ALLOWED_ORIGIN` | the app's origin, e.g. `https://app.hangr.au` | CORS. Defaults to `*` if unset, which works but lets any site call the function. |

The API key should be a **Sending access** key restricted to the `hangr.au`
domain, not a full-access key. Resend shows the key once, at creation; if it is
lost, delete it and make a new one rather than hunting for it.

## Two destinations, deliberately different

**To yourself** — always available. A better "download": the letter lands in the
signed-in user's inbox and they forward it from their own address, which keeps
Hangr out of the chain entirely. The recipient is taken from the session, so the
caller cannot redirect it.

**To a customer** — governed by `ALLOW_CUSTOMER_SEND`, and off by default.
Sending a letter straight to a customer puts Hangr in the chain of a document
that may end up in a dispute, so it stays off until the terms and liability
position are settled in writing (handover step 1). The switch lives on the
server, not in `index.html`; the UI reads the server's answer and shows
"Sending to customers is not switched on yet" rather than a raw error. Turning it
on later is a one-word secret change — `true` — with no code change and no
redeploy.

When it is on, only `owner`, `admin` and `manager` may use it, and the role is
read from the `memberships` table, never from the request body. Staff draft
letters; they do not post them out under the business name.

## Other guards already in the function

- Anonymous callers are rejected — the publishable key alone yields no user,
  which is what stops the endpoint being an open relay for anyone who reads that
  key out of the page source.
- Control characters are stripped from the subject (header injection).
- Body capped at 200,000 characters; at most 5 recipients.
- Resend's own errors are logged but not shown to the operator — they can name
  the sending domain and the key's state.

## Testing it

1. Sign in to the app.
2. Generate any letter, then **Email** → **to myself**.
3. It should arrive from `letters@hangr.au` within a few seconds.
4. Check the send is listed under Emails in the Resend dashboard.

Then try **to a customer**: it should be refused with "Sending to customers is
not switched on yet", which confirms `ALLOW_CUSTOMER_SEND` is doing its job.

## When it does not work

| What you see | Almost always |
|---|---|
| "Email is not configured yet." (503) | `RESEND_API_KEY` or `EMAIL_FROM` is missing or misspelt in Supabase secrets. |
| "Sign in to send email." (401) | The session expired. Sign out and back in. |
| "The email could not be sent. Try again shortly." (502) | Resend rejected it — usually the domain is not verified yet, or `EMAIL_FROM` uses a domain other than `hangr.au`. The real reason is in the function logs (Supabase → Edge Functions → send-letter → Logs). |
| Nothing arrives, no error | Check spam, then the Emails list in the Resend dashboard. If Resend shows it delivered, it is a receiving-end filter — this is what the DMARC record in [DNS.md](DNS.md) helps with. |

The DNS records the sending domain needs are in [DNS.md](DNS.md).
