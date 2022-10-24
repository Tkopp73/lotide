const assertEqual = require('./assertEqual');

const findKey = (objects, callback) => {
  let foundKey = "";
  for (const object in objects) {
    if (callback(objects[object])) {
      foundKey = object;
      break;
    }
  }
  return foundKey;
};

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma");


module.exports = findKey;