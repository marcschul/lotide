// ASSERTION FUNCTION(S)

const eqArrays = function(arr1, arr2) {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
};

const eqObjects = function(object1, object2) {
  const obj1KeysArr = Object.keys(object1);
  const obj2KeysArr = Object.keys(object2);
  let result = obj1KeysArr.length === obj2KeysArr.length;
  if (result) {
    for (const key1 of obj1KeysArr) {
      if (result) {
        for (const key2 of obj2KeysArr) {
          if (eqArrays(object1[key1], object2[key2]) && eqArrays(key1, key2)) {
            result = true;
            break;
          } else {
            result = false;
          }
        }
      }
    }
  }
  return result;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`😀😀😀 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`💣💣💣 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// TEST CASE(s)
const obj1 = {};
const obj2 = {};
const obj3 = { a: 1 };
console.log(assertObjectsEqual(obj1, obj2));
console.log(assertObjectsEqual(obj1, obj3));