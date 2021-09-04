const _ = require('./index');

const middle = function(array) {
  const result = [];
  const length = array.length;
  
  if (length === 1 || length === 2) {
    return result;
  }

  if (length % 2 === 1) {
    result.push(array[Math.floor(length / 2)]);
    return result;
  }

  if (length % 2 === 0) {
    result.push(array[(length / 2) - 1], array[(length / 2)]);
    return result;
  }
  return null;
};

module.exports = middle;