/**
 * Returns the highest scoring word from a string.
 * @param {string} phrase - The input string.
 * @returns {string} - The highest scoring word.
 */
function highestScoringWord(phrase) {
  const words = phrase.split(" ");

  let highestScore = {
    score: 0,
    word: "",
  };

  for (const word of words) {
    let score = 0;

    for (const letter of word) {
      score += letter.charCodeAt(0) - 96;
    }

    if (score > highestScore.score) {
      highestScore = { score, word };
    }
  }

  return highestScore.word;
}

module.exports = highestScoringWord;
