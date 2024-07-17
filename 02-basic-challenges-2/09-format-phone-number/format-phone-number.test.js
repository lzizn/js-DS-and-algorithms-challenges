const { formatPhoneNumber } = require("./format-phone-number");

describe("formatPhoneNumber: Given an array of 10 numbers, return formatted phone number", () => {
  it("Should format correctly", () => {
    expect(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toBe(
      "(123) 456-7890"
    );
    expect(formatPhoneNumber([5, 0, 2, 4, 8, 1, 9, 6, 3, 7])).toBe(
      "(502) 481-9637"
    );
    expect(formatPhoneNumber([9, 9, 9, 9, 9, 9, 9, 9, 9, 9])).toBe(
      "(999) 999-9999"
    );

    expect(formatPhoneNumber([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])).toBe(
      "(000) 000-0000"
    );
  });

  it("Should return null if array length is different than 10", () => {
    const cases = [
      [1],
      [1, 2],
      [1, 2, 3],
      [1, 2, 3, 4],
      [1, 2, 3, 4, 5],
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 6, 7],
      [1, 2, 3, 4, 5, 6, 7, 8],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    ];

    cases.forEach((value) => {
      expect(formatPhoneNumber(value)).toEqual(null);
    });
  });

  it("Should fail when not providing array", () => {
    // prettier-ignore
    const cases = [
      { value: {}, errorMessage: "Expected array but instead got: object" },
      { value: "123", errorMessage: "Expected array but instead got: string" },
      { value: null, errorMessage: "Expected array but instead got: object" },
      { value: 30, errorMessage: "Expected array but instead got: number" },
      { value: undefined, errorMessage: "Expected array but instead got: undefined" },
    ]

    cases.forEach(({ errorMessage, value }) => {
      try {
        expect(formatPhoneNumber(value)).toEqual(-100000);
      } catch (error) {
        expect(error.message).toBe(errorMessage);
      }
    });
  });
});
