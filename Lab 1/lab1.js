/**
 * Student name: Ricardo Alvear | Student ID: 101536306
 * CRN: 15795
 */

/**
 * Returns a string with the first letter of each word capitalized
 *
 * @param {string} word The input string to capitalize
 * @returns {string} The formatted string with the first letter of each word capitalized
 */

const capFirstLetter = (word) => {
  try {
    return word
      .split(" ")
      .map((letter) => {
        const firstLetter = letter.slice(0, 1).toUpperCase();
        const remainingWord = letter.slice(1);
        return `${firstLetter}${remainingWord}`;
      })
      .join(" ");
  } catch (error) {
    console.log(`Error has occurred: ${error}`);
  }
};

console.log(capFirstLetter("the quick brown fox"));
