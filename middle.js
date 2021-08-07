const middle = function(array) {
  const result = [];
  if (array.length === 1 || array.length === 2) {
    return result;
  } else if (array.length % 2 === 1) {
    result.push(Math.ceil(array.length / 2));
    return result;
  } else if (array.length % 2 === 0) {
    result.push(array.length / 2);
    result.push((array.length / 2) + 1);
    return result;
  }
};

module.exports = middle;