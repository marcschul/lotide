// FUNCTION(S)
const letterPositions = function(sentence) {
  const result = {};
  for (let i = 0; i < sentence.length; i++) {
    result[sentence[i]] === undefined ? result[sentence[i]] = [i] : result[sentence[i]].push(i);
  }
  return result;
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
const func = letterPositions('hello');
const obj = { h: [0], e: [1], l: [2, 3], o: [4] };
assertArraysEqual(func, obj);