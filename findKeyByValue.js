// FUNCTION(S)
const findKeyByValue = function(obj, value) {
  for (const key in obj) {
    if (obj[key] === value) {
      return key;
    }
  }
  return undefined;
};

// ASSERTION FUNCTION(S)
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀😀😀 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💣💣💣 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CASE(S)
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

const bestFoodByFlavour = {
  apples: "Red Apples",
  steak: "Medium Well Done Steak",
  iceCream:  "Strawberry Ice Cream",
};

assertEqual(findKeyByValue(bestFoodByFlavour, "Medium Well Done Steak"), "steak");
assertEqual(findKeyByValue(bestFoodByFlavour, "Chocolate Ice cream"), undefined);