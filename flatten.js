const _ = require('./index');

const flatten = function(array) {
  const newArr = [];
  for (let element of array) {
    if (true === Array.isArray(element)) {
      for (let i = 0; i < element.length; i++) {
        newArr.push(element[i]);
      }
    } else {
      newArr.push(element);
    }
  }
  return newArr;
};

module.exports = flatten;
