const assertEqual = require('../assertEqual');
const tail = require('../tail');

const words = ["Yo Yo", "Lighthouse", "Labs"];

assertEqual(JSON.stringify(tail([1, 2, 3, 4])), JSON.stringify([2, 3, 4])); // => pass
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
assertEqual(JSON.stringify(tail([1])), JSON.stringify([])); // => pass;
assertEqual(JSON.stringify(tail([])), JSON.stringify([])); // => pass;