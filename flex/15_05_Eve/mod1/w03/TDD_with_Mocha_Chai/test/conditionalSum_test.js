const assert = require("chai").assert;

const { conditionalSum } = require("../conditionalSum");

describe("conditionalSum", () => {
  it("should return correct odd sum", () => {
    const value = [1,2,3,4,5];
    const condition = "odd";

    const actual = conditionalSum(value, condition);
    const expected = 9;

    assert.equal(actual, expected);
  });

  it("should return correct even sum", () => {
    const value = [1,2,3,4,5];
    const condition = "even";

    const actual = conditionalSum(value, condition);
    const expected = 6;

    assert.equal(actual, expected);
  });

  it("should return correct sum when no even numbers", () => {
    const value = [];
    const condition = "even";

    const actual = conditionalSum(value, condition);
    const expected = 0;

    assert.equal(actual, expected);
  });

  it("should return correct sum when no odd numbers", () => {
    const value = [];
    const condition = "odd";

    const actual = conditionalSum(value, condition);
    const expected = 0;

    assert.equal(actual, expected);
  });

  it("should return correct even sum when negative numbers present", () => {
    const value = [-1,-2,-3,4,-5];
    const condition = "even";

    const actual = conditionalSum(value, condition);
    const expected = 2;

    assert.equal(actual, expected);
  });

  it("should return correct sum when negative odd numbers present", () => {
    const value = [-1,2,-3,4,-5];
    const condition = "odd";

    const actual = conditionalSum(value, condition);
    const expected = -9;

    assert.equal(actual, expected);
  });

  it("should throw error message when strings are in array", () => {
    const value = [-1,2,"banana",4,-5];
    const condition = "odd";

    assert.throws(() => conditionalSum(value, condition), 'Values must be an array of numbers');
  });

  it("should throw error message when value includes nested arrays", () => {
    const value = [-1,2,["banana"],4,-5];
    const condition = "odd";

    assert.throws(() => conditionalSum(value, condition), 'Values must be an array of numbers');
  });

  it("should throw error message when value is not an array", () => {
    const value = 4;
    const condition = "odd";

    assert.throws(() => conditionalSum(value, condition), 'Values must be an array of numbers');
  });
});