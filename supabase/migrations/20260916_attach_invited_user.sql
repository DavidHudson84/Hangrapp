-- Put an invited login on the right business, whatever the signup trigger did.
--
-- The previous attempt at this had manage-access set `app_metadata.invited` and
-- taught handle_new_user() to skip those. It does not work: GoTrue writes
-- app_metadata after the row exists, so the AFTER INSERT trigger sees only
-- {"provider":"email","providers":["email"]} and creates the business anyway.
-- Every user on this project carries exactly that and nothing else, which is how
-- we know. With the unique index on memberships.user_id now in place, the second
-- insert from manage-access failed, the function deleted the half-made login, and
-- the owner got "That login could not be created." — three times, with three
-- orphaned businesses left behind to prove it.
--
-- So stop trying to prevent the trigger and absorb it instead. manage-access
-- calls this instead of inserting: if the trigger already made a membership, it is
-- repointed at the real business; if it did not, one is created. Either way the
-- login ends up on exactly one business, which is what the unique index wants.
--
-- The stray business is deleted only while it is provably untouched — still the
-- empty '{}' the trigger created, and with nobody left in it. A business that has
-- had so much as one keystroke in it fails both guards and is left alone.
--
-- SECURITY DEFINER because manage-access reaches it with the service role and
-- nothing else should reach it at all; execute is revoked from every browser-side
-- role below.

create or replace function public.attach_invited_user(
  p_user uuid,
  p_business uuid,
  p_role text
)
returns void
language plpgsql
security definer
set search_path to ''
as $function$
declare stray uuid;
begin
  select business_id into stray
    from public.memberships
   where user_id = p_user;

  if stray is null then
    insert into public.memberships (user_id, business_id, role)
    values (p_user, p_business, p_role);
    return;
  end if;

  update public.memberships
     set business_id = p_business,
         role = p_role
   where user_id = p_user;

  -- The business the signup trigger made for them, now with nobody in it.
  if stray <> p_business then
    delete from public.businesses b
     where b.id = stray
       and b.data = '{}'::jsonb
       and not exists (
         select 1 from public.memberships m where m.business_id = b.id
       );
  end if;
end $function$;

revoke all on function public.attach_invited_user(uuid, uuid, text) from public;
revoke all on function public.attach_invited_user(uuid, uuid, text) from anon, authenticated;
grant execute on function public.attach_invited_user(uuid, uuid, text) to service_role;

-- Put handle_new_user() back as it was. The marker branch never fired and never
-- could, and a condition that looks like it does something is worse than none.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path to ''
as $function$
declare biz_id uuid;
begin
  insert into public.businesses (name)
    values (coalesce(new.raw_user_meta_data->>'business_name', 'My business'))
    returning id into biz_id;
  insert into public.memberships (user_id, business_id, role)
    values (new.id, biz_id, 'owner');
  return new;
end; $function$;
