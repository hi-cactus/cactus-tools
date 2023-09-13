import valuesDeep from '../src/valuesDeep';

test('val', () => {
  const val = valuesDeep({ a: 1, b: [{ c: 2 }, { d: 3 }], e: { f: 4 }, g: 5 });

  expect(val).toStrictEqual([1, 2, 3, 4, 5]);
});
