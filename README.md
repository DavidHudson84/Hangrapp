# Hangrapp

Hangr Consultant — AI chat for modern dry cleaners.

## What is where

The repository is served whole by GitHub Pages, so the directory layout *is* the
site layout.

| Path | What it is |
|---|---|
| `index.html` | The public landing page at **hangr.au**. Static, self-contained, no build step. |
| `legal.html` | Privacy, terms and data handling, for people who have not logged in. **Generated** — see below. |
| `app/index.html` | The app itself, at **hangr.au/app**. One 12,000-line file, vanilla JS, no framework. |
| `assets/` | The logo and the social-preview image. |
| `supabase/` | Auth, the database migrations, and four edge functions. |
| `mock/` | The Main Street Dry Cleaners demo tenant. See `docs/MOCK.md`. |
| `docs/` | DNS, email, users, training, and the feature-scope notes. |
| `tools/` | Small build scripts. |

Nothing compiles. Serving the repository root is enough to run the whole thing:

```
python3 -m http.server 8000
```

Then `http://localhost:8000/` is the landing page and `http://localhost:8000/app/`
is the app.

## legal.html is generated — do not edit it

The privacy policy, terms and data-handling notes live in `LEGAL_DOCS` in
`app/index.html`, because that is what the app shows in its own modal. The public
page is rendered from the same source so the two cannot drift:

```
python3 tools/build-legal.py
```

Edit the text in `app/index.html`, re-run that, and commit both.

## Deployment

Push to `main`. GitHub Pages serves the repository root at `hangr.au`. The DNS
records, the custom-domain setup and the Resend records are all in
[docs/DNS.md](docs/DNS.md); the edge function secrets are in
[docs/EMAIL.md](docs/EMAIL.md).
