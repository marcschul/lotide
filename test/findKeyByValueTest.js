const assertEqual = require('../assertEqual');
const findKeyByValue = require('../findKeyByValue');

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