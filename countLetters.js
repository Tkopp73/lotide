const countLetters = function(words) {
  let letters = {};
  for (const word of words) {
    if (word !== ' ') {
      if (!letters[word]) {
        letters[word] = 0;
      }
      letters[word]++;
    }
  }
  return letters;
};

module.exports = countLetters;