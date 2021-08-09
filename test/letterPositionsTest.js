const assertArraysEqual = require('../assertArraysEqual');
const letterPositions = require('../letterPositions');

const obj = { h: [0], e: [1], l: [2, 3], o: [4] };
assertArraysEqual(letterPositions('hello'), obj);