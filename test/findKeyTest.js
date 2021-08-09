const assertEqual = require('../assertEqual');
const findKey = require('../findKey');

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), 'noma'); // => Pass

assertEqual(findKey({
  "Marc":  { stars: 1 },
  "Woe":   { stars: 3 },
  "Wendy": { stars: 2 },
}, x => x.stars === 2), 'Marc'); // => Fail