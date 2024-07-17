const { findMissingLetter } = require("./find-missing-letter");

describe("findMissingLetter: Given an array of sorted characters in alphabetical order, return the missing character", () => {
  it("Should return missing character correctly", () => {
    expect(findMissingLetter(["a", "b", "c", "e"])).toBe("d");
    expect(findMissingLetter(["w", "y", "z"])).toBe("x");
  });

  it("Should return uppercase or lowercase depending on format of provided array", () => {
    // upper
    expect(findMissingLetter(["F", "G", "H", "J"])).toBe("I");
    expect(findMissingLetter(["X", "Z"])).toBe("Y");

    // lower
    expect(findMissingLetter(["a", "c"])).toBe("b");
    expect(findMissingLetter(["m", "n", "o", "q", "r"])).toBe("p");
  });

  it("Should return undefined if provided array is empty", () => {
    expect(findMissingLetter([])).toBe(undefined);
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
        expect(findMissingLetter(value)).toEqual(-100000);
      } catch (error) {
        expect(error.message).toBe(errorMessage);
      }
    });
  });
});
