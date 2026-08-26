// Who this mock business is, and who can sign into it.
//
// The six user ids are fixed, not generated. They are written into auth.users by
// mock/sql/00-users.sql and referenced all through the blob as createdBy and
// staff[].userId, so a rebuild that invented new ones would orphan every chat,
// letter and problem report the moment it was loaded.

export const BUSINESS_NAME = 'Main Street Dry Cleaners';
export const DOMAIN = 'mainstreetdrycleaners.com.au';
export const DEMO_PASSWORD = 'MainStreet2026!';

export const SITE_MAIN = 'Main Street, Bendigo';
export const SITE_DROP = 'Kangaroo Flat';

// The demo is walked through as at this date: the register, the training and the
// bills are all aged relative to it so nothing reads as stale or as the future.
export const TODAY = '2026-08-26';

export const USERS = [
  { key: 'karen',   id: '9fd9feee-078b-4811-81ce-8c1558efa005', email: 'karen@'   + DOMAIN, role: 'owner',   name: 'Karen Whitfield' },
  { key: 'nadia',   id: '15b59a4c-6ed7-47d6-b73b-7362717d1c56', email: 'nadia@'   + DOMAIN, role: 'admin',   name: 'Nadia Farrell'  },
  { key: 'sharon',  id: 'ad1ef144-2dec-440c-baa2-59bb9de716b2', email: 'sharon@'  + DOMAIN, role: 'manager', name: 'Sharon Delaney' },
  { key: 'emma',    id: 'ce35c68f-d2c4-4fbf-a564-adc964ebf83d', email: 'emma@'    + DOMAIN, role: 'staff',   name: 'Emma Sutton'    },
  { key: 'rebecca', id: 'f5fff5d7-a00e-4871-ad5c-ee252671d18f', email: 'rebecca@' + DOMAIN, role: 'staff',   name: 'Rebecca Toomey' },
  { key: 'chloe',   id: 'dbc3f064-cdfd-4fac-ae43-cdb0c1624647', email: 'chloe@'   + DOMAIN, role: 'staff',   name: 'Chloe Barnes'   }
];

export const UID = Object.fromEntries(USERS.map(u => [u.key, u.id]));
