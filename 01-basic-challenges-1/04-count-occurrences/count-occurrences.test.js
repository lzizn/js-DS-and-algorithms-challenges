const { countOccurrences } = require("./count-occurrences");

describe("Count Occurrences of a Character", () => {
  it('Should count correctly the amount of "l" in "hello"', () => {
    expect(countOccurrences("hello", "l")).toBe(2);
  });
  it('Should count the amount of "m" in "programmmmming"', () => {
    expect(countOccurrences("programmmmming", "m")).toBe(5);
  });
  it('Should count the amount of "n" in "bananananananaa"', () => {
    expect(countOccurrences("bananananananaa", "n")).toBe(6);
  });
  it('Should count the amount of "n" in a custom string', () => {
    const amountOfX = 10000;
    const string = new Array(amountOfX)
      .fill(null)
      .map((_) => "x")
      .join("");

    expect(countOccurrences(string, "x")).toBe(amountOfX);
  });
});
