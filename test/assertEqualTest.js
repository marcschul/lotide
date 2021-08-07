const assertEqual = require('../assertEqual');

// TEST CASE(S)
assertEqual("Lighthouse Labs", "Bootcamp"); // expected: fail
assertEqual('Hello', 'Hello'); // expected: pass
assertEqual(1, 3); // expected: fail
assertEqual(1, 1); // expected: pass