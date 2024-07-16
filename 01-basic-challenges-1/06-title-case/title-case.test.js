const { titleCase } = require("./title-case");

describe("TitleCase: Converting first letter of each word to uppercase", () => {
  it('Should turn "h" and "w" to uppercase', () => {
    expect(titleCase("hello world")).toBe("Hello World");
  });

  it('Should turn "j" and "p" to uppercase', () => {
    expect(titleCase("javascript programming")).toBe("Javascript Programming");
  });

  it('Should turn "o" and "c" to uppercase', () => {
    expect(titleCase("openai chatbot")).toBe("Openai Chatbot");
  });

  it("Should turn uppercase all initial letters from words on a big string", () => {
    // prettier-ignore
    const alphabet = [
      "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
      "n", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    ];

    const AMOUNT_OF_WORDS = 1000;

    const getRandomLetterFromAlphabet = () => {
      return alphabet[Math.round(Math.random() * alphabet.length)];
    };

    const generateRandomWord = () => {
      const maxWordSize = 10;
      const wordSize = Math.ceil(Math.random() * maxWordSize);

      return new Array(wordSize)
        .fill(null)
        .map(getRandomLetterFromAlphabet)
        .join("");
    };

    const string = new Array(AMOUNT_OF_WORDS)
      .fill(null)
      .map(generateRandomWord)
      .join(" ");

    const doesStartWithUpperCase = (word) => /^[A-Z]/.test(word);

    const result = titleCase(string);

    result.split(" ").forEach((x) => {
      if (!x) return;
      expect(doesStartWithUpperCase(x)).toBe(true);
    });
  });
});
