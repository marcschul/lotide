// FUNCTION(S)

const tail = function(array) {
  let arrTail = array.slice(1);
  return arrTail;
};

const assertEqual = function(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log(`😀😀😀 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💣💣💣 Assertation Failed: ${actual} !== ${expected}`);
  }
};

// TEST CASE(S)

assertEqual(tail([1, 2, 3, 4]), [2, 3, 4]);

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
assertEqual(tail([1]), []); // expected: pass;
assertEqual(tail([]), []); // expected: pass;