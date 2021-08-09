const _ = require('./index');

const countLetters = function(sentence) {
  const result = {};
  for (const letter of sentence) {
    result[letter] === undefined ? result[letter] = 1 : result[letter] += 1;
  }
  return result;
};

module.exports = countLetters;