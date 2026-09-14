-- Stop an invited staff login from creating a business of its own.
--
-- handle_new_user() fires on every insert into auth.users and creates a business
-- with that user as its owner. That is right for somebody signing up, and wrong
-- for every login the owner creates on the Users screen: manage-access calls
-- auth.admin.createUser, which is an insert into auth.users like any other, so
-- the trigger handed the new staff member a business of their own a fraction of a
-- second before manage-access added them to the real one.
--
-- They ended up with two memberships. `loadCloud` — and now the state function —
-- reads one membership with `limit 1` and no ordering, so Postgres was free to
-- return either, and it returned the empty business often enough that a new staff
-- member signing in for the first time landed in onboarding for a business that
-- should never have existed. Three logins on this project were in that state.
--
-- The marker lives in app_metadata, not user_metadata: app_metadata can only be
-- written by the service role, so a login cannot set it on itself at signup. The
-- worst a forged one could do is deny the forger a business, which is not an
-- escalation.
--
-- Ordering note. This migration is safe on its own: an older manage-access that
-- does not set the marker behaves exactly as it did before. The unique constraint
-- in the companion migration is NOT safe until manage-access is deployed with the
-- marker, or every attempt to add staff would fail on the second membership.

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path to ''
as $function$
declare biz_id uuid;
begin
  -- Invited by an owner for a business that already exists. manage-access inserts
  -- the real membership itself, moments from now.
  if coalesce(new.raw_app_meta_data->>'invited', 'false') = 'true' then
    return new;
  end if;

  insert into public.businesses (name)
    values (coalesce(new.raw_user_meta_data->>'business_name', 'My business'))
    returning id into biz_id;
  insert into public.memberships (user_id, business_id, role)
    values (new.id, biz_id, 'owner');
  return new;
end; $function$;
