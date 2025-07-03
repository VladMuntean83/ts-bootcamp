import {fizzbuzz} from "./index";

test('fizzbuzz returns "Fizz" for 3', () => {
    expect(fizzbuzz(3, true)).toBe('Fizz');
});

test('fizzbuzz returns "Buzz" for 5', () => {
    expect(fizzbuzz(5, true)).toBe('Buzz');
});

test('fizzbuzz returns 2 for 2', () => {
    expect(fizzbuzz(2, true)).toBe('2');
});

test('fizzbuzz returns FizzBang for 21', () => {
    expect(fizzbuzz(21, true)).toBe('FizzBang');
});

test('fizzbuzz returns Bong for 33', () => {
    expect(fizzbuzz(33, true)).toBe('Bong');
});

test('fizzbuzz returns FizzFezzBuzz for 195', () => {
    expect(fizzbuzz(195, true)).toBe('FizzFezzBuzz');
});

test('fizzbuzz returns FezzBong for 143', () => {
    expect(fizzbuzz(143, true)).toBe('FezzBong');
});

test('fizzbuzz returns BuzzFizz for 255', () => {
    expect(fizzbuzz(255, true)).toBe('BuzzFizz');
});