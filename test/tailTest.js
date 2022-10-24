
const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {
  it("returns the end of an array of strings", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), "Lighthouse, Labs");
  });
  
  it("returns the end of an array of numbers", () => {
    assert.deepEqual(tail([1, 2, 3]), "2, 3");
  });

});
