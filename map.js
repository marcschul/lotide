// FUNCTION(S)
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

// ASSERTION FUNCTION(S)
const eqArrays = function(arr1, arr2) {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`😀😀😀 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💣💣💣 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CASE(S)

assertArraysEqual(map([1, 2, 3], num => num * 2), [ 2, 4, 6 ]); // => pass
assertArraysEqual(map(['hi', 'goodbye', 'maybe'], word => word.toUpperCase()), [ 'HI', 'GOODBYE', 'MAYBE']); // => pass
assertArraysEqual(map([2], fail => fail)); // => fail


