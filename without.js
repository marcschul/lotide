const _ = require('./index');

const without = function(source, itemsToRemove) {
  const result = source.filter(item => !itemsToRemove.includes(item));
  return result;
}

module.exports = without;
