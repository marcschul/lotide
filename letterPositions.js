const _ = require('./index');

const letterPositions = function(sentence) {
  const result = {};
  for (let i = 0; i < sentence.length; i++) {
    result[sentence[i]] === undefined ? result[sentence[i]] = [i] : result[sentence[i]].push(i);
  }
  return result;
};

module.exports = letterPositions;
