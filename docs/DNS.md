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

### The records

**The apex cannot use a CNAME.** A CNAME at the root of a domain is invalid under
the DNS spec, and most registrars will refuse it. GitHub Pages publishes four A
records for apex domains instead — all four, not one:

| Type  | Name  | Value                     |
|-------|-------|---------------------------|
| A     | `@`   | `185.199.108.153`         |
| A     | `@`   | `185.199.109.153`         |
| A     | `@`   | `185.199.110.153`         |
| A     | `@`   | `185.199.111.153`         |
| CNAME | `www` | `davidhudson84.github.io` |

The `www` record is optional but worth adding — Pages will redirect
`www.hangr.au` to the apex once the custom domain is set.

If the registrar offers AAAA records and you want IPv6 as well, GitHub's are
`2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153` and
`2606:50c0:8003::153`. Not required.

### Then, in the repository

Settings → Pages → Custom domain → `hangr.au` → Save. Wait for the certificate to
issue (up to an hour) and tick **Enforce HTTPS**. Saving it there re-creates the
`CNAME` file in the repository automatically — do not add that file by hand.

### Then, the two things that break if you forget them

1. **Supabase Auth → URL Configuration.** Set the Site URL to
   `https://hangr.au/app/` and add `https://hangr.au/app/**` to the redirect
   allowlist, or password-reset emails will land somewhere else. Leave the
   existing github.io entry in place until the domain is confirmed working.

2. **The edge function secrets.** `ALLOWED_ORIGIN` becomes `https://hangr.au` —
   an origin, with no path, because it is a CORS header value. That is *not* the
   same as the address staff are told to sign in at, which is why there is now a
   separate `APP_SIGNIN_URL` set to `https://hangr.au/app/`. See
   [EMAIL.md](EMAIL.md).

### One-off effects of the move

Going from `davidhudson84.github.io` to `hangr.au` changes the origin, and a
browser scopes its local storage to the origin. Everyone is signed out once and
signs back in; anything queued for deletion but not yet synced is dropped. Data
in the cloud is untouched. Anyone who installed the app to their home screen from
the github.io address needs to install it again from the new one.

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
