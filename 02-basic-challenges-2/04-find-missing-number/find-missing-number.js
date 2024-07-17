/**
 * Returns the missing number in an array of unique numbers from 1 to n (inclusive).
 * @param {number[]} numberArr - The array of numbers.
 * @returns {number} - The missing number.
 */
module.exports.findMissingNumber = (numberArr) => {
  if (!Array.isArray(numberArr)) {
    throw new Error("Expected array but instead got: " + typeof numberArr);
  }

  if (numberArr.length === 0) return undefined;

  const sorted = numberArr.sort((a, b) => a - b);

  if (sorted[0] !== 1) return 1;

  for (let i = 1; i <= sorted.length; i++) {
    const currentNum = sorted[i];
    const previousNum = sorted[i - 1];

    if (currentNum - 1 !== previousNum) return currentNum - 1;
  }
};
