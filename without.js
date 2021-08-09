const _ = require('./index');

const without = function(source, itemsToRemove) {
  // shallow copy of source array
  let newArr = [];
  for (let element of source) {
    newArr.push(element);
  }
  // removes elements from newArr found in itemsToRemove
  for (let i = 0; i < itemsToRemove.length; i++) {
    for (let j = 0; j < newArr.length; j++) {
      if (itemsToRemove[i] === newArr[j]) {
        newArr.splice(j, 1);
      }
    }
  }
  return newArr;
};

module.exports = without;
