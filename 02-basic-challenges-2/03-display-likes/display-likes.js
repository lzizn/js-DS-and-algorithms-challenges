/**
 * Returns a string of who likes the post.
 * @param {string[]} names - The names of the people who like the post.
 * @returns {string} - A string of who likes the post.
 */
module.exports.displayLikes = (names) => {
  if (!Array.isArray(names)) {
    throw new Error("Expected array but instead got: " + typeof names);
  }

  const amount = names.length;

  if (amount === 0) return "no one likes this";

  if (amount === 1) return `${names[0]} likes this`;
  if (amount === 2) return `${names[0]} and ${names[1]} like this`;
  if (amount === 3) return `${names[0]}, ${names[1]} and ${names[2]} like this`;

  return `${names[0]}, ${names[1]} and ${amount - 2} others like this`;
};
