const { findMaxNumber } = require("./find-max-number");

describe("Finding the maximum number in an array", () => {
  it("Should correctly find maximum number in a small positive array", () => {
    expect(findMaxNumber([1, 5, 3, 9, 2])).toBe(9);
  });

  it("Should correctly find maximum number in a small negative array", () => {
    expect(findMaxNumber([-1, -5, -3, -9, -2])).toBe(-1);
  });

  it("Should correctly find maximum number in a small mixed array", () => {
    expect(findMaxNumber([1, -5, 3, -9, 2])).toBe(3);
  });

  it("Should correctly find maximum number in a small array with same items", () => {
    expect(findMaxNumber([10, 10, 10, 10, 10])).toBe(10);
  });

  it("Should correctly find maximum number on a big array", () => {
    const AMOUNT_OF_ITEMS = 100_000;
    const MAX_POSSIBLE_NUMBER = 10_000;

    const target = new Array(AMOUNT_OF_ITEMS).fill(null).map((x, i) => {
      // ensure there is always a max number at least once
      if (i === AMOUNT_OF_ITEMS - 1) {
        return MAX_POSSIBLE_NUMBER;
      }

      return Math.round(Math.random() * MAX_POSSIBLE_NUMBER);
    });

    expect(findMaxNumber(target)).toBe(MAX_POSSIBLE_NUMBER);
  });
});
