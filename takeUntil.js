const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');


const takeUntil = function(arr, callback) {
  let results = [];
  for (let element of arr) {
    if (callback(element)) {
      break;
    } else {
      results.push(element);
    }
  }
  return results;
};


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const result1 = takeUntil(data1, x => x < 0);
console.log(result1);

console.log('--');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const result2 = takeUntil(data2, x => x === ',');
console.log(result2);

assertArraysEqual(eqArrays(result1, data1), true);
assertArraysEqual(eqArrays(result2, data2), true);

module.exports = takeUntil;