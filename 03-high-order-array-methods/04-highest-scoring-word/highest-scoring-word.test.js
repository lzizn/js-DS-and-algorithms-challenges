const highestScoringWord = require("./highest-scoring-word");

describe("highestScoringWord: Finding the highest scoring word", () => {
  it("Should correctly find highest score word", () => {
    expect(highestScoringWord("xavier is my name")).toBe("xavier");
    expect(highestScoringWord("what time are we volcano climbing")).toBe(
      "volcano"
    );
    expect(highestScoringWord("take me to semynak")).toBe("semynak");

    expect(highestScoringWord("obviously this is not the obvious choice")).toBe(
      "obviously"
    );
  });
});
