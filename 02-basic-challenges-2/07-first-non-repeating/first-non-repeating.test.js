const { findFirstNonRepeatingCharacter } = require("./first-non-repeating");

describe("findFirstNonRepeatingCharacter: Find First Non-Repeating Character", () => {
  it("Should correctly find the first char that is not followed by itself", () => {
    expect(findFirstNonRepeatingCharacter("aaabccdeff")).toBe("b");
    expect(findFirstNonRepeatingCharacter("abc")).toBe("a");
    expect(findFirstNonRepeatingCharacter("bc")).toBe("b");
    expect(findFirstNonRepeatingCharacter("hello world")).toBe("h");
    expect(findFirstNonRepeatingCharacter("hheelloo  wwoorrldd")).toBe("l");
  });

  it("Should return null when all characters are repeated at least once", () => {
    expect(findFirstNonRepeatingCharacter("aabbccc")).toBe(null);
    expect(findFirstNonRepeatingCharacter("xxxyyyzzz")).toBe(null);
    expect(findFirstNonRepeatingCharacter("aaaaaaaaa")).toBe(null);
    expect(findFirstNonRepeatingCharacter("lllllllllmmmmmmm")).toBe(null);
  });

  it("Should return null when string is empty", () => {
    expect(findFirstNonRepeatingCharacter("")).toBe(null);
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
        expect(findFirstNonRepeatingCharacter(value)).toEqual(-100000);
      } catch (error) {
        expect(error.message).toBe(errorMessage);
      }
    });
  });
});
