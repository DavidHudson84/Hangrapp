-- Six logins for the Main Street Dry Cleaners mock tenant.
--
-- The awkward part is `on_auth_user_created` on auth.users: it calls
-- handle_new_user(), which creates a businesses row and an owner membership for
-- EVERY new auth user. That is what we want once — for Karen, whose insert is
-- what brings the tenant into existence — and five times too many after that.
--
-- The obvious fix is to disable the trigger around the other five inserts.
-- Deliberately NOT doing that: auth.users is owned by supabase_auth_admin, so
-- disabling a trigger on it needs a privilege this connection should not be
-- relying on, and a script that half-runs leaves the trigger off on a live auth
-- table. Instead we let it fire six times and clean up afterwards, which is
-- ordinary DML on public tables and safe to re-run reasoning about.
--
-- The five placeholder businesses are marked by name so the delete at the end is
-- exact rather than "whatever looks orphaned".
--
-- Passwords: all six are MainStreet2026!. This is a demo tenant that exists to be
-- shown to strangers; the password is meant to be typed on a projector.

begin;

-- 1 ── Karen. This insert creates the business and her owner membership.

insert into auth.users (
  instance_id, id, aud, role, email, encrypted_password, email_confirmed_at,
  raw_app_meta_data, raw_user_meta_data, created_at, updated_at,
  confirmation_token, recovery_token, email_change_token_new, email_change
) values (
  '00000000-0000-0000-0000-000000000000',
  '9fd9feee-078b-4811-81ce-8c1558efa005',
  'authenticated', 'authenticated',
  'karen@mainstreetdrycleaners.com.au',
  extensions.crypt('MainStreet2026!', extensions.gen_salt('bf')),
  now(),
  '{"provider":"email","providers":["email"]}'::jsonb,
  jsonb_build_object(
    'sub', '9fd9feee-078b-4811-81ce-8c1558efa005',
    'email', 'karen@mainstreetdrycleaners.com.au',
    'business_name', 'Main Street Dry Cleaners',
    'email_verified', true, 'phone_verified', false),
  now(), now(), '', '', '', ''
);

-- 2 ── The other five. Their placeholder businesses are cleaned up at step 5.
--      Note there is no must_change_password in the metadata: index.html:9092
--      reads that flag and would put every demo login on a password-reset screen.

insert into auth.users (
  instance_id, id, aud, role, email, encrypted_password, email_confirmed_at,
  raw_app_meta_data, raw_user_meta_data, created_at, updated_at,
  confirmation_token, recovery_token, email_change_token_new, email_change
)
select
  '00000000-0000-0000-0000-000000000000',
  u.id, 'authenticated', 'authenticated', u.email,
  extensions.crypt('MainStreet2026!', extensions.gen_salt('bf')),
  now(),
  '{"provider":"email","providers":["email"]}'::jsonb,
  jsonb_build_object(
    'sub', u.id::text, 'email', u.email,
    'business_name', 'MSDC placeholder — delete me',
    'email_verified', true, 'phone_verified', false),
  now(), now(), '', '', '', ''
from (values
  ('15b59a4c-6ed7-47d6-b73b-7362717d1c56'::uuid, 'nadia@mainstreetdrycleaners.com.au'),
  ('ad1ef144-2dec-440c-baa2-59bb9de716b2'::uuid, 'sharon@mainstreetdrycleaners.com.au'),
  ('ce35c68f-d2c4-4fbf-a564-adc964ebf83d'::uuid, 'emma@mainstreetdrycleaners.com.au'),
  ('f5fff5d7-a00e-4871-ad5c-ee252671d18f'::uuid, 'rebecca@mainstreetdrycleaners.com.au'),
  ('dbc3f064-cdfd-4fac-ae43-cdb0c1624647'::uuid, 'chloe@mainstreetdrycleaners.com.au')
) as u(id, email);

-- 3 ── Identities. Without an email identity row GoTrue will not authenticate a
--      password sign-in, and the account looks real in the table but cannot log in.

insert into auth.identities (
  provider_id, user_id, identity_data, provider,
  last_sign_in_at, created_at, updated_at
)
select
  u.id::text, u.id,
  jsonb_build_object(
    'sub', u.id::text, 'email', u.email,
    'email_verified', true, 'phone_verified', false),
  'email', now(), now(), now()
from auth.users u
where u.email like '%@mainstreetdrycleaners.com.au';

-- 4 ── Repoint the five memberships at Karen's business, with real roles.

update public.memberships m
   set business_id = (select business_id from public.memberships
                       where user_id = '9fd9feee-078b-4811-81ce-8c1558efa005'),
       role = r.role
  from (values
    ('15b59a4c-6ed7-47d6-b73b-7362717d1c56'::uuid, 'admin'),
    ('ad1ef144-2dec-440c-baa2-59bb9de716b2'::uuid, 'manager'),
    ('ce35c68f-d2c4-4fbf-a564-adc964ebf83d'::uuid, 'staff'),
    ('f5fff5d7-a00e-4871-ad5c-ee252671d18f'::uuid, 'staff'),
    ('dbc3f064-cdfd-4fac-ae43-cdb0c1624647'::uuid, 'staff')
  ) as r(user_id, role)
 where m.user_id = r.user_id;

-- 5 ── Drop the five placeholder businesses. Nothing references them now.

delete from public.businesses where name = 'MSDC placeholder — delete me';

commit;

-- Check: six memberships, one owner, one business, six identities.
select b.name,
       (select count(*) from public.memberships m where m.business_id = b.id) as members,
       (select string_agg(m.role, ', ' order by m.role) from public.memberships m where m.business_id = b.id) as roles
  from public.businesses b
 where b.id = (select business_id from public.memberships
                where user_id = '9fd9feee-078b-4811-81ce-8c1558efa005');
