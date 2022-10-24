
const eqArrays = function(arr1, arr2) {
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


module.exports = eqArrays;

