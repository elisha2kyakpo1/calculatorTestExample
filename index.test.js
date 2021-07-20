const { stringLength, reverseString } = require('./index');

test('it returns the length of a string', () => {
  expect(stringLength('water')).toEqual(5);
});

test('it returns the reversed string', () => {
  expect(reverseString('water')).toBe('retaw');
});