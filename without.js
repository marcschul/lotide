// FUNCTION(S)

const without = function(source, itemsToRemove) {
  // shallow copy of source array
  let newArr = [];
  for (let element of source) {
    newArr.push(element);
  }
  // removes elements from newArr found in itemsToRemove
  for (let i = 0; i < itemsToRemove.length; i++) {
    for (let j = 0; j < newArr.length; j++) {
      if (itemsToRemove[i] === newArr[j]) {
        newArr.splice(j, 1);
      }
    }
  }
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

const testWords = ['milk', 'goodbye', 'chocolate', 'rice', 'hello'];
assertArraysEqual(without(testWords, ['goodbye', 'hello']), ['milk', 'chocolate', 'rice']);
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

// test case to prove original array is not modified
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
