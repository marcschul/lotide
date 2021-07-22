// FUNCTION(S)
const middle = function(array) {
  const result = [];
  if (array.length === 1 || array.length === 2) {
    return result;
  } else if (array.length % 2 === 1) {
    result.push(Math.ceil(array.length / 2));
    return result;
  } else if (array.length % 2 === 0) {
    result.push(array.length / 2);
    result.push((array.length / 2) + 1);
    return result;
  }
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
assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]