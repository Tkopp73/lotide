
const flatten = function(arr1) {
  return isArray(arr1);
};

const isArray = function(one) {
  let flattenedArray = [];
  for (let x = 0; x < one.length; x++) {
    if (Array.isArray(one[x])) {
      for (let y = 0; y < one[x].length; y++) {
        flattenedArray.push(one[x][y]);
      }
    } else {
      flattenedArray.push(one[x]);
    }
  }
  return flattenedArray;
};

module.exports = flatten;