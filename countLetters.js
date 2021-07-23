// FUNCTION(S)
const countLetters = function(sentence) {
  const result = {};
  for (const letter of sentence) {
    result[letter] === undefined ? result[letter] = 1 : result[letter] += 1;
  }
  return result;
};

// ASSERTION FUNCTION(S)
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀😀😀 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💣💣💣 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CASE(S)
const obj = countLetters('LHL');
assertEqual(obj['L'], 2);
assertEqual(obj['H'], 1);