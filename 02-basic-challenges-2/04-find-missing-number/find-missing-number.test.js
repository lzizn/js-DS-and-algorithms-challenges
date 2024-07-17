const { findMissingNumber } = require("./find-missing-number");

describe("findMissingNumber: Given an array, find the missing number on it", () => {
  it("Should correctly find missing number", () => {
    expect(findMissingNumber([1, 2, 3, 5])).toBe(4);
    expect(findMissingNumber([1, 3, 4, 5, 6])).toBe(2);
    expect(findMissingNumber([1, 2, 3, 4, 6, 7, 8, 9, 10])).toBe(5);
    expect(findMissingNumber([10, 8, 6, 7, 5, 4, 2, 3, 1])).toBe(9);
    expect(findMissingNumber([10, 5, 1, 2, 4, 6, 8, 3, 9])).toBe(7);
  });

  it("Should returning undefined when providing empty array", () => {
    expect(findMissingNumber([])).toEqual(undefined);
  });

  it("Should fail when not providing array", () => {
    // prettier-ignore
    const cases = [
      { value: {}, errorMessage: "Expected array but instead got: object" },
      { value: null, errorMessage: "Expected array but instead got: object" },
      { value: 30, errorMessage: "Expected array but instead got: number" },
      { value: "abc", errorMessage: "Expected array but instead got: string" },
      { value: undefined, errorMessage: "Expected array but instead got: undefined" },
    ]

    cases.forEach(({ errorMessage, value }) => {
      try {
        expect(findMissingNumber(value)).toEqual(-100000);
      } catch (error) {
        expect(error.message).toBe(errorMessage);
      }
    });
  });
});
