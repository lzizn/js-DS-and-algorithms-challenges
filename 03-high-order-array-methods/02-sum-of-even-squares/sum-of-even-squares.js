const isEven = (x) => x % 2 === 0;

/**
 * Returns the sum of the squares of the even numbers in the array.
 * @param {number[]} numbers - The array of numbers.
 * @returns {number} - The sum of the squares of even numbers.
 */
function sumOfEvenSquares(numbers) {
  return numbers.filter(isEven).reduce((sum, num) => {
    sum += num * num;
    return sum;
  }, 0);
}

module.exports = sumOfEvenSquares;
