const isNumberDivisibleBy3 = (num) => num % 3 === 0;
const isNumberDivisibleBy5 = (num) => num % 5 === 0;

/**
 * Returns an array of numbers from 1 to the number passed in.
 * @param {number} num - The number to loop up to.
 * @returns {any[]} - The array of numbers.
 */
module.exports.fizzBuzzArray = (num) => {
  if (typeof num !== "number") {
    throw new Error("Expected number but instead got: " + typeof num);
  }

  const allNumbers = new Array(num).fill(null).map((_, i) => i + 1);

  return allNumbers.map((x) => {
    const isDivisibleBy3 = isNumberDivisibleBy3(x);
    const isDivisibleBy5 = isNumberDivisibleBy5(x);

    if (isDivisibleBy3 && isDivisibleBy5) return "FizzBuzz";
    if (isDivisibleBy3) return "Fizz";
    if (isDivisibleBy5) return "Buzz";

    return x;
  });
};
