import sum from '../src/utils/Utils';
//resting using jest library
test('adds 1 + 2 to equal 3', () => {
  expect(sum(3, 2)).not.toBe(7);
});

test('to be test case ', () => {
  expect(1 + 2).toBe(3);
});
test('not to be test case', () => {
  expect(1 + 2).not.toBe(6);
});

test('to equal test case', () => {
  let a = {one: 1};
  a['two'] = 2;
  expect(a).toEqual({one: 1, two: 2});
});

test('to strict equal test case', () => {
  let a = {one: 1};
  a['two'] = 2;
  expect(a).toStrictEqual({one: 1, two: 2});
});
