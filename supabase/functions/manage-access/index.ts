// manage-access — the owner's roster: who can sign in, and as what.
//
// This holds the service role key, which is why it exists at all. Two things are
// impossible from the browser under any RLS policy:
//
//   * reading an email address. They live in auth.users, which is not exposed to
//     the anon key. Without this the roster could show user ids and nothing else.
//   * creating a login. auth.admin.createUser is a service-role call.
//
// Every rule about who may do what lives here rather than in index.html, for the
// same reason send-letter owns the decision about who a letter may be sent to:
// the browser copy of a rule is a suggestion, and this one hands out access.
//
// Secrets: SUPABASE_URL, SUPABASE_ANON_KEY, SUPABASE_SERVICE_ROLE_KEY (all
// provided by the platform), ALLOWED_ORIGIN, and — for the handover email —
// RESEND_API_KEY and EMAIL_FROM. Those last two are not separate copies: edge
// function secrets belong to the project, so these are the same values
// send-letter sends with and are already set wherever it works. Where they are
// absent the roster behaves exactly as before and the app offers the
// copy-and-paste message instead. See docs/USERS.md.

import { createClient } from 'jsr:@supabase/supabase-js@2';

// Read the same way send-letter reads them: a value pasted into the dashboard
// often arrives wrapped in the quotes it was copied inside, or with a trailing
// newline. Both read as "set" and then fail somewhere far less obvious.
const secret = (name: string) =>
  (Deno.env.get(name) ?? '')
    .trim()
    .replace(/^(['"])(.*)\1$/s, '$2')
    .trim();

const RESEND_API_KEY = secret('RESEND_API_KEY');
const EMAIL_FROM = secret('EMAIL_FROM');
// Emailing the handover is optional. Everything else here works without it.
const EMAIL_READY = !!(RESEND_API_KEY && EMAIL_FROM);

const cors = {
  'Access-Control-Allow-Origin': Deno.env.get('ALLOWED_ORIGIN') ?? '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...cors, 'content-type': 'application/json' },
  });

// Owner is not in this list on purpose. It is the account that signed the
// business up, there is exactly one, and it is the only role that can hand out
// access — so a second one cannot be created here and the first cannot be
// demoted. That keeps "who owns this business" a question with one answer, and
// removes any path to locking the real owner out of their own data.
const ASSIGNABLE = ['admin', 'manager', 'staff'];

const MIN_PASSWORD = 10;
// Nothing to do with password strength. The temporary password is the one piece
// of the emailed body the caller writes, so it is the one place free text could
// be smuggled into a message that is otherwise a fixed template. Anything near
// this length is not a password anybody is going to read out anyway.
const MAX_PASSWORD = 200;

const isEmail = (s: unknown) =>
  typeof s === 'string' &&
  s.length < 254 &&
  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(s.trim());

const asEmail = (s: unknown) => (isEmail(s) ? String(s).trim().toLowerCase() : '');

// A newline in a subject line lets a caller append headers of its own. Strip
// control characters here rather than trusting the mail API to.
const clean = (s: unknown, max = 120) =>
  String(s ?? '')
    .replace(/[\u0000-\u001f]+/g, ' ')
    .trim()
    .slice(0, max);

// Where the person is told to sign in. ALLOWED_ORIGIN is the app's own address
// and was set by whoever deployed this, so it is the answer worth trusting; the
// browser's is a fallback for a deployment that left it at `*`, and only over
// https. A sign-in link chosen by the caller, in an email that hands over a
// password, is precisely the thing to be fussy about.
function signInUrl(fromCaller: unknown): string {
  const allowed = (Deno.env.get('ALLOWED_ORIGIN') ?? '').trim().replace(/^(['"])(.*)\1$/s, '$2');
  if (/^https:\/\/[^\s*,]+$/.test(allowed)) return allowed.replace(/\/+$/, '');
  const given = clean(fromCaller, 300);
  if (/^https:\/\/[^\s*,]+$/.test(given)) return given.replace(/\/+$/, '');
  return '';
}

type Invite = {
  to: string;
  email: string;
  password: string;
  name: string;
  business: string;
  url: string;
  replyTo: string;
};

// The message. Built here from a fixed template: the caller contributes two
// names and nothing else. A function that holds a send key and will email a
// body of the caller's choosing is a relay, and this one hands over a password.
//
// index.html builds its own copy of this for the owner to paste into WhatsApp
// (`inviteMessage()`). The two say the same thing in the same order on purpose —
// change them together.
function inviteBody(o: Invite): string {
  // First name only. "Hi Jane Smith," is how a mail merge opens, not a person.
  const first = o.name.trim().split(/\s+/)[0];
  return [
    first ? `Hi ${first},` : 'Hi,',
    '',
    `You have been set up with a login for Hangr, which is what ${o.business} uses day to day.`,
    '',
    o.url ? `Sign in at: ${o.url}` : 'Sign in at the address you have been given.',
    `Your email: ${o.email}`,
    `Temporary password: ${o.password}`,
    '',
    'It will ask you to choose your own password the first time you sign in, and the temporary one above stops working the moment you do.',
    '',
    o.replyTo
      ? `If you have any trouble getting in, reply to ${o.replyTo}.`
      : 'This was sent from an address that is not monitored — replies to it are not received.',
  ].join('\n');
}

// Never throws and never fails the caller. The login is the thing that matters;
// an email that did not go out is a message on screen, not a reason to leave the
// owner unsure whether the person was created.
async function sendInvite(o: Invite): Promise<{ ok: boolean; error?: string; code?: string }> {
  if (!EMAIL_READY) {
    return {
      ok: false,
      code: 'not_configured',
      error:
        'Emailing the handover is not switched on — RESEND_API_KEY and EMAIL_FROM need adding to this project\u2019s Edge Function secrets in Supabase.',
    };
  }
  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'content-type': 'application/json' },
      body: JSON.stringify({
        from: EMAIL_FROM,
        to: [o.to],
        subject: `Your login for ${o.business}`,
        text: inviteBody(o),
        ...(o.replyTo ? { reply_to: o.replyTo } : {}),
      }),
    });
    if (!res.ok) {
      // Resend's own errors can name the sending domain and the state of the
      // key. Neither is the owner's problem, and neither belongs on their screen.
      console.error('resend failed', res.status, await res.text().catch(() => ''));
      return { ok: false, error: 'The email could not be sent — hand the password over directly instead.' };
    }
    return { ok: true };
  } catch (e) {
    console.error('resend unreachable', String(e));
    return { ok: false, error: 'The email could not be sent — hand the password over directly instead.' };
  }
}

// The caller's half of an invite: who it goes to, and the two names that appear
// in it. `sendTo` covers the common case that the person has no work inbox and
// reads their personal one — one address, and only ever one.
function inviteFrom(payload: Record<string, unknown>, email: string, password: string): Invite {
  return {
    to: asEmail(payload.sendTo) || email,
    email,
    password: clean(password, MAX_PASSWORD),
    name: clean(payload.name, 80),
    business: clean(payload.businessName, 80) || 'your workplace',
    url: signInUrl(payload.appUrl),
    replyTo: asEmail(payload.replyTo),
  };
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: cors });
  if (req.method !== 'POST') return json({ error: 'POST only' }, 405);

  const auth = req.headers.get('Authorization') ?? '';
  if (!auth.startsWith('Bearer ')) return json({ error: 'Sign in first.' }, 401);

  // Two clients, deliberately. `caller` runs as whoever is signed in and is used
  // only to find out who that is. `admin` bypasses RLS and does the work, but is
  // never reached until the checks below have passed.
  const caller = createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_ANON_KEY')!,
    { global: { headers: { Authorization: auth } } },
  );
  const admin = createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
  );

  const { data: userData, error: userErr } = await caller.auth.getUser();
  const me = userData?.user;
  if (userErr || !me) return json({ error: 'Sign in first.' }, 401);

  // The membership row decides, never the request body. Read it with the admin
  // client so the answer does not depend on the read policy of the day.
  const { data: mine } = await admin
    .from('memberships')
    .select('business_id, role')
    .eq('user_id', me.id)
    .limit(1)
    .maybeSingle();

  if (!mine) return json({ error: 'This login is not attached to a business.' }, 403);
  if (mine.role !== 'owner') {
    return json(
      { error: 'Only the owner can manage who has access.', code: 'not_owner' },
      403,
    );
  }
  const businessId = mine.business_id as string;

  let payload: Record<string, unknown>;
  try {
    payload = await req.json();
  } catch {
    return json({ error: 'Bad request.' }, 400);
  }
  const action = String(payload.action ?? '');

  // ---- capabilities ---------------------------------------------------------
  // Whether this function can email, so the screen offers the tickbox only when
  // it would work. Asked rather than copied into index.html, so adding the two
  // secrets takes effect without a redeploy of the app.
  if (action === 'capabilities') {
    return json({ ok: true, email: EMAIL_READY });
  }

  // ---- list -----------------------------------------------------------------
  if (action === 'list') {
    const { data: rows, error } = await admin
      .from('memberships')
      .select('user_id, role, created_at')
      .eq('business_id', businessId)
      .order('created_at');
    if (error) return json({ error: 'Could not read the list.' }, 500);

    // No join from memberships to auth.users is available through PostgREST, so
    // the addresses are fetched one page at a time and matched up here.
    const { data: page } = await admin.auth.admin.listUsers({ page: 1, perPage: 1000 });
    const emailById = new Map((page?.users ?? []).map((u) => [u.id, u.email ?? '']));

    const users = (rows ?? []).map((r) => ({
      userId: r.user_id,
      email: emailById.get(r.user_id) ?? '(unknown)',
      role: r.role,
      addedAt: r.created_at,
      isYou: r.user_id === me.id,
    }));
    return json({ ok: true, users });
  }

  // ---- create ---------------------------------------------------------------
  if (action === 'create') {
    const email = String(payload.email ?? '').trim().toLowerCase();
    const password = String(payload.password ?? '');
    const role = String(payload.role ?? '');

    if (!isEmail(email)) return json({ error: 'Enter a valid email address.' }, 400);
    if (!ASSIGNABLE.includes(role)) return json({ error: 'Pick a role.' }, 400);
    if (password.length < MIN_PASSWORD) {
      return json({ error: `The password needs at least ${MIN_PASSWORD} characters.` }, 400);
    }
    if (password.length > MAX_PASSWORD) {
      return json({ error: `The password cannot be longer than ${MAX_PASSWORD} characters.` }, 400);
    }

    // email_confirm: they cannot click a confirmation link in an inbox they may
    // not have. The owner is standing in front of them handing over the
    // password, which is the confirmation.
    //
    // must_change_password is read by index.html on sign-in. The owner knows this
    // password — it is a handover, not a secret — so it has to stop being the
    // password before the person does any real work under their own name.
    const { data: created, error: createErr } = await admin.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
      user_metadata: { must_change_password: true },
    });

    if (createErr || !created?.user) {
      const msg = String(createErr?.message ?? '');
      // A person can only belong to one business: the app reads a single
      // membership at sign-in, so a second one would silently decide which
      // business they land in. Better to refuse than to guess.
      if (/already/i.test(msg) || /registered/i.test(msg)) {
        return json(
          {
            error: 'That email already has a Hangr login and cannot be added to a second business.',
            code: 'email_taken',
          },
          409,
        );
      }
      console.error('createUser failed', msg);
      return json({ error: 'That login could not be created.' }, 500);
    }

    // handle_new_user() fires on every insert into auth.users and gives the new
    // row a business of its own with an owner membership. Creating a login is
    // such an insert, so by the time we get here that has already happened, and
    // a plain insert would be a second membership — which the unique index on
    // memberships.user_id correctly refuses.
    //
    // There is no way to tell the trigger not to: app_metadata set here is
    // written by GoTrue after the row exists, so the trigger never sees it. So
    // this absorbs the trigger's work instead of fighting it. attach_invited_user
    // repoints that membership at the real business and deletes the empty one it
    // came from, or inserts from scratch if there was nothing to repoint.
    const { error: memErr } = await admin.rpc('attach_invited_user', {
      p_user: created.user.id,
      p_business: businessId,
      p_role: role,
    });

    if (memErr) {
      // The login exists but is on the wrong business or none at all, which would
      // leave an account that signs in to somebody else's empty shell. Undo it.
      await admin.auth.admin.deleteUser(created.user.id).catch(() => {});
      console.error('attach_invited_user failed', memErr.message);
      return json({ error: 'That login could not be created.' }, 500);
    }

    // The email is a convenience laid on top of a login that already exists, so
    // it is not allowed to fail the create: an owner told "that did not work"
    // about a person who was in fact created adds them a second time and gets an
    // email_taken refusal for their trouble.
    let emailed = false;
    let emailError = '';
    let sentTo = '';
    if (payload.sendInvite === true) {
      const invite = inviteFrom(payload, email, password);
      const sent = await sendInvite(invite);
      emailed = sent.ok;
      if (sent.ok) sentTo = invite.to;
      else emailError = sent.error ?? '';
    }

    return json({ ok: true, userId: created.user.id, email, role, emailed, emailError, sentTo });
  }

  // ---- send_invite ----------------------------------------------------------
  // Sending the handover for a login that was just created — the owner forgot to
  // tick the box, or sent it to the wrong address. The password is stored
  // nowhere, here or in the database, so the browser has to hand back the one it
  // still holds in memory from the create. Once that card is dismissed there is
  // nothing left to send, which is the whole point of not storing it.
  if (action === 'send_invite') {
    const userId = String(payload.userId ?? '');
    const password = String(payload.password ?? '');
    if (password.length < MIN_PASSWORD || password.length > MAX_PASSWORD) {
      return json({ error: 'There is no password left to send. Remove the person and add them again.' }, 400);
    }

    const { data: target } = await admin
      .from('memberships')
      .select('role')
      .eq('user_id', userId)
      .eq('business_id', businessId)
      .maybeSingle();

    if (!target) return json({ error: 'That person is not on this business.' }, 404);

    // The address on the login, read from auth rather than taken from the body:
    // it is what the person actually signs in with, and telling them anything
    // else would be telling them a password that does not open anything.
    const { data: got } = await admin.auth.admin.getUserById(userId);
    const loginEmail = asEmail(got?.user?.email);
    if (!loginEmail) return json({ error: 'That login has no email address.' }, 400);

    const invite = inviteFrom(payload, loginEmail, password);
    const sent = await sendInvite(invite);
    if (!sent.ok) {
      return json(
        { error: sent.error, code: sent.code },
        sent.code === 'not_configured' ? 503 : 502,
      );
    }
    return json({ ok: true, sentTo: invite.to });
  }

  // ---- set_role -------------------------------------------------------------
  if (action === 'set_role') {
    const userId = String(payload.userId ?? '');
    const role = String(payload.role ?? '');

    if (!ASSIGNABLE.includes(role)) return json({ error: 'Pick a role.' }, 400);
    if (userId === me.id) {
      return json({ error: 'You cannot change your own role.', code: 'self' }, 400);
    }

    const { data: target } = await admin
      .from('memberships')
      .select('role')
      .eq('user_id', userId)
      .eq('business_id', businessId)
      .maybeSingle();

    if (!target) return json({ error: 'That person is not on this business.' }, 404);
    if (target.role === 'owner') {
      return json({ error: 'The owner’s role cannot be changed.', code: 'owner_locked' }, 400);
    }

    const { error } = await admin
      .from('memberships')
      .update({ role })
      .eq('user_id', userId)
      .eq('business_id', businessId);

    if (error) return json({ error: 'That change could not be saved.' }, 500);
    return json({ ok: true, userId, role });
  }

  // ---- remove ---------------------------------------------------------------
  if (action === 'remove') {
    const userId = String(payload.userId ?? '');
    if (userId === me.id) {
      return json({ error: 'You cannot remove your own access.', code: 'self' }, 400);
    }

    const { data: target } = await admin
      .from('memberships')
      .select('role')
      .eq('user_id', userId)
      .eq('business_id', businessId)
      .maybeSingle();

    if (!target) return json({ error: 'That person is not on this business.' }, 404);
    if (target.role === 'owner') {
      return json({ error: 'The owner cannot be removed.', code: 'owner_locked' }, 400);
    }

    const { error } = await admin
      .from('memberships')
      .delete()
      .eq('user_id', userId)
      .eq('business_id', businessId);

    if (error) return json({ error: 'That change could not be saved.' }, 500);

    // The membership is what grants access, so it is the thing that has to go.
    // The login itself is deleted too, rather than left as an orphan that can
    // still sign in and reach an empty app.
    await admin.auth.admin.deleteUser(userId).catch(() => {});

    return json({ ok: true, userId });
  }

  return json({ error: 'Unknown action.' }, 400);
});
