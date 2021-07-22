const eqArrays = function(arr1, arr2) {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
}

const assertArrayEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`😀😀😀 Assertion Passed: ${actual} === ${expected}`);
  } else {  
    console.log(`💣💣💣 Assertion Failed: ${actual} !== ${expected}`);
  }
}

assertArrayEqual([1, 2, 3], [1, 2, 3]); // expected: pass
assertArrayEqual([1, 2], [1, 2, 3]); // expected: fail