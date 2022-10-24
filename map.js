const words = ["ground", "control", "to", "major", "tom"];
const testOne = [["1", "2", "3"], ["1", "2", 3]];
const testTwo = ["1", "2", "3"];

const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const assertArraysEqual = function(actual, expected) {
  if (actual == expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const result1 = map(words, word => word[0]);
const result2 = map(testOne, word => word[0]);
const result3 = map(testTwo, word => word[0]);


assertArraysEqual(result1, "g,c,t,m,t"); // => false
assertArraysEqual(result2, "1,1"); // => true
assertArraysEqual(result3, "1,2,3"); // => true


module.exports = map;
