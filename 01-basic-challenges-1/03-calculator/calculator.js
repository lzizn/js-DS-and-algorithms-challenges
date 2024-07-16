module.exports.calculator = (num1, num2, operator) => {
  const number1 = Number(num1);
  const number2 = Number(num2);

  if (Number.isNaN(number1)) {
    throw new Error(`Expected num1 to be a number but instead got: ${num1}`);
  }
  if (Number.isNaN(number2)) {
    throw new Error(`Expected num2 to be a number but instead got: ${num2}`);
  }

  const knownOperators = {
    PLUS: "+",
    MINUS: "-",
    MULTIPLY: "*",
    DIVIDE: "/",
  };
  const knownOperatorsValues = Object.values(knownOperators);
  if (!knownOperatorsValues.includes(operator)) {
    throw new Error(
      `Expected operator to be one of ${knownOperatorsValues.join(
        ", "
      )} but instead got ${operator}`
    );
  }

  if (operator === knownOperators.PLUS) {
    return number1 + number2;
  }

  if (operator === knownOperators.MINUS) {
    return number1 - number2;
  }

  if (operator === knownOperators.MULTIPLY) {
    return number1 * number2;
  }

  return number1 / number2;
};
