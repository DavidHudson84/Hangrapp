-- Make `manager` a legal role.
--
-- index.html has offered four roles since 2026-08-25 (owner, admin, manager,
-- staff) but the table only ever allowed three. Saving a manager would have been
-- rejected by Postgres, which nobody noticed because until now there was no way
-- to give anyone a role at all — every account was the owner of its own
-- business. This is the constraint catching up with the app.
--
-- Deliberately NOT in this migration:
--
--   * Any INSERT/UPDATE/DELETE policy on memberships. Granting access stays with
--     the manage-access edge function, which holds the service role key and
--     checks that the caller is the owner of the business they are editing.
--     One place decides who may do what, the same way send-letter owns the
--     decision about who a letter may be sent to.
--
--   * Any change to the SELECT policy. The roster is read through the same
--     function, because the emails live in auth.users which the browser cannot
--     read under any policy.

alter table public.memberships drop constraint if exists memberships_role_check;

alter table public.memberships
  add constraint memberships_role_check
  check (role in ('owner', 'admin', 'manager', 'staff'));
