const { areAllCharactersUnique } = require("./are-all-chars-unique");

describe("areAllCharactersUnique: Checks whether a string has only unique chars (non-sensitive)", () => {
  it("Should correctly return whether all chars are unique or not", () => {
    expect(areAllCharactersUnique("abcdefg")).toBe(true);
    expect(areAllCharactersUnique("abcdefgA")).toBe(true);
    expect(areAllCharactersUnique("programming")).toBe(false);
    expect(areAllCharactersUnique("a")).toBe(true);
  });

  it("Should return true if string is empty", () => {
    expect(areAllCharactersUnique("")).toBe(true);
  });

  it("Should fail when not providing string", () => {
    // prettier-ignore
    const cases = [
      { value: {}, errorMessage: "Expected string but instead got: object" },
      { value: [], errorMessage: "Expected string but instead got: object" },
      { value: null, errorMessage: "Expected string but instead got: object" },
      { value: 30, errorMessage: "Expected string but instead got: number" },
      { value: undefined, errorMessage: "Expected string but instead got: undefined" },
    ]

    cases.forEach(({ errorMessage, value }) => {
      try {
        expect(areAllCharactersUnique(value)).toEqual(-100000);
      } catch (error) {
        expect(error.message).toBe(errorMessage);
      }
    });
  });
});
