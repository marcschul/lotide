const assertEqual = require('./assertEqual');

const eqArrays = function(arr1, arr2) {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
};

module.exports = eqArrays;