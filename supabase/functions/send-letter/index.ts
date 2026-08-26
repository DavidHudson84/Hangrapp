// send-letter — emails a letter or advice note through Resend.
//
// The Resend key lives in this function's environment and never reaches the
// browser (CLAUDE.md non-negotiable 3). The caller sends the letter body; this
// decides who it may be sent to, and who it appears to be from.
//
// Secrets: RESEND_API_KEY, EMAIL_FROM, ALLOW_CUSTOMER_SEND, ALLOWED_ORIGIN
// See docs/EMAIL.md.

import { createClient } from 'jsr:@supabase/supabase-js@2';

// A secret pasted into the dashboard often arrives with a stray newline, or
// wrapped in the quotes it was copied inside. Both read as "set" and then fail
// somewhere far less obvious, so tidy them here rather than at the far end.
const secret = (name: string) =>
  (Deno.env.get(name) ?? '')
    .trim()
    .replace(/^(['"])(.*)\1$/s, '$2')
    .trim();

const RESEND_API_KEY = secret('RESEND_API_KEY');
const EMAIL_FROM = secret('EMAIL_FROM');

// Sending a letter to a customer puts Hangr in the chain of a document that may
// end up in a dispute. Off until the terms and liability position are settled in
// writing (handover step 1, CLAUDE.md non-negotiable 9). Sending to yourself is
// unaffected — that is just a better "download".
const ALLOW_CUSTOMER_SEND =
  (Deno.env.get('ALLOW_CUSTOMER_SEND') ?? 'false').toLowerCase() === 'true';

const MAX_BODY = 200_000; // a letter, not an attachment dump
const MAX_RECIPIENTS = 5;
// A letter as a PDF runs to tens of kilobytes. This leaves room for a long one
// with scanned pages while staying far below what Resend will take, so a runaway
// caller cannot use this endpoint to push megabytes through the account.
const MAX_ATTACH_B64 = 6_000_000;
const MAX_ATTACHMENTS = 2;

const cors = {
  'Access-Control-Allow-Origin': Deno.env.get('ALLOWED_ORIGIN') ?? '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
};

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...cors, 'content-type': 'application/json' },
  });

const isEmail = (s: unknown) =>
  typeof s === 'string' &&
  s.length < 254 &&
  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(s.trim());

// Header injection: a newline in a subject lets a caller append headers of their
// own. Strip control characters here rather than trusting the upstream API to.
const clean = (s: unknown, max = 200) =>
  String(s ?? '')
    .replace(/[\u0000-\u001f]+/g, ' ')
    .trim()
    .slice(0, max);

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: cors });

  // What the app may offer, so the UI can grey out what would only fail. Two
  // booleans and nothing else — the app needs to know whether customer sending
  // is on, never anything about the key behind it. Asked rather than copied
  // into index.html, so flipping ALLOW_CUSTOMER_SEND still takes no redeploy.
  if (req.method === 'GET') {
    return json({ configured: !!(RESEND_API_KEY && EMAIL_FROM), customerSend: ALLOW_CUSTOMER_SEND });
  }

  if (req.method !== 'POST') return json({ error: 'POST or GET only' }, 405);
  // Naming the missing secret turns a dead end into an instruction. These are
  // names, never values — they are already written down in docs/EMAIL.md.
  const missing = [
    ...(RESEND_API_KEY ? [] : ['RESEND_API_KEY']),
    ...(EMAIL_FROM ? [] : ['EMAIL_FROM']),
  ];
  if (missing.length) {
    return json(
      {
        error: `Email is not configured yet — ${missing.join(' and ')} ${
          missing.length > 1 ? 'are' : 'is'
        } missing from the send-letter function's secrets in Supabase.`,
        code: 'not_configured',
        missing,
      },
      503,
    );
  }

  // Who is asking. An anonymous caller cannot send mail as this business.
  const auth = req.headers.get('Authorization') ?? '';
  if (!auth.startsWith('Bearer ')) return json({ error: 'Sign in to send email.' }, 401);

  const supabase = createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_ANON_KEY')!,
    { global: { headers: { Authorization: auth } } },
  );

  const { data: userData, error: userErr } = await supabase.auth.getUser();
  const user = userData?.user;
  // The anon key on its own yields no user, which is what stops this being an
  // open relay for anyone who reads that key out of the page source.
  if (userErr || !user) return json({ error: 'Sign in to send email.' }, 401);

  // The membership row is the authority on the role — never the request body.
  const { data: mem } = await supabase.from('memberships').select('role').limit(1).maybeSingle();
  const role = mem?.role ?? 'staff';

  let payload: Record<string, unknown>;
  try {
    payload = await req.json();
  } catch {
    return json({ error: 'Bad request.' }, 400);
  }

  const toSelf = payload.toSelf === true;
  const subject = clean(payload.subject, 200) || 'Letter from your dry cleaner';
  const body = String(payload.body ?? '');
  const html = String(payload.html ?? '');
  const replyTo = isEmail(payload.replyTo) ? String(payload.replyTo).trim() : undefined;

  if (!body && !html) return json({ error: 'Nothing to send.' }, 400);
  if (body.length + html.length > MAX_BODY) {
    return json({ error: 'That letter is too large to email.' }, 413);
  }

  // Attachments. The caller supplies base64 and a name; neither is trusted. A
  // name is stripped back to characters that cannot walk out of a directory or
  // disguise the type, and the content must actually be base64 rather than a
  // payload that only Resend will find out about.
  const rawAttachments = Array.isArray(payload.attachments) ? payload.attachments : [];
  if (rawAttachments.length > MAX_ATTACHMENTS) {
    return json({ error: `At most ${MAX_ATTACHMENTS} attachments.` }, 400);
  }
  let attachBytes = 0;
  const attachments: { filename: string; content: string }[] = [];
  for (const item of rawAttachments) {
    const content = typeof (item as Record<string, unknown>)?.content === 'string'
      ? String((item as Record<string, unknown>).content).replace(/\s+/g, '')
      : '';
    if (!content || !/^[A-Za-z0-9+/]+={0,2}$/.test(content)) {
      return json({ error: 'That attachment could not be read.' }, 400);
    }
    attachBytes += content.length;
    const stem = clean((item as Record<string, unknown>)?.filename, 120)
      .replace(/[^A-Za-z0-9 ._-]+/g, ' ')
      .replace(/\s+/g, ' ')
      .replace(/^[.\s]+/, '')
      .trim();
    // `stem` is empty when the name was nothing but punctuation or spaces.
    const base = stem || 'letter';
    attachments.push({ filename: base.toLowerCase().endsWith('.pdf') ? base : `${base}.pdf`, content });
  }
  if (attachBytes > MAX_ATTACH_B64) {
    return json({ error: 'That attachment is too large to email.' }, 413);
  }

  // Recipients. Sending to yourself ignores whatever the caller supplied.
  let to: string[];
  if (toSelf) {
    to = [user.email!];
  } else {
    if (!ALLOW_CUSTOMER_SEND) {
      return json(
        {
          error:
            'Sending to a customer is not switched on yet. You can email it to yourself and send it from your own address.',
          code: 'customer_send_disabled',
        },
        403,
      );
    }
    // Staff draft letters; they do not post them out under the business name.
    if (!['owner', 'admin', 'manager'].includes(role)) {
      return json(
        { error: 'This login can email a letter to itself, not to a customer.', code: 'role_forbidden' },
        403,
      );
    }
    const raw = Array.isArray(payload.to) ? payload.to : [payload.to];
    to = raw.filter(isEmail).map((e) => String(e).trim());
    if (!to.length) return json({ error: 'Enter a valid email address.' }, 400);
    if (to.length > MAX_RECIPIENTS) return json({ error: `At most ${MAX_RECIPIENTS} recipients.` }, 400);
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'content-type': 'application/json' },
    body: JSON.stringify({
      from: EMAIL_FROM,
      to,
      subject,
      ...(html ? { html } : { text: body }),
      ...(replyTo ? { reply_to: replyTo } : {}),
      ...(attachments.length ? { attachments } : {}),
    }),
  });

  const out = await res.json().catch(() => ({}));
  if (!res.ok) {
    console.error('resend failed', res.status, out);
    // Resend's own errors can name the sending domain and the key's state —
    // not the owner's problem, and not something to put on their screen.
    return json({ error: 'The email could not be sent. Try again shortly.' }, 502);
  }
  return json({ ok: true, id: out.id ?? null, to: to.length });
});
