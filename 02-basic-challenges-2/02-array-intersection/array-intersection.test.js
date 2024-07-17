const { arrayIntersection } = require("./array-intersection");

describe("Finding array intersection", () => {
  it("Should return insersection between two small arrays", () => {
    expect(arrayIntersection([10, 20, 30], [30, 40, 50])).toEqual([30]);
  });

  it("Should return insersection between two arrays", () => {
    const first = [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5];
    const second = [3, 4, 5, 6, 7, 8, 9, 10];

    expect(arrayIntersection(first, second)).toEqual([3, 4, 5]);
  });

  it("Should return insersection between two big arrays", () => {
    const first = new Array(15_000).fill(null).map((_, i) => i * 2);
    const second = new Array(10_000).fill(null).map((_, i) => i);

    const intersection = arrayIntersection(first, second);
    expect(intersection[0]).toEqual(0);
    expect(intersection[intersection.length - 1]).toEqual(9998);
  });

  it("Should return empty if there are no intersections ", () => {
    expect(arrayIntersection([1, 2], [3, 4])).toEqual([]);
  });

  it("Should return empty if arrays are empty", () => {
    expect(arrayIntersection([], [])).toEqual([]);
  });

  it("Should fail if when not providing array to arr1", () => {
    try {
      expect(arrayIntersection(123, [30])).toEqual(null);
    } catch (error) {
      expect(error.message).toBe(
        "Expected arr1 to be array but instead got: number"
      );
    }
  });
  it("Should fail if when not providing array to arr2", () => {
    try {
      expect(arrayIntersection([30], 123)).toEqual(null);
    } catch (error) {
      expect(error.message).toBe(
        "Expected arr2 to be array but instead got: number"
      );
    }
  });
});
