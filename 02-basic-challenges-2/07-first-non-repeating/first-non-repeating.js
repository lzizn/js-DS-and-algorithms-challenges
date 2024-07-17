/**
 * Returns the first non-repeating character in a string.
 * @param {string} str - The string to search.
 * @returns {string | null} - The first non-repeating character in the string or null if there are no non-repeating characters.
 */

module.exports.findFirstNonRepeatingCharacter = (str) => {
  if (typeof str !== "string") {
    throw new Error("Expected string but instead got: " + typeof str);
  }

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const previousChar = str[i - 1];
    const nextChar = str[i + 1];

    if (previousChar === char) continue;
    if (nextChar === char) continue;

    return char;
  }

  return null;
};
