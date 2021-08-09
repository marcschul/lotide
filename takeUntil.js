const _ = require('./index');

const takeUntil = function(array, callback) {
  let newArr = [];
  array.filter((element, index) => {
    if (callback(element)) {
      newArr = array.slice(0, index);
    }
  });
  return newArr;
};

module.exports = takeUntil;