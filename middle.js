
const middle = function(array) {
  if (array.length === 1 || array.length === 0) {
    let noAnswer = [];
    return noAnswer;
  } else if (array.length % 2 !== 0) {
    let oddArray = [];
    let oddIndex = Math.floor(array.length / 2);
    oddArray.push(array[oddIndex]);
    return oddArray;
  } else if (array.length % 2 === 0) {
    let evenArray = [];
    let evenIndex = array.length / 2;
    evenArray.push(array[evenIndex - 1], array[evenIndex]);
    return evenArray;
  }
  
};

console.log(middle([]));
console.log(middle([1, 2, 3, 4, 5,]));
console.log(middle([1, 2, 3, 4, 5, 6,]));

