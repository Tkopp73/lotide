const flatten = require('../flatten');


console.log(flatten([1, 2, 3, [1, 2], 3]));
console.log(flatten([1, 2, 3, [3, 2, 1]]));
console.log(flatten([1, 2, [3, 4], 5, [6]]));
