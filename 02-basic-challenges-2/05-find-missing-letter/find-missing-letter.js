function findMissingLetter() {}

const alphabetLower = "abcdefghijklmnpqrstuvwxyz";
const alphabetUpper = "ABCDEFGHIJKLMOPQRSTUVWXYZ";

/**
 * Returns the missing letter in an array of consecutive letters.
 * @param {string[]} strArray - An array of consecutive letters.
 * @returns {string} - The missing letter.
 */
module.exports.findMissingLetter = (strArray) => {
  if (!Array.isArray(strArray)) {
    throw new Error("Expected array but instead got: " + typeof strArray);
  }

  if (strArray.length === 0) return undefined;

  const alphabet = alphabetLower.includes(strArray[0])
    ? alphabetLower
    : alphabetUpper;

  const firstLetterIndex = alphabet.indexOf(strArray[0]);

  const correctAlphabetOrder = alphabet.slice(firstLetterIndex);

  for (let i = 0; i < strArray.length; i++) {
    const letter = strArray[i];
    const correctLetter = correctAlphabetOrder[i];

    if (letter !== correctLetter) return correctLetter;
  }
};
