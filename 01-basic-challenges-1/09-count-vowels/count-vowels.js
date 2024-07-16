module.exports.countVowels = (str) => {
  if (typeof str !== "string") {
    throw new Error("Expected string but got: " + typeof str);
  }

  const vowels = ["a", "e", "i", "o", "u"];

  const onlyVowels = str
    .split("")
    .map((x) => x.toLowerCase())
    .filter((x) => vowels.includes(x));

  return onlyVowels.length;
};
