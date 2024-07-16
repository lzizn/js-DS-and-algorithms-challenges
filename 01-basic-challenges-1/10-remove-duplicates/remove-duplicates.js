module.exports.removeDuplicates = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error("Expected array but got: " + typeof arr);
  }
  return Array.from(new Set(arr));
};
