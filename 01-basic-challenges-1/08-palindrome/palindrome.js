module.exports.isPalindrome = (str) => {
  const wordsNormal = str
    .split("")
    .map((x) => {
      return x.toLowerCase().replace(/[^a-z0-9]/g, "");
    })
    .filter(Boolean);

  for (let i = 0; i < wordsNormal.length; i++) {
    const char = wordsNormal[i];
    const equivalentChar = wordsNormal[wordsNormal.length - i - 1];

    if (char !== equivalentChar) return false;
  }

  return true;
};
