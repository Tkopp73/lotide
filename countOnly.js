
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



module.exports = countOnly;
