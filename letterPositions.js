const letterPositions = function(words) {
  let letters = {};
  for (let x = 0; x < words.length; x++) {
    if (words[x] !== ' ') {
      if (!letters[words[x]]) {
        letters[words[x]] = [x];
      } else {
        letters[words[x]].push(x);
      }
    }
  }

  return letters;
  
};

module.exports = letterPositions;