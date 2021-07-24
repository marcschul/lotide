// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

// ASSERTION FUNCTION(S)
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀😀😀 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💣💣💣 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

// TEST CASE(S)
// Primitives
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
