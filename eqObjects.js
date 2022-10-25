
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
      return true;
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


module.exports = eqObjects;