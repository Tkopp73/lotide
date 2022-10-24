const assertObjectsEqual = function(actual, expected) {
  const inspect = require('until').inspect;

  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (const ob1 of Object.keys(object1)) {
    if (!object2[ob1]) {
      return false;
    } else {
      if (eqArrays(object1, object2)) {
        return false;
      }
      return object1;
    }
  }
};

const eqArrays = function(arr1, arr2) {
  if (isEqual(arr1, arr2) === true && isSameType(arr1, arr2) === true) {
    return true;
  } else {
    return false;
  }
};

const isSameType = function(one, two) {
  for (let arrOne of Object.keys(one)) {
    for (let arrTwo of Object.keys(two)) {
      if (typeof arrOne !== typeof arrTwo) {
        return false;
      }
    }
  }
  return true;
};

const isEqual = function(one, two) {
  for (let uno of Object.keys(one)) {
    for (let dos of Object.keys(two)) {
      if (uno === dos) {
        return true;
      } else if (one !== two) {
        return false;
      }
    }
  }
};


const ab = {a: "1", b: "2"};
const ba = {b: "2", a: "1"};
assertObjectsEqual(ab, ba);

const abc = {a: "1", b: "2", c: "3"};
assertObjectsEqual(ba, abc);

const cd = {c: "1", d:["2", 3]};
const dc = {d: ["2", 3], c: "1"};
assertObjectsEqual(cd, dc);

const cd2 = {c: "1", d: ["2", 3, 4]};
assertObjectsEqual(cd, cd2);