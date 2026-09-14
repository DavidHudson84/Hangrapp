// state — the business blob, filtered on the way out and merged on the way in.
//
// Until this existed, index.html read and wrote public.businesses directly, and
// RLS let any member of the business do both. The role system hid sections in the
// UI and kept them out of the consultant's prompt, but every staff login still
// *downloaded* the claims register, the HR letters, the bills and the staff notes,
// and could still write the whole row back over the top. Hiding a screen is not
// access control when devtools is one keystroke away.
//
// So the browser no longer touches the table at all. This holds the service role
// key and is the only reader and the only writer:
//
//   load — returns only what the caller's role may see.
//   save — merges the request into the stored blob key by key. A section the
//          caller may not write is taken from the stored copy, never from the
//          request, so a staff login posting a whole blob changes nothing it
//          could not already change through the screens.
//
// THE INVARIANT. For every key filtered per item rather than per key — chats,
// letters, problems — the `owns` predicate used by the merge must match the read
// filter exactly. The merge treats "the caller owns it and did not send it back"
// as a deletion, so a filter that hides an item the merge thinks they own would
// delete that item the first time they saved. Read filter and owns predicate are
// written next to each other below for that reason. Change them together.
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

// A blob with every chat and letter the business has ever produced is big, but it
// is one row and it is the app's whole state. This is a guard against something
// pathological rather than a budget anybody should reach.
const MAX_BLOB = 12_000_000;

// The same capability map index.html uses, minus the ones that only decide what a
// screen looks like. This is the copy that matters: the browser's is a suggestion.
const ROLE_CAPS: Record<string, string[]> = {
  owner: ['chats.all', 'letters.all', 'claims', 'priceLists', 'documents', 'knowledge.edit',
          'staffRecords', 'financials', 'settings', 'training.manage', 'training.signoff'],
  admin: ['chats.all', 'letters.all', 'claims', 'priceLists', 'documents', 'knowledge.edit',
          'staffRecords', 'financials', 'settings', 'training.manage', 'training.signoff'],
  manager: ['chats.all', 'letters.all', 'claims', 'priceLists', 'documents', 'training.signoff'],
  staff: ['priceLists', 'documents'],
};

const can = (role: string, cap: string) => (ROLE_CAPS[role] ?? ROLE_CAPS.staff).includes(cap);

// Letters about a person rather than to a customer. They follow staffRecords, not
// letters.own — a warning letter is not the subject's to read early because they
// happen to be the login that drafted it.
const HR_LETTERS = new Set([
  'first-warning', 'final-warning', 'show-cause', 'conversion', 'hours-change', 'redundancy',
]);

// What a staff login may be answered from. A manual is no use to the owner in an
// office while the person at the machine cannot be told what the fault code means;
// a lease and an insurance policy are another matter.
const DOC_STAFF_SAFE = new Set(['Equipment manual', 'SOP / procedure']);

const arr = (v: unknown): Record<string, unknown>[] => (Array.isArray(v) ? v : []);
const obj = (v: unknown): Record<string, unknown> =>
  v && typeof v === 'object' && !Array.isArray(v) ? (v as Record<string, unknown>) : {};

const idOf = (x: Record<string, unknown>) => String(x?.id ?? '');

// ---------------------------------------------------------------------------
// Read filters. Each is paired with the `owns` predicate the merge uses.
// ---------------------------------------------------------------------------

const ownedBy = (uid: string) => (x: Record<string, unknown>) =>
  x && x.createdBy ? x.createdBy === uid : false;

// A letter with no createdBy pre-dates the field, so it stays hidden from staff
// rather than becoming newly visible.
const ownsLetter = (uid: string) => (l: Record<string, unknown>) =>
  ownedBy(uid)(l) && !HR_LETTERS.has(String(l?.type ?? ''));

const docVisible = (d: Record<string, unknown>, role: string) => {
  if (!d) return false;
  if (role !== 'staff') return true;
  if (d.staffVisible === false) return false;
  return DOC_STAFF_SAFE.has(String(d.type ?? ''));
};

// The roster without the employment file. Training needs to know who someone is
// and which login is theirs; it does not need their award classification or the
// note about two prior verbal discussions on lateness.
const STAFF_SAFE_FIELDS = ['id', 'name', 'userId', 'startDate'];
const redactStaff = (s: Record<string, unknown>) => {
  const out: Record<string, unknown> = {};
  for (const f of STAFF_SAFE_FIELDS) if (f in s) out[f] = s[f];
  return out;
};

// ownerPin locks the staff-preview toggle, so it must not travel to the logins
// that preview is imitating. Everything else on the profile is letterhead.
const redactProfile = (p: Record<string, unknown>, role: string) => {
  if (can(role, 'settings')) return p;
  const out = { ...p };
  delete out.ownerPin;
  return out;
};

function forRole(stored: Record<string, unknown>, role: string, uid: string) {
  const mine = ownedBy(uid);
  const myLetter = ownsLetter(uid);

  const chats = arr(stored.chats);
  const problems = arr(stored.problems);
  const letters = arr(stored.letters);

  return {
    profile: redactProfile(obj(stored.profile), role),
    onboardingComplete: stored.onboardingComplete === true,

    chats: can(role, 'chats.all') ? chats : chats.filter(mine),
    activeChatId: stored.activeChatId ?? null,

    bills: can(role, 'financials') ? arr(stored.bills) : [],
    claims: can(role, 'claims') ? arr(stored.claims) : [],
    // Problems follow claims, not a cap of their own: a counter report becomes a
    // claim, and whoever may see the register may see what fed it.
    problems: can(role, 'claims') ? problems : problems.filter(mine),
    letters: can(role, 'letters.all') ? letters : letters.filter(myLetter),

    staff: can(role, 'staffRecords') ? arr(stored.staff) : arr(stored.staff).map(redactStaff),

    // Everyone's, on purpose. Training is the staff member's own record, and a
    // course the person on the counter cannot open trains nobody. Sign-offs are
    // shown alongside the attempts they complete, so they travel with them.
    training: arr(stored.training),
    signoffs: arr(stored.signoffs),
    // Which one-time notices have been dismissed. Shared, and only ever added to.
    seenNotices: arr(stored.seenNotices),
    customCourses: arr(stored.customCourses),
    hiddenCourses: arr(stored.hiddenCourses),
    courseRules: obj(stored.courseRules),

    documents: can(role, 'documents')
      ? arr(stored.documents).filter((d) => docVisible(d, role))
      : [],
    priceLists: can(role, 'priceLists') ? arr(stored.priceLists) : [],

    staffMode: stored.staffMode === true,
    staffSessionStart: stored.staffSessionStart ?? 0,
  };
}

// ---------------------------------------------------------------------------
// The merge.
// ---------------------------------------------------------------------------

// Items the caller does not own are carried across untouched — they were never
// sent, so the request says nothing about them. Among the ones they do own, the
// request is authoritative: edited entries replace, absent entries are deletions,
// new entries are appended. Stored order is preserved so a save does not reshuffle
// somebody else's sidebar.
function mergeOwned(
  storedArr: Record<string, unknown>[],
  incomingArr: Record<string, unknown>[],
  owns: (x: Record<string, unknown>) => boolean,
) {
  const incomingById = new Map<string, Record<string, unknown>>();
  for (const item of incomingArr) if (owns(item) && idOf(item)) incomingById.set(idOf(item), item);

  const out: Record<string, unknown>[] = [];
  const seen = new Set<string>();

  for (const item of storedArr) {
    if (!owns(item)) { out.push(item); continue; }
    const updated = incomingById.get(idOf(item));
    if (updated) { out.push(updated); seen.add(idOf(item)); }
    // Owned by the caller and not in the request: they deleted it.
  }
  for (const [id, item] of incomingById) if (!seen.has(id)) out.push(item);

  return out;
}

// Training attempts and practical sign-offs are append-only by design. Neither is
// edited once written, so a union by id is safe and order-blind, and they are the
// keys several people write in the same afternoon — the counter iPad and the back
// office both. Doing the union here rather than in the browser closes the
// read-then-write race the old client-side merge could only narrow.
//
// It is also why a sign-off is its own record rather than a field on the attempt
// it completes: a union keeps whichever copy of an id was written last, so editing
// an existing attempt in one place would be quietly undone by another device's
// untouched copy of that same id.
function mergeAppendOnly(
  storedArr: Record<string, unknown>[],
  incomingArr: Record<string, unknown>[],
) {
  const byId = new Map<string, Record<string, unknown>>();
  for (const r of storedArr.concat(incomingArr)) if (r && idOf(r)) byId.set(idOf(r), r);
  const when = (r: Record<string, unknown>) => Number(r.completedAt ?? r.at ?? 0);
  return Array.from(byId.values()).sort((a, b) => when(b) - when(a));
}

// Dismissed notices are ids, not records, and are only ever added to. A union
// means one login cannot un-dismiss a notice for everybody else.
function mergeNotices(storedArr: unknown[], incomingArr: unknown[]) {
  return Array.from(new Set(storedArr.concat(incomingArr).map(String)));
}

function mergeBlob(
  stored: Record<string, unknown>,
  incoming: Record<string, unknown>,
  role: string,
  uid: string,
) {
  const next: Record<string, unknown> = { ...stored };
  const whole = (key: string, cap: string) => {
    if (can(role, cap) && key in incoming) next[key] = incoming[key];
  };

  // Whole-key sections: either the role may write them or the stored copy stands.
  whole('profile', 'settings');
  whole('onboardingComplete', 'settings');
  whole('bills', 'financials');
  whole('claims', 'claims');
  whole('staff', 'staffRecords');
  whole('customCourses', 'training.manage');
  whole('hiddenCourses', 'training.manage');
  whole('courseRules', 'training.manage');
  whole('documents', 'knowledge.edit');
  whole('priceLists', 'knowledge.edit');
  whole('staffMode', 'settings');
  whole('staffSessionStart', 'settings');

  // A pointer at a chat, not data. Harmless to accept from anyone, and refusing it
  // would leave the sidebar selection stuck for the roles that cannot write.
  if ('activeChatId' in incoming) next.activeChatId = incoming.activeChatId;

  // Per-item sections. The predicates here mirror forRole above — see THE
  // INVARIANT at the top of this file before changing either.
  const mine = ownedBy(uid);
  next.chats = can(role, 'chats.all')
    ? (Array.isArray(incoming.chats) ? incoming.chats : stored.chats ?? [])
    : mergeOwned(arr(stored.chats), arr(incoming.chats), mine);

  next.problems = can(role, 'claims')
    ? (Array.isArray(incoming.problems) ? incoming.problems : stored.problems ?? [])
    : mergeOwned(arr(stored.problems), arr(incoming.problems), mine);

  next.letters = can(role, 'letters.all')
    ? (Array.isArray(incoming.letters) ? incoming.letters : stored.letters ?? [])
    : mergeOwned(arr(stored.letters), arr(incoming.letters), ownsLetter(uid));

  next.training = mergeAppendOnly(arr(stored.training), arr(incoming.training));

  // Anyone may record their own attempt; only a supervisor may sign a practical
  // off, and the browser already refuses to let most people sign off their own.
  // A login without the capability has its sign-offs ignored rather than merged.
  next.signoffs = can(role, 'training.signoff')
    ? mergeAppendOnly(arr(stored.signoffs), arr(incoming.signoffs))
    : (stored.signoffs ?? []);

  next.seenNotices = mergeNotices(
    Array.isArray(stored.seenNotices) ? stored.seenNotices : [],
    Array.isArray(incoming.seenNotices) ? incoming.seenNotices : [],
  );

  return next;
}

// ---------------------------------------------------------------------------

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: cors });
  if (req.method !== 'POST') return json({ error: 'POST only' }, 405);

  const auth = req.headers.get('Authorization') ?? '';
  if (!auth.startsWith('Bearer ')) return json({ error: 'Sign in first.' }, 401);

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

  // The membership row is the authority on the role, never the request body.
  const { data: mem } = await admin
    .from('memberships')
    .select('business_id, role')
    .eq('user_id', me.id)
    .limit(1)
    .maybeSingle();

  if (!mem) return json({ error: 'This login is not attached to a business.', code: 'no_business' }, 403);

  const businessId = mem.business_id as string;
  const role = String(mem.role ?? 'staff');

  let payload: Record<string, unknown>;
  try {
    payload = await req.json();
  } catch {
    return json({ error: 'Bad request.' }, 400);
  }
  const action = String(payload.action ?? '');

  if (action === 'load') {
    const { data: biz, error } = await admin
      .from('businesses')
      .select('data')
      .eq('id', businessId)
      .single();
    if (error) {
      console.error('load failed', error.message);
      return json({ error: 'Your business could not be loaded.' }, 500);
    }
    return json({
      ok: true,
      role,
      userId: me.id,
      businessId,
      blob: forRole(obj(biz?.data), role, me.id),
    });
  }

  if (action === 'save') {
    const incoming = payload.blob;
    if (!incoming || typeof incoming !== 'object' || Array.isArray(incoming)) {
      return json({ error: 'Nothing to save.' }, 400);
    }
    if (JSON.stringify(incoming).length > MAX_BLOB) {
      return json({ error: 'That is too large to save.' }, 413);
    }

    // Read, merge, write. Two people saving in the same second can still have the
    // second overwrite the first for a whole-key section — the same last-write-wins
    // this has always had, now narrowed to one round trip inside the function
    // instead of a round trip to the browser and back.
    const { data: biz, error: readErr } = await admin
      .from('businesses')
      .select('data')
      .eq('id', businessId)
      .single();
    if (readErr) {
      console.error('save read failed', readErr.message);
      return json({ error: 'That could not be saved.' }, 500);
    }

    const stored = obj(biz?.data);
    const next = mergeBlob(stored, incoming as Record<string, unknown>, role, me.id);

    const patch: Record<string, unknown> = { data: next };
    // The row's own name column follows the profile, so only a role that may write
    // the profile may rename the business.
    if (can(role, 'settings')) {
      const name = obj(next.profile).businessName;
      patch.name = typeof name === 'string' && name.trim() ? name.trim().slice(0, 200) : null;
    }

    const { error: writeErr } = await admin.from('businesses').update(patch).eq('id', businessId);
    if (writeErr) {
      console.error('save write failed', writeErr.message);
      return json({ error: 'That could not be saved.' }, 500);
    }

    // Handed back so the browser picks up completions other people recorded while
    // it was away, which is what the old client-side merge did before this moved.
    return json({ ok: true, training: next.training ?? [] });
  }

  return json({ error: 'Unknown action.' }, 400);
});
