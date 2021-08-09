const assertArraysEqual = require('../assertArraysEqual');
const map = require('../map');

assertArraysEqual(map([1, 2, 3], num => num * 2), [ 2, 4, 6 ]); // => pass
assertArraysEqual(map(['hi', 'goodbye', 'maybe'], word => word.toUpperCase()), [ 'HI', 'GOODBYE', 'MAYBE']); // => pass
assertArraysEqual(map([2], fail => fail)); // => fail
