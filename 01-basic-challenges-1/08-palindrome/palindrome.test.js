const { isPalindrome } = require("./palindrome");

describe("Checking for palindrome strings", () => {
  it("Should successfully check if is a palindrome", () => {
    expect(isPalindrome("racecar")).toBe(true);
    expect(isPalindrome("Hello")).toBe(false);
    expect(isPalindrome("A man, a plan, a canal, Panama")).toBe(true);
    expect(isPalindrome("12321")).toBe(true);
  });
});
