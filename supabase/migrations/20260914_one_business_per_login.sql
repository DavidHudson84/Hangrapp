-- One person, one business — enforced, not just documented.
--
-- docs/USERS.md has claimed this rule since the roster existed, and manage-access
-- refuses an email that already has a login. Neither was the thing that could
-- actually go wrong: the second membership was never created by an owner adding
-- somebody twice, it was created by handle_new_user() firing on the admin
-- createUser call and quietly handing the new staff member a business of their
-- own. Two memberships, no error anywhere, and a first sign-in that landed in
-- onboarding for the empty one.
--
-- A unique index would have turned that into a loud failure on day one instead of
-- a puzzle three logins later. It is cheap, it matches the rule the app has always
-- assumed — loadCloud and the state function both read one membership — and it
-- means any future path that tries to put somebody in two businesses fails at the
-- database rather than succeeding silently.
--
-- ORDER. This is only safe once manage-access sets app_metadata.invited and the
-- companion migration teaches handle_new_user() to honour it. Applied before
-- either, every attempt to add a staff member would fail on the second insert.
-- Existing duplicates must also be cleared first, or the index cannot be built.

alter table public.memberships
  add constraint memberships_one_business_per_user unique (user_id);
