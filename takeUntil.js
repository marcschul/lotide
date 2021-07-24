// FUNCTION(S)
const takeUntil = function(array, callback) {
  let newArr = [];
  array.filter((element, index) => {
    if (callback(element)) {
      newArr = array.slice(0, index);
    }
  });
  return newArr;
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
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

const results1 = takeUntil(data1, x => x < 0);
const results2 = takeUntil(data2, x => x === ',');

assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]); // => pass
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to' ]); // => fail