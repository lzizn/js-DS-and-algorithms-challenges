const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((num) => num * 2);
const evenNumbers = numbers.filter((num) => num > 2);
const sum = numbers.reduce((total, num) => total + num, 0);
const foundNumber = numbers.find((num) => num > 2);
const hasEvenNumber = numbers.some((num) => num > 5);
const allNumsGreaterThanZero = numbers.every((num) => num > 0);
