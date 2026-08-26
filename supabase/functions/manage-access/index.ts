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
// provided by the platform), ALLOWED_ORIGIN. See docs/USERS.md.

import { createClient } from 'jsr:@supabase/supabase-js@2';

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

const isEmail = (s: unknown) =>
  typeof s === 'string' &&
  s.length < 254 &&
  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(s.trim());

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

    const { error: memErr } = await admin
      .from('memberships')
      .insert({ user_id: created.user.id, business_id: businessId, role });

    if (memErr) {
      // The login exists but belongs to no business, which would leave an
      // account that can sign in and see nothing. Undo it.
      await admin.auth.admin.deleteUser(created.user.id).catch(() => {});
      console.error('membership insert failed', memErr.message);
      return json({ error: 'That login could not be created.' }, 500);
    }

    return json({ ok: true, userId: created.user.id, email, role });
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
