/**
 * Returns a string representing a phone number.
 * @param {number[]} numbers - The numbers to use in the phone number.
 * @returns {string} - The formatted phone number.
 */

module.exports.formatPhoneNumber = (numbers) => {
  if (!Array.isArray(numbers)) {
    throw new Error("Expected array but instead got: " + typeof numbers);
  }

  if (numbers.length !== 10) return null;

  const areaCode = numbers.slice(0, 3).join("");
  const preffix = numbers.slice(3, 6).join("");
  const lineNumber = numbers.slice(6, 10).join("");

  return `(${areaCode}) ${preffix}-${lineNumber}`;
};
