// import calculate from "./calculator.js";
const calculate = require('./calculator');

describe('It calculate numbers', () => {
  test('it adds two numbers', () => {
    const calc = calculate.add(2, 3);
    expect(calc).toBe(5);
  })

  test('it subtracts two numbers', () => {
    expect(calculate.subtract(2, 3)).toBe(-1);
  })

  test('it divides two numbers', () => {
    expect(calculate.divide(6, 3)).toBe(2);
  })
  
  test('it multiply two numbers', () => {
    expect(calculate.multiply(2, 3)).toBe(6);
  })
});