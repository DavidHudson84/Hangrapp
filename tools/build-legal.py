#!/usr/bin/env python3
"""Regenerate legal.html from the app's LEGAL_DOCS.

The privacy policy, terms and data-handling notes live in one place — the
`LEGAL_DOCS` object in app/index.html — because that is what the app shows in
its own modal. A marketing site has to offer the same documents to someone who
has not logged in, so this script renders them to a static page instead of us
keeping a second copy by hand.

Run it from the repo root after editing LEGAL_DOCS:

    python3 tools/build-legal.py

It rewrites legal.html. Do not edit legal.html directly — the next run of this
script will overwrite it.
"""

import html
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
APP = os.path.join(ROOT, 'app', 'index.html')
OUT = os.path.join(ROOT, 'legal.html')


def extract_docs(src):
    """Pull the three documents out of the LEGAL_DOCS literal."""
    start = src.index('const LEGAL_DOCS')
    end = src.index('function openLegal', start)
    block = src[start:end]

    docs = []
    for key in re.findall(r'^\s{2}(\w+):\s*\{', block, re.M):
        m = re.search(
            r'\b' + key + r':\s*\{\s*label:\s*[\'"]([^\'"]+)[\'"],'
            r'\s*title:\s*[\'"]([^\'"]+)[\'"],\s*body:\s*`(.*?)`\s*\}',
            block, re.S)
        if not m:
            sys.exit('Could not parse LEGAL_DOCS entry: ' + key)
        docs.append({'key': key, 'label': m.group(1), 'title': m.group(2), 'body': m.group(3)})
    if not docs:
        sys.exit('No documents found in LEGAL_DOCS.')
    return docs


def inline(text):
    """Bold, links and escaping. The source only uses **bold** and bare emails."""
    out = html.escape(text)
    out = re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', out)
    # The trailing [\w] stops a full stop at the end of a sentence being swallowed
    # into the address — "…: david@example.com." must not link the final dot.
    out = re.sub(r'(?<![\w.@-])([\w.+-]+@[\w-]+(?:\.[\w-]+)*\.[A-Za-z]{2,})',
                 r'<a href="mailto:\1">\1</a>', out)
    return out


def markdown(body):
    """A deliberately small renderer — the source is headings, bullets and paragraphs."""
    parts = []
    bullets = []

    def flush():
        if bullets:
            parts.append('<ul>' + ''.join('<li>' + inline(b) + '</li>' for b in bullets) + '</ul>')
            bullets.clear()

    for line in body.strip().split('\n'):
        line = line.rstrip()
        if not line.strip():
            flush()
            continue
        if line.startswith('## '):
            flush()
            parts.append('<h2>' + inline(line[3:].strip()) + '</h2>')
        elif line.startswith('# '):
            flush()
            parts.append('<h2>' + inline(line[2:].strip()) + '</h2>')
        elif line.lstrip().startswith('- '):
            bullets.append(line.lstrip()[2:].strip())
        else:
            flush()
            parts.append('<p>' + inline(line.strip()) + '</p>')
    flush()
    return '\n      '.join(parts)


PAGE = '''<!DOCTYPE html>
<html lang="en-AU">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
<title>Privacy, terms and data handling — Hangr Consultant</title>
<meta name="description" content="Hangr Consultant's privacy policy, terms of use, and how your data is handled.">
<link rel="canonical" href="https://hangr.au/legal.html">
<meta name="robots" content="index, follow">
<meta name="theme-color" content="#16202E">
<link rel="icon" type="image/png" href="assets/hangr-icon.png">
<link rel="apple-touch-icon" href="assets/hangr-icon.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600&family=Geist+Mono:wght@400&family=Geist:wght@400;500;600&display=swap" rel="stylesheet">

<!-- GENERATED FILE — do not edit by hand.
     Built from LEGAL_DOCS in app/index.html by tools/build-legal.py.
     Change the text there, then re-run the script. -->

<style>
  :root {
    --ink: #ECEAE3; --ink-2: #C6CDD6; --paper: #16202E; --surface: #1E2A3B;
    --surface-2: #26374E; --accent: #B0894F; --accent-soft: rgba(176,137,79,.16);
    --accent-edge: rgba(176,137,79,.42); --rule: rgba(255,255,255,.09);
    --rule-strong: rgba(255,255,255,.17); --muted: #94A0B0;
    --serif: 'Fraunces', Georgia, 'Times New Roman', serif;
    --sans: 'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
    --mono: 'Geist Mono', 'SF Mono', Monaco, Menlo, ui-monospace, monospace;
    color-scheme: dark;
  }
  *, *::before, *::after { box-sizing: border-box; }
  body {
    margin: 0; background: var(--paper); color: var(--ink); font-family: var(--sans);
    font-size: 16px; line-height: 1.65; -webkit-font-smoothing: antialiased;
  }
  a { color: var(--accent); }
  :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
  .wrap { max-width: 780px; margin: 0 auto; padding: 0 16px; }

  .nav { border-bottom: 1px solid var(--rule); position: sticky; top: 0; z-index: 10;
    background: rgba(22,32,46,.9); backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px); }
  .nav-in { display: flex; align-items: center; gap: 16px; height: 64px; }
  .brand { display: flex; align-items: center; gap: 10px; text-decoration: none; color: inherit; }
  .brand img { width: 32px; height: 32px; border-radius: 8px; }
  .brand .mark { font-family: var(--serif); font-size: 23px; font-weight: 600; line-height: 1; letter-spacing: -.02em; }
  .brand .mark em { color: var(--accent); font-style: normal; }
  .nav .back { margin-left: auto; font-size: 14px; color: var(--ink-2); text-decoration: none; }
  .nav .back:hover { color: var(--accent); }

  header.page { padding: 52px 0 26px; }
  header.page h1 { font-family: var(--serif); font-size: clamp(30px, 6vw, 44px); font-weight: 600;
    letter-spacing: -.02em; margin: 0 0 14px; line-height: 1.1; }
  header.page p { margin: 0; color: var(--ink-2); }

  .tabs { display: flex; flex-wrap: wrap; gap: 8px; padding: 22px 0 0;
    position: sticky; top: 64px; background: var(--paper); z-index: 5;
    padding-bottom: 18px; border-bottom: 1px solid var(--rule); }
  .tabs a {
    font-size: 13.5px; text-decoration: none; color: var(--ink-2);
    border: 1px solid var(--rule-strong); border-radius: 999px; padding: 7px 15px;
  }
  .tabs a:hover { background: var(--surface-2); color: var(--ink); border-color: var(--accent-edge); }

  article { padding: 44px 0; border-bottom: 1px solid var(--rule); scroll-margin-top: 130px; }
  article:last-of-type { border-bottom: 0; }
  article > h1 {
    font-family: var(--serif); font-size: clamp(25px, 4.4vw, 33px); font-weight: 600;
    letter-spacing: -.02em; margin: 0 0 20px; line-height: 1.15;
  }
  article h2 {
    font-family: var(--serif); font-size: 20px; font-weight: 600; letter-spacing: -.015em;
    margin: 32px 0 10px; color: var(--ink);
  }
  article p { margin: 0 0 14px; color: var(--ink-2); }
  article ul { margin: 0 0 16px; padding-left: 20px; color: var(--ink-2); }
  article li { margin-bottom: 8px; }
  article li::marker { color: var(--accent); }
  article strong { color: var(--ink); font-weight: 600; }

  footer { border-top: 1px solid var(--rule); padding: 32px 0 calc(40px + env(safe-area-inset-bottom));
    font-size: 13.5px; color: var(--muted); display: flex; flex-wrap: wrap; gap: 8px 20px; }
  footer a { color: var(--ink-2); text-decoration: none; }
  footer a:hover { color: var(--accent); }
</style>
</head>
<body>

<nav class="nav">
  <div class="wrap nav-in">
    <a class="brand" href="/" aria-label="Hangr Consultant home">
      <img src="assets/hangr-icon.png" alt="" width="32" height="32">
      <span class="mark">Hangr<em>.</em></span>
    </a>
    <a class="back" href="/">&larr; Back to hangr.au</a>
  </div>
</nav>

<main class="wrap">
  <header class="page">
    <h1>Privacy, terms and your data</h1>
    <p>
      The same three documents you'll find inside the app, here so you can read them
      before you sign up.
    </p>
  </header>

  <nav class="tabs" aria-label="Documents">
    __TABS__
  </nav>

__ARTICLES__
</main>

<footer class="wrap">
  <span>&copy; __YEAR__ Hangr Consultant</span>
  <a href="/">hangr.au</a>
  <a href="mailto:david@hudsongroup.com.au">david@hudsongroup.com.au</a>
</footer>

</body>
</html>
'''


def main():
    src = open(APP, encoding='utf-8').read()
    docs = extract_docs(src)

    tabs = '\n    '.join(
        '<a href="#{k}">{label}</a>'.format(k=d['key'], label=html.escape(d['label']))
        for d in docs
    )
    articles = '\n\n'.join(
        '  <article id="{k}">\n    <h1>{title}</h1>\n      {body}\n  </article>'.format(
            k=d['key'], title=html.escape(d['title']), body=markdown(d['body'])
        )
        for d in docs
    )

    page = (PAGE
            .replace('__TABS__', tabs)
            .replace('__ARTICLES__', articles)
            .replace('__YEAR__', '2026'))
    open(OUT, 'w', encoding='utf-8').write(page)
    print('Wrote {} from {} documents: {}'.format(
        os.path.relpath(OUT, ROOT), len(docs), ', '.join(d['key'] for d in docs)))


if __name__ == '__main__':
    main()
