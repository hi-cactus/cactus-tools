import pick from './../src/pick';

test('val', () => {
  const val = pick({ a: 1, b: [{ c: 2 }, { d: 3 }], e: { f: 4 }, g: 5 }, [
    'a',
    'g',
  ]);

  console.log(val);

  expect(val).toStrictEqual({ a: 1, g: 5 });
});
