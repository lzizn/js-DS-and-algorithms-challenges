const { removeDuplicates } = require("./remove-duplicates");

describe("Removing duplicates from an array", () => {
  it("Should successfully remove duplicates", () => {
    expect(removeDuplicates([1, 2, 3, 2, 4, 1, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(
      removeDuplicates(["apple", "banana", "orange", "banana", "kiwi"])
    ).toEqual(["apple", "banana", "orange", "kiwi"]);
    expect(removeDuplicates([true, true, false, true, false])).toEqual([
      true,
      false,
    ]);
  });

  it("Should fail if when not providing an array", () => {
    try {
      expect(removeDuplicates("abc")).toEqual(false);
    } catch (error) {
      expect(error.message).toBe("Expected array but got: string");
    }
  });
});
