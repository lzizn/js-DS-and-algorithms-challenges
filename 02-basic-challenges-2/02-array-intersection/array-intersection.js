module.exports.arrayIntersection = (arr1, arr2) => {
  if (!Array.isArray(arr1)) {
    throw new Error(
      "Expected arr1 to be array but instead got: " + typeof arr1
    );
  }
  if (!Array.isArray(arr2)) {
    throw new Error(
      "Expected arr2 to be array but instead got: " + typeof arr2
    );
  }

  const firstArrayElements = new Set(arr1);

  return arr2.filter((x) => firstArrayElements.has(x));
};
