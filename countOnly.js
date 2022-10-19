const assertEqual = function(allItems, expected) {
  if (allItems === expected) {
    console.log(`✅✅✅ Assertion Passed: ${allItems} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${allItems} !== ${expected}`);
  }
};

const countOnly = function(allItems, itemsToCount) {
  let amountUsed = {};
  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (!amountUsed[item]) {
        amountUsed[item] = 0;
      }
      amountUsed[item]++;
    }
  }
  return amountUsed;
};


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);



