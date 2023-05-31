const add = require("../add");
const assert = require("chai").assert;

describe("my thing to test", () => {
  it("checks equality of addition", () => {
    assert.equal(add(2, 2), 4);
  });
});
