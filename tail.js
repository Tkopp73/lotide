const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(a) {
  let words = a.slice(1);
  let string = words.toString();
  return string;
};

let words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(tail(words), "Lighthouse,Labs");

