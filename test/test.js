const { factorial, isIsogram } = require("../src/util");
const { expect, assert } = require("chai");

describe("test_fun_factorials", () => {
  it("test_fun_factorial_1!_is_1", () => {
    const product = factorial(1);
    assert.equal(product, 1);
  });

  it("test_fun_factorial_hello!_is_undefined", () => {
    const product = factorial("hello!");
    assert.equal(product, undefined, "The product should be undefined");
  });

  it("test_fun_factorial_-1!_is_undefined", () => {
    const product = factorial(-1);
    assert.equal(product, undefined, "The product should be undefined");
  });

  it("test_fun_factorial_symbol!_is_undefined", () => {
    const product = factorial(Symbol);
    assert.equal(product, undefined, "The product should be undefined");
  });
});
