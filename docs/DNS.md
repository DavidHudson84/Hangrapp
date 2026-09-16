# DNS — hangr.au

Everything the domain needs, in one place. Add these wherever hangr.au's DNS is
managed (the registrar you bought it from, unless the nameservers have been
pointed somewhere else).

Two independent jobs: **email sending** (Resend) and **the app's address**
(GitHub Pages). Email does not depend on the app records, so the three Resend
records can go in on their own.

## A note on how registrars name records

Most control panels append the domain for you: you type `send` and it saves
`send.hangr.au`. A few want the whole thing. Whichever yours does, the final
saved names must be:

- `resend._domainkey.hangr.au`
- `send.hangr.au`

If a record ends up as `send.hangr.au.hangr.au`, that is this trap — delete it
and enter the short name instead.

## 1. Email sending (Resend)

Three records. Resend checks all three before it will send as this domain.

| # | Type | Name              | Value                                          | Priority |
|---|------|-------------------|------------------------------------------------|----------|
| 1 | TXT  | `resend._domainkey` | see DKIM value below                         | —        |
| 2 | MX   | `send`            | `feedback-smtp.ap-northeast-1.amazonses.com`   | 10       |
| 3 | TXT  | `send`            | `v=spf1 include:amazonses.com ~all`            | —        |

TTL: leave on Auto/default for all three.

DKIM value (record 1) — one line, no spaces or line breaks:

```
p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC4YeaaQQH/WYE5QlowJ1vODOwuWjbfsbnTVaEhYMq6O1bL30iaXGe2GqioIMVi/D6qxwJ0U5Ez9DBtdThZILCtxjWlIugoRBGtuDK5AXlZCDRGxR/oWLZJbA1GO6VNJP6GSVhTJ4cCuY7sueyuYZbaQvy5K3AlPSM66BP2tX8KfQIDAQAB
```

That value is longer than the 255 characters a single TXT string may hold. Most
panels split it automatically; if yours rejects it for length, look for a
"multi-line" or "split long value" option rather than trimming it.

Record 2 is an **MX on the `send` subdomain**, not on the root. It does not
affect mail delivered to @hangr.au addresses — the root MX records, if any, are
untouched.

These values come from Resend and are specific to the hangr.au domain entry
created on 2026-08-25. If that domain entry is ever deleted and re-added, the
DKIM value changes and this file needs updating.

## 2. DMARC (recommended, not required)

Not needed for verification, but it tells receiving mail servers what to do with
mail that fails the checks above, and it is the difference between landing in an
inbox and landing in spam at Gmail and Outlook.

| Type | Name     | Value                                     |
|------|----------|-------------------------------------------|
| TXT  | `_dmarc` | `v=DMARC1; p=none; rua=mailto:david@hudsongroup.com.au` |

`p=none` only asks for reports; it rejects nothing. Once real mail has been
flowing for a few weeks and the reports look clean, tighten it to
`p=quarantine`.

### There must be exactly one

As at 26 August 2026 a lookup of `_dmarc.hangr.au` returns **two** records:

```
v=DMARC1; p=none; rua=mailto:david@hudsongroup.com.au
v=DMARC1; p=quarantine; adkim=r; aspf=r; rua=mailto:dmarc_rua@onsecureserver.net;
```

The first is the one above. The second is a registrar default — `onsecureserver.net`
is GoDaddy's. This is not a harmless duplicate: when a receiver finds more than
one DMARC record it must treat the domain as having **no DMARC policy at all**
(RFC 7489 §6.6.3), so neither record is doing anything and mail loses the
alignment signal that keeps it out of spam.

**Delete one of them.** Keep whichever you want to own — but only one may exist.
Check with `dig TXT _dmarc.hangr.au +short`; a single line back means it is fixed.

SPF and DKIM are both correct and are not affected by this.

## 3. The site's address

Both the landing page and the app are served by GitHub Pages from
`DavidHudson84/hangrapp`, out of one repository:

```
hangr.au/        →  index.html      the landing page
hangr.au/app/    →  app/index.html  the app and its login
```

That is a change from the earlier plan of `app.hangr.au`, which would have needed
a second repository — one GitHub Pages site can only answer on one domain. A
`CNAME` file containing `app.hangr.au` was committed and later deleted (32b06c6),
which is how a custom domain is removed from Pages, so until these records go in
the site answers on its github.io address.

**Do the steps below in order.** GitHub is explicit about why:

> Make sure you add your custom domain to your GitHub Pages site before
> configuring your custom domain with your DNS provider. Configuring your custom
> domain with your DNS provider without adding your custom domain to GitHub could
> result in someone else being able to host a site on one of your subdomains.

### Step 1 — Verify the domain (recommended)

Not required, and the site works without it. It stops anyone else ever attaching
`hangr.au` to *their* GitHub Pages site, which is worth five minutes.

GitHub → your avatar → **Settings** → **Pages** → **Add a domain** → `hangr.au`.
GitHub gives you a TXT record to add at the registrar:

| Type | Name                                       | Value            |
|------|--------------------------------------------|------------------|
| TXT  | `_github-pages-challenge-davidhudson84`     | (GitHub shows it) |

Add it, wait a few minutes, then press **Verify**.

### Step 2 — Add the custom domain to the repository

Repository → **Settings** → **Pages** → **Custom domain** → type `hangr.au` →
**Save**.

This commits a `CNAME` file to the repository automatically. Do not add that file
by hand, and do not delete it.

GitHub will immediately show a DNS check failure — *"Domain does not resolve to
the GitHub Pages server"* or similar. **That is expected.** The records do not
exist yet; step 3 fixes it.

### Step 3 — The records, at the registrar

`hangr.au` is at GoDaddy. Sign in → **My Products** → find `hangr.au` → **DNS**
(or **Manage DNS**).

Two records GoDaddy created when the domain was registered are in the way. These
are **changed or deleted**, not added alongside:

1. **Delete** the parked `A` record on `@`. GoDaddy points it at its own parking
   page. Four new `A` records replace it.
2. **Edit** the stock `CNAME` on `www`, which points at `@`. It needs to point at
   `davidhudson84.github.io` instead.

Then the site's records are:

| Type  | Name  | Value                     |
|-------|-------|---------------------------|
| A     | `@`   | `185.199.108.153`         |
| A     | `@`   | `185.199.109.153`         |
| A     | `@`   | `185.199.110.153`         |
| A     | `@`   | `185.199.111.153`         |
| CNAME | `www` | `davidhudson84.github.io` |

All four `A` records, not one — they are GitHub's four Pages servers and the
redundancy is the point. TTL can stay on whatever GoDaddy defaults to.

**The apex cannot be a CNAME.** A CNAME at the root of a domain is invalid under
the DNS spec and GoDaddy will refuse it. Some registrars offer `ALIAS` or `ANAME`
records, which GitHub also accepts and which do work at the apex; GoDaddy does
not, so `A` records it is.

**The `www` row catches everyone, so read it twice.** Only the *Value* is the
github.io address. The *Name* is `www` and nothing else:

```
Type:  CNAME
Name:  www                        ← not the github.io address
Value: davidhudson84.github.io    ← no repository name, no https://, no slash
TTL:   1 Hour (the default is fine)
```

GoDaddy appends the domain to whatever goes in *Name*, exactly as described in
[A note on how registrars name records](#a-note-on-how-registrars-name-records)
at the top of this file. Putting the github.io address in *Name* creates
`davidhudson84.github.io.hangr.au`, which is a real record pointing at a real
place and is of no use to anybody. If that one gets saved by mistake, delete it
and enter the row above.

The value is the account's default domain, **with no repository name on the end**.
`davidhudson84.github.io/Hangrapp` is not a valid CNAME value — a CNAME points at
a host, and a path is not part of a host.

`www` is optional, but GitHub recommends it for an HTTPS site, and once both it
and the apex records exist Pages redirects `www.hangr.au` to `hangr.au` on its
own. The redirect needs the record to be there — it is not automatic without it.

While you are in the DNS panel: leave the three Resend records in §1 alone, and
delete the duplicate `_dmarc` record per §2.

IPv6 is optional. If you want it, add `AAAA` records on `@` for
`2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153` and
`2606:50c0:8003::153` — *as well as* the `A` records, not instead of them.

### Step 4 — Enforce HTTPS

DNS changes can take up to 24 hours to propagate, though GoDaddy is usually
minutes. Once the repository's Pages settings stop showing the DNS error, GitHub
issues a certificate — up to an hour — and then **Enforce HTTPS** becomes
tickable. Tick it.

Do not send anyone the new address until that box is ticked, or they may meet a
certificate warning.

### Step 5 — The two things that break if you forget them

1. **Supabase Auth → URL Configuration.** Set the Site URL to
   `https://hangr.au/app/` and add `https://hangr.au/app/**` to the redirect
   allowlist, or password-reset emails will land somewhere else. Leave the
   existing github.io entry in place until the domain is confirmed working.

2. **The edge function secrets.** `ALLOWED_ORIGIN` becomes `https://hangr.au` —
   an origin, with no path, because it is a CORS header value. That is *not* the
   same as the address staff are told to sign in at, which is why there is now a
   separate `APP_SIGNIN_URL` set to `https://hangr.au/app/`. See
   [EMAIL.md](EMAIL.md).

### What happens to the old github.io address

Nothing breaks, but it stops pointing where people expect.

GitHub **does not document** any redirect from the default `*.github.io` domain to
a custom one. The only automatic redirects in the documentation are between the
apex and `www` forms of the custom domain itself. In practice GitHub does appear
to send a 301, but as it is undocumented it is not something to rely on.

It does not matter either way. Both addresses serve the same repository, so
somebody on the old link is either redirected to `hangr.au` or carries on being
served the same files from `github.io`. Both land them on the **landing page**,
because the repository root is the landing page now and the redirect drops the
`/Hangrapp` path segment. There is no forward to set up and nothing to configure.

Three things do change for the people already using the old address, and they are
worth a short message:

- They land on the landing page and need one click on **Log in**.
- They are signed out once. The browser scopes a stored session to the origin, so
  moving from `davidhudson84.github.io` to `hangr.au` clears it. Cloud data is
  untouched; anything queued for deletion but not yet synced is dropped.
- Anyone who added the app to their home screen needs to add it again from
  `hangr.au/app`, since the old icon points at the old origin.

## Checking the records landed

DNS takes minutes to a couple of hours to propagate. To check without waiting on
a mail send:

```
dig TXT resend._domainkey.hangr.au +short
dig MX  send.hangr.au +short
dig TXT send.hangr.au +short
```

Or use https://toolbox.googleapps.com/apps/dig/ if `dig` is not to hand. When
all three answer, press **Verify DNS Records** on the domain in the Resend
dashboard.
