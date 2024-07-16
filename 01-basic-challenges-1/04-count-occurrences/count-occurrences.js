module.exports.countOccurrences = (str, targetChar) => {
  const allCharacters = str.split("").map((x) => x.trim().toLowerCase());

  const targetCharLower = targetChar.toLowerCase();

  const onlyTargetChars = allCharacters.filter((x) => x === targetCharLower);

  return onlyTargetChars.length;
};
