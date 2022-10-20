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

console.log(countLetters("Lighthouse Labs"));
console.log(countLetters("lighthouse in the house"));
console.log(countLetters("supercalifragilisticexpialidocious"))
