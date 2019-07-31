import fuzzy from '../src/fuzzy';
import Users from './user.list';

test('val', () => {
  const val = fuzzy('Thompson;台湾', Users, { key: 'userID' });
  console.log(val, val && val.length);

  expect(val.length).toBe(3);
});
