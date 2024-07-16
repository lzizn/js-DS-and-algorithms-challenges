const { countVowels } = require("./count-vowels");

describe("Counting vowels in a string", () => {
  it("Should count vowels correctly", () => {
    expect(countVowels("Hello, World!")).toBe(3);
    expect(countVowels("JavaScript")).toBe(3);
    expect(countVowels("OpenAI Chatbot")).toBe(6);
    expect(countVowels("Coding Challenge")).toBe(5);
  });

  it("Should fail when not providing a string", () => {
    try {
      expect(countVowels(123)).toEqual(100101010);
    } catch (error) {
      expect(error.message).toBe("Expected string but got: number");
    }
  });
});
