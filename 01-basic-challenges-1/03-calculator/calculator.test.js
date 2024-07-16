const { calculator } = require("./calculator");

describe("Performing arithmetic operations using the calculator function", () => {
  // Test case inputs
  const num1 = 5;
  const num2 = 7;

  it("Should add correctly", () => {
    // Addition
    expect(calculator(num1, num2, "+")).toBe(12);
    expect(calculator(num2, num1, "+")).toBe(12);
    expect(calculator(-num1, num2, "+")).toBe(2);
    expect(calculator(-num2, num1, "+")).toBe(-2);
    expect(calculator(-num2, -num1, "+")).toBe(-12);
  });

  it("Should subtract correctly", () => {
    expect(calculator(num1, num2, "-")).toBe(-2);
    expect(calculator(num2, num1, "-")).toBe(2);
    expect(calculator(-num2, num1, "-")).toBe(-12);
    expect(calculator(-num2, -num1, "-")).toBe(-2);
  });

  it("Should multiply correctly", () => {
    expect(calculator(num1, num2, "*")).toBe(35);
    expect(calculator(-num1, num2, "*")).toBe(-35);
    expect(calculator(-num1, -num2, "*")).toBe(35);
  });

  it("Should divide correctly", () => {
    expect(calculator(num1, num2, "/")).toBeCloseTo(0.7143, 4);
    expect(calculator(-num1, num2, "/")).toBeCloseTo(-0.7143, 4);
  });

  it("Should fail when passing invalid num1", () => {
    try {
      calculator("abc", num2, "+");
    } catch (error) {
      expect(error.message).toBe(
        "Expected num1 to be a number but instead got: abc"
      );
    }
  });

  it("Should fail when passing invalid num2", () => {
    try {
      calculator(num1, "abc", "+");
    } catch (error) {
      expect(error.message).toBe(
        "Expected num2 to be a number but instead got: abc"
      );
    }
  });

  it("Should fail when passing invalid operator", () => {
    try {
      calculator(num1, num2, "|");
    } catch (error) {
      expect(error.message).toBe(
        "Expected operator to be one of +, -, *, / but instead got |"
      );
    }
  });
});
