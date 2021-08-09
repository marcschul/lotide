const assertObjectsEqual = require('../assertObjectsEqual');

const obj1 = {};
const obj2 = {};
const obj3 = { a: 1 };
console.log(assertObjectsEqual(obj1, obj2));
console.log(assertObjectsEqual(obj1, obj3));