const { fizzBuzzArray } = require("./fizzbuzz-array");

describe("FizzBuzz Array", () => {
  it("Should run FizBuzz correctly", () => {
    // prettier-ignore
    expect(fizzBuzzArray(15)).toEqual([
      1, 2, "Fizz",
      4, "Buzz", "Fizz",
      7, 8, "Fizz",
      "Buzz", 11, "Fizz",
      13, 14, "FizzBuzz",
    ]);
  });
  it("Should run FizBuzz correctly [2]", () => {
    // prettier-ignore
    expect(fizzBuzzArray(30)).toEqual([
      1, 2, "Fizz",
      4, "Buzz", "Fizz",
      7, 8, "Fizz",
      "Buzz", 11, "Fizz",
      13, 14, "FizzBuzz",
      16, 17, "Fizz",
      19, "Buzz", "Fizz",
      22, 23, "Fizz",
      "Buzz", 26, "Fizz",
      28, 29, "FizzBuzz",
    ]);
  });

  it("Should fail when not providing number", () => {
    try {
      expect(fizzBuzzArray("abc")).toEqual(123);
    } catch (error) {
      expect(error.message).toBe("Expected number but instead got: string");
    }
  });
});
