module.exports.findMaxNumber = (array) => {
  if (!Array.isArray(array)) {
    throw new Error("Expected array but got type: " + typeof array);
  }

  return Math.max(...array);
};
