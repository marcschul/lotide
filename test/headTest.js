const assertEqual = require('../assertEqual');
const head = require('../head');


// TEST CASE(S)
assertEqual(head([5, 6, 7]), 5); // expected: pass;
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); // expected: pass;
assertEqual(head([1]), 1); // expected: pass;
assertEqual(head([]),); // expected: pass;
assertEqual(head([5, 6, 7]), 6); // expected: fail;
assertEqual(head(['lose']), 'win'); // expected: fail;
assertEqual(head([]), 6); // expected: fail;