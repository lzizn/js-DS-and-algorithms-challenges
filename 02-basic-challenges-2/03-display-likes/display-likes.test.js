const { displayLikes } = require("./display-likes");

describe("Display Likes", () => {
  it("Should say that no one likes it if names is empty", () => {
    expect(displayLikes([])).toEqual("no one likes this");
  });

  it("Should say the name of who likes it if names array has 1 item", () => {
    expect(displayLikes(["A"])).toEqual("A likes this");
  });

  it("Should say the name of everyone that likes it if names has a maximum of three people", () => {
    expect(displayLikes(["A", "B"])).toEqual("A and B like this");
    expect(displayLikes(["A", "B", "C"])).toEqual("A, B and C like this");
  });

  it("Should say the name of first two and show the amount of remaining likes if names has more than three people", () => {
    expect(displayLikes(["A", "B", "C", "D", "E"])).toEqual(
      "A, B and 3 others like this"
    );

    const remainingLikesAmount = 1000;
    const names = ["A", "B"].concat(
      ...new Array(remainingLikesAmount).fill(null).map((_, i) => i + "")
    );

    expect(displayLikes(names)).toEqual(
      `A, B and ${remainingLikesAmount} others like this`
    );
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
        expect(displayLikes(value)).toEqual(-100000);
      } catch (error) {
        expect(error.message).toBe(errorMessage);
      }
    });
  });
});
