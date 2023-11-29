const assert = require('chai').assert
const numberOfVowels = require('../vowels')

describe('numberofVowels Function Tests', ()=> {
  it('returns 3 when given "orange"', () => {
    const actual = numberOfVowels('orange');
    const expected = 3;

    assert.deepStrictEqual(actual, expected);
  })

  it('returns 5 when given "lighthouse labs"', ()=> {
    const actual = numberOfVowels('lighthouse labs');
    const expected = 5;

    assert.deepStrictEqual(actual, expected);
  })

  it('returns 5 when given "aeiou"', ()=> {
    const actual = numberOfVowels('aeiou');
    const expected = 5;

    assert.deepStrictEqual(actual, expected);
  })

  it('returns "No input detected, please input a string" when no input is provided', () => {
    const actual = numberOfVowels();
    const expected = "No input detected, please input a string"

    assert.deepStrictEqual(actual, expected);
  })
})