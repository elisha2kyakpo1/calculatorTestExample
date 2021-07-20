const letter = require('./capitalize');

test('it capitalizes the first letter of a string', () => {
  expect(letter.capitalize('string')).toBe('String');
});