-- Take the business blob away from the browser.
--
-- public.businesses.data is the entire app state — chats, letters, claims, the
-- price list, the staff records and the HR file. Two policies let any member of
-- the business read all of it and write all of it:
--
--   members_read_business    SELECT  using (caller is a member)
--   members_update_business  UPDATE  using (caller is a member)
--
-- The role system lived entirely above that line. It hid sections in the UI and
-- kept them out of the consultant's prompt, but a staff login still downloaded
-- the wage dispute along with everything else, and could still write the whole
-- row back over the top. docs/USERS.md described the write half of this as a
-- known gap; the read half was worse and undocumented.
--
-- Both policies go. What replaces them is the `state` edge function, which holds
-- the service role key and is now the only reader and the only writer: it filters
-- a load down to what the caller's role may see, and merges a save key by key so
-- that a section the caller may not write is taken from the stored copy rather
-- than from the request. See supabase/functions/state/index.ts.
--
-- Dropping every policy while RLS stays enabled is what denies access: a table
-- with RLS on and no policy matching is closed to anon and authenticated. The
-- service role bypasses RLS, which is how the function still gets in.
--
-- ORDER MATTERS. Applying this before the matching index.html is live breaks the
-- app for everyone signed in, because the old client reads the table directly.
-- Deploy in this order:
--
--   1. supabase functions deploy state --project-ref cntwhojxperdrrufpokl
--   2. publish index.html (merge to main; GitHub Pages does the rest)
--   3. this migration
--
-- Between 2 and 3 both paths work, which is the point — there is no moment where
-- a signed-in browser has no way to load.
--
-- Not touched: own_memberships_select on public.memberships. A login reading which
-- business it belongs to and in what role is not sensitive, it is already the
-- answer the function hands back, and send-letter reads the same row server-side.
--
-- businesses rows are still created by handle_new_user() on signup, which is
-- SECURITY DEFINER and so unaffected by any of this.

drop policy if exists members_update_business on public.businesses;
drop policy if exists members_read_business on public.businesses;

-- Belt and braces: make it impossible to re-open this by accident with a grant
-- rather than a policy. RLS is the gate, but a stray GRANT on the table would
-- otherwise be one policy away from undoing the whole thing.
revoke all on public.businesses from anon, authenticated;
