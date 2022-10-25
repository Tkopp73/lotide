const eqObjects = require('../eqObjects');
const assert = require('chai').assert;


describe("#eqObjects", () => {
  it("returns true", () => {
    const ab = {a: "1", b: "2"};
    const ba = {b: "2", a: "1"};
    assert.strictEqual(eqObjects(ab, ba), true);
  });
  
  it("returns false", () => {
    const ba = {b: "2", a: "1"};
    const abc = {a: "1", b: "2", c: "3"};
    assert.strictEqual(eqObjects(ba, abc), false);
  })
  
  it("returns true", () => {
    const cd = {c: "1", d:["2", 3]};
    const dc = {d: ["2", 3], c: "1"};
    assert.strictEqual(eqObjects(cd, dc), true);
  });
  
  it("returns false", () => {
    const cd = {c: "1", d:["2", 3]};
    const cd2 = {c: "1", d: ["2", 3, 4]};
    assert.strictEqual(eqObjects(cd, cd2), false);
  })

});
