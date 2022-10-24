
const without = function(source, itemsToRemove) {
  let notRemoved = [];
  let equal = isEqual(source, itemsToRemove);
  let same = isSameType(source,itemsToRemove);
  for (let equ of equal) {
    for (let sm of same) {
      if (equ !== sm) {
        notRemoved.push(sm);
      }
    }
  }
  return notRemoved;
};

const isSameType = function(one, two) {
  let same = [];
  for (let arrOne of one) {
    for (let arrTwo of two) {
      if (typeof arrOne === typeof arrTwo) {
        same.push(arrOne);
      }
    }
  }
  return same;
};

const isEqual = function(one, two) {
  let equal = [];
  for (let uno of one) {
    for (let dos of two) {
      if (uno === dos) {
        equal.push(uno);
      }
    }
  }
  return equal;
};


console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));


module.exports = without;