const assertEqual = require('../assertEqual');
const countLetters = require('../countLetters');

const obj = countLetters('LHL');
assertEqual(obj['L'], 2);
assertEqual(obj['H'], 1);