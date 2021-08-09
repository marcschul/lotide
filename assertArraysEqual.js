const _ = require('./index');
// const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  if (_.eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertArraysEqual;