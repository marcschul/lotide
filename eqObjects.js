const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  const obj1KeysArr = Object.keys(object1);
  const obj2KeysArr = Object.keys(object2);
  let result = obj1KeysArr.length === obj2KeysArr.length;
  if (result) {
    for (const key1 of obj1KeysArr) {
      if (result) {
        for (const key2 of obj2KeysArr) {
          if (eqArrays(object1[key1], object2[key2]) && eqArrays(key1, key2)) {
            result = true;
            break;
          } else {
            result = false;
          }
        }
      }
    }
  }
  return result;
};

module.exports = eqObjects;
