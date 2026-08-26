# Email — Resend and the send-letter function

## How a letter gets sent

The browser never talks to Resend. It posts the letter to a Supabase edge
function, `send-letter`, which holds the Resend API key in its own environment
and decides who the letter may go to.

```
index.html  ──POST──▶  send-letter (Supabase edge function)  ──▶  Resend  ──▶  inbox
  sendEmail()            holds RESEND_API_KEY
  + the PDF
```

## The letter travels as a PDF

The message body is a short plain-text covering note; the letter itself is
attached. This is not decoration. An email client is a far dumber rendering
target than a browser — Outlook ignores `max-height`, `max-width` and
`object-fit`, so a logo held back by nothing but CSS arrives at its natural
size, and a flex header collapses. A letter that may end up in a dispute should
look the same to the person holding it as it did on screen, and a PDF is the
only way to promise that.

It is built in the browser with jsPDF as **text, not a screenshot** of the page:
selectable, searchable, sharp at any zoom, and roughly 7–10 KB rather than the
several megabytes an image-based PDF would cost. The browser base64s it and
`send-letter` passes it to Resend as an attachment; at most 2 attachments and
6 MB of base64 per message, and the filename is stripped back to characters that
cannot walk out of a directory.

Printed and downloaded copies are unaffected — those never left the browser.

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
| `EMAIL_FROM` | `Hangr <noreply@hangr.au>` | The From address. The domain part **must** be the verified Resend domain. The mailbox part need not exist — nothing is delivered to it, which is why it is named `noreply`. See [Replies](#replies). |
| `ALLOW_CUSTOMER_SEND` | `false` | Off until terms and liability are settled in writing. See below. |
| `ALLOWED_ORIGIN` | the app's origin, e.g. `https://app.hangr.au` | CORS. Defaults to `*` if unset, which works but lets any site call the function. |

The API key should be a **Sending access** key restricted to the `hangr.au`
domain, not a full-access key. Resend shows the key once, at creation; if it is
lost, delete it and make a new one rather than hunting for it.

Paste the values bare. Surrounding quotes and a trailing newline are stripped by
the function, so a value copied inside its quotes still works — but the *names*
must match exactly, character for character. A secret saved as `RESEND_KEY` or
`FROM_EMAIL` is, as far as the function can tell, not there at all.

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

While it is off, the app does not offer the option at all: "Straight to someone
else" is greyed out and reads *Coming soon*, and the customer acknowledgement on
a problem report says the same before it opens its form. The app learns this by
asking — a `GET` to the same function returns `{ configured, customerSend }`,
two booleans and nothing else. That is why flipping the secret is still enough
on its own: nothing in `index.html` holds a second copy of the answer. If the
app cannot reach the function it assumes off, since offering a send that then
fails is worse than not offering one.

## Replies

Nothing can be replied to at the sending address. Receiving is switched off on
the `hangr.au` domain in Resend, so a reply to `noreply@hangr.au` is not
delivered anywhere and nobody is told it failed — it simply disappears. That is
why the mailbox is named for what it does.

Where a reply needs to reach a person, it goes through a **Reply-To** header
carrying the operator's own address, which the send dialog collects. The app is
explicit about this either way:

- With a Reply-To set, the emailed copy says *"Replies to this email go to
  you@yourbusiness.com.au."*
- Without one, it says *"This was sent from an address that is not monitored —
  replies to it are not received."*

Emailing a letter **to yourself** sets no Reply-To and needs none: it lands in
your own inbox and you forward it from your own address, which is where the
customer's reply then goes.

Printed and downloaded copies never carry either line — it is true of the email,
not of the letter.

Turning replies on properly later means enabling receiving on the domain in
Resend and adding its MX records, which is a DNS change ([DNS.md](DNS.md)) and a
decision about who reads that mailbox. Nothing in the app depends on it.

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
3. It should arrive from `noreply@hangr.au` within a few seconds, with the
   letter attached as a PDF and a short note in the body.
4. Check the send is listed under Emails in the Resend dashboard.

Then try **to a customer**: it should be refused with "Sending to customers is
not switched on yet", which confirms `ALLOW_CUSTOMER_SEND` is doing its job.

## When it does not work

| What you see | Almost always |
|---|---|
| "Email is not configured yet — `RESEND_API_KEY` is missing…" (503) | Exactly what it says: that secret is absent from the function's environment. The message names the missing one, so set it and try again. A secret that exists under a misspelt name reads as absent. |
| "Sign in to send email." (401) | The session expired. Sign out and back in. |
| "The email could not be sent. Try again shortly." (502) | Resend rejected it — usually the domain is not verified yet, or `EMAIL_FROM` uses a domain other than `hangr.au`. The real reason is in the function logs (Supabase → Edge Functions → send-letter → Logs). |
| Nothing arrives, no error | Check spam, then the Emails list in the Resend dashboard. If Resend shows it delivered, it is a receiving-end filter — this is what the DMARC record in [DNS.md](DNS.md) helps with. |
| "The PDF builder did not load." | jsPDF is loaded from a CDN and did not arrive — usually a network blip or a blocker. Reload the page. Nothing is sent when this happens; the letter is never posted without its attachment. |

The DNS records the sending domain needs are in [DNS.md](DNS.md).
