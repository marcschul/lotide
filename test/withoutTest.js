const assertArraysEqual = require('../assertArraysEqual');
const without = require('../without');

const testWords = ['milk', 'goodbye', 'chocolate', 'rice', 'hello'];
assertArraysEqual(without(testWords, ['goodbye', 'hello']), ['milk', 'chocolate', 'rice']);
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

// test case to prove original array is not modified
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);