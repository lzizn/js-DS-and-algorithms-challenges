module.exports.titleCase = (str = "") => {
  // The following regex match the first letter of each word
  const regex = /\b\w/g;

  return str.replace(regex, (match) => match.toUpperCase());
};
