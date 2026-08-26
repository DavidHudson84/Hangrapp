-- Remove the mock tenant completely: the business, the six memberships, the six
-- identities and the six logins. Use this to retry a failed seed from clean, or
-- to take the demo tenant off the project entirely.
--
-- Scoped to the @mainstreetdrycleaners.com.au domain and to the business those
-- users belong to, so it cannot reach a real tenant.

begin;

delete from public.businesses
 where id in (
   select distinct m.business_id from public.memberships m
     join auth.users u on u.id = m.user_id
    where u.email like '%@mainstreetdrycleaners.com.au'
 );

delete from public.memberships
 where user_id in (select id from auth.users where email like '%@mainstreetdrycleaners.com.au');

delete from auth.identities
 where user_id in (select id from auth.users where email like '%@mainstreetdrycleaners.com.au');

delete from auth.users where email like '%@mainstreetdrycleaners.com.au';

-- The placeholder businesses, if a previous run stopped between steps 2 and 5.
delete from public.businesses where name = 'MSDC placeholder — delete me';

commit;

select count(*) as remaining_mock_logins
  from auth.users where email like '%@mainstreetdrycleaners.com.au';
