/**
 * Returns true if all characters in a string are unique.
 * @param {string} str - The string to check.
 * @returns {boolean} - Whether all characters in the string are unique.
 */
module.exports.areAllCharactersUnique = (str) => {
  if (typeof str !== "string") {
    throw new Error("Expected string but instead got: " + typeof str);
  }

  const uniqueChars = Array.from(new Set(str.split("")));

  return uniqueChars.length === str.length;
};
