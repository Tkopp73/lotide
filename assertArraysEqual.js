const assertArraysEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  if (isEqual(arr1, arr2) === true && isSameType(arr1, arr2) === true){
    return true;
  } else {
    return false;
  }
};

const isSameType = function(one, two) {
  for (let arrOne of one){
    for (let arrTwo of two){
      if (typeof arrOne !== typeof arrTwo){
        return false;
      }
    }
  }
  return true;
};

const isEqual = function(one, two){
  for (let uno of one) {
    for (let dos of two) {
      if (uno === dos) {
        return true;
      } else if(uno !== dos){
        return false;
      }
    }
  }
  
};

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false
