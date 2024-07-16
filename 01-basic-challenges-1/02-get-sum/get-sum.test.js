const { getSum } = require("./get-sum");

test("Calculating sum of two numbers", () => {
  // Test case inputs
  const num1 = 5;
  const num2 = 7;

  // Call the function
  const result = getSum(num1, num2);

  // Check if the result is equal to the expected sum
  expect(result).toBe(12);
});

test("Calculating sum of two negative numbers", () => {
  // Test case inputs
  const num1 = -5;
  const num2 = -70;

  // Call the function
  const result = getSum(num1, num2);

  // Check if the result is equal to the expected sum
  expect(result).toBe(-75);
});
