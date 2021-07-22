// FUNCTION(s)
const flatten = function(array) {
  const newArr = [];
  for (let element of array) {
    if (true === Array.isArray(element)) {
      for (let i = 0; i < element.length; i++) {
        newArr.push(element[i]);
      }
    } else {
      newArr.push(element);
    }
  }
  return newArr;
};

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

// TEST CASE(s)

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);