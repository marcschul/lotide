const eqObjects = require('../eqObjects');
const assertEqual = require('../assertEqual');

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const abb = { a: "12", b: "3" };

assertEqual(ab["a"], "1"); // => true, pass
assertEqual(ab["b"], "2"); // => true, pass

assertEqual(ab["a"], "3"); // => false, fail
assertEqual(ab["b"], "5"); // => false, fail

console.log(eqObjects(ab, ba)); // => true
console.log(eqObjects(ab, abc)); // => false
console.log(eqObjects(ab, abb)); // => false

// Arrays
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

console.log(eqObjects(cd, dc)); // => true
console.log(eqObjects(cd, cd2)); // => false