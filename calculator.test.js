const calculator = require('./calculator.js');

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = calculator.sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    expected = 1000;
    actual = calculator.sum(300, 700);
    expect(actual).toBe(expected);
    
  });

  test('can add two negative numbers', () => {
    expected = -5;
    actual = calculator.sum(-3, -2);
    expect(actual).toBe(expected);
  });

  test('can add zero', () => {
    expected = 10;
    actual = calculator.sum(10, 0);
    expect(actual).toBe(expected);
  });

});

describe('subtract', () => {

  test('can subtract two small positive numbers', () => {
    expected = 1;
    actual = calculator.subtract(3, 2);
    expect(actual).toBe(expected);
  });

  test('can subtract two large positive numbers', () => {
    expected = 400;
    actual = calculator.subtract(700, 300);
    expect(actual).toBe(expected);
  });

  test('can subtract two negative numbers', () => {
    expected = -1;
    actual = calculator.subtract(-3, -2);
    expect(actual).toBe(expected);
  });

  test('can subtract zero', () => {
    expected = 10;
    actual = calculator.subtract(10, 0);
    expect(actual).toBe(expected);
  });

});

describe('multiply', () => {

  test('can multiply two small positive numbers', () => {
    expected = 6;
    actual = calculator.multiply(2, 3);
    expect(actual).toBe(expected);
  });

  test('can multiply two large positive numbers', () => {
    expected = 210000;
    actual = calculator.multiply(300, 700);
    expect(actual).toBe(expected);
  });

  test('can multiply two negative numbers', () => {
    expected = 6;
    actual = calculator.multiply(-3, -2);
    expect(actual).toBe(expected);
  });

  test('can multiply zero', () => {
    expected = 0;
    actual = calculator.multiply(10, 0);
    expect(actual).toBe(expected);
  });

});

describe('divide', () => {

  test('can divide two small positive numbers', () => {
    expected = 2;
    actual = calculator.divide(4, 2);
    expect(actual).toBe(expected);
  });

  test('can divide two positive large numbers', () => {
    expected = 2;
    actual = calculator.divide(1000, 500);
    expect(actual).toBe(expected);
  });

  test('can divide two negative numbers', () => {
    expected = 2;
    actual = calculator.divide(-4, -2);
    expect(actual).toBe(expected);
  });

  test('can divide by zero', () => {
    expected = 0;
    actual = calculator.divide(0, 10);
    expect(actual).toBe(expected);
  });

});

describe('modulus', () => {

  test('can modulus two small positive numbers', () => {
    expected = 0;
    actual = calculator.modulus(4, 2);
    expect(actual).toBe(expected);
  });

  test('can modulus two small positive numbers', () => {
    expected = 1;
    actual = calculator.modulus(3, 2);
    expect(actual).toBe(expected);
  });

  test('can modulus two positive large numbers', () => {
    expected = 0;
    actual = calculator.modulus(1000, 500);
    expect(actual).toBe(expected);
  });

  test('can modulus two positive large numbers', () => {
    expected = 100;
    actual = calculator.modulus(700, 300);
    expect(actual).toBe(expected);
  });

  test('can modulus two negative numbers', () => {
    expected = -0;
    actual = calculator.modulus(-4, -2);
    expect(actual).toBe(expected);
  });

  test('can modulus two negative numbers', () => {
    expected = -1;
    actual = calculator.modulus(-3, -2);
    expect(actual).toBe(expected);
  });

  test('can modulus by zero', () => {
    expected = 0;
    actual = calculator.modulus(0, 10);
    expect(actual).toBe(expected);
  });

});

describe('even', () => {

  test('can even a small positive number', () => {
    expected = true;
    actual = calculator.even(6);
    expect(actual).toBe(expected);
  });

  test('can even a small positive number', () => {
    expected = false;
    actual = calculator.even(7);
    expect(actual).toBe(expected);
  });

  test('can even a large positive number', () => {
    expected = true;
    actual = calculator.even(100);
    expect(actual).toBe(expected);
  });

  test('can even a large positive number', () => {
    expected = false;
    actual = calculator.even(101);
    expect(actual).toBe(expected);
  });

  test('can even a negative number', () => {
    expected = true;
    actual = calculator.even(-6);
    expect(actual).toBe(expected);
  });

  test('can even a negative number', () => {
    expected = false;
    actual = calculator.even(-7);
    expect(actual).toBe(expected);
  });

  test('can even by zero', () => {
    expected = true;
    actual = calculator.even(0);
    expect(actual).toBe(expected);
  });

});

describe('odd', () => {

  test('can odd a small positive number', () => {
    expected = true;
    actual = calculator.odd(6);
    expect(actual).toBe(expected);
  });

  test('can odd a small positive number', () => {
    expected = false;
    actual = calculator.odd(7);
    expect(actual).toBe(expected);
  });

  test('can odd a large positive number', () => {
    expected = true;
    actual = calculator.odd(100);
    expect(actual).toBe(expected);
  });

  test('can odd a large positive number', () => {
    expected = false;
    actual = calculator.odd(101);
    expect(actual).toBe(expected);
  });

  test('can odd a negative number', () => {
    expected = true;
    actual = calculator.odd(-6);
    expect(actual).toBe(expected);
  });

  test('can odd a negative number', () => {
    expected = false;
    actual = calculator.odd(-7);
    expect(actual).toBe(expected);
  });

  test('can odd by zero', () => {
    expected = true;
    actual = calculator.odd(0);
    expect(actual).toBe(expected);
  });

});
