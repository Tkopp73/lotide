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

const assertArraysEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length){
    return false;
  }
  if (isEqual(arr1, arr2) === true && isSameType(arr1, arr2) === true) {
    return true;
  } else {
    return false;
  }
};

const isSameType = function(one, two) {
  for (let arrOne of one) {
    for (let arrTwo of two) {
      if (typeof arrOne !== typeof arrTwo) {
        return false;
      }
    }
  }
  return true;
};

const isEqual = function(one, two) {
  for (let uno of one) {
    for (let dos of two) {
      if (uno === dos) {
        return true;
      } else if (uno !== dos) {
        return false;
      }
    }
  }
  
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const result1 = takeUntil(data1, x => x < 0);
console.log(result1);

console.log('--');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const result2 = takeUntil(data2, x => x === ',');
console.log(result2);

assertArraysEqual(eqArrays(result1, data1), false); // => true
assertArraysEqual(eqArrays(result2, data2), false); // => false

assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false
