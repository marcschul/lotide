# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @marcschul/lotide`

**Require it:**

`const _ = require('@marcschul/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(actual, expected)`: tests 2 given arrays for equality
* `assertEqual(actual, expected)`: tests primitive for equality
* `assertObjectsEqual(actual, expected)`: tests objects for equality
* `countLetters(sentance)`: return the amount of letters found in a sentance
* `countOnly(allItems, itemsToCount)`: counts items in an array
* `eqArrays(array1, array2)`: return true or false if arrays are equal to each other
* `eqObjects(object1, object2)`: return true or false if objects are equal to each other
* `findKey(object, callback)`: return first key given a func callback
* `findKeyByValue(object, value)`: return first key given a value
* `flatten(array)`: given a nested array, return array with no nesting
* `head(array)`: return first index found in an array
* `letterPositions(sentance)`: Given an object, return the index position of each letter
* `map(array, callback)`: Given an array and a func, creats a shallow copy of array and return the array.
* `middle(array)`: return the middle of an array
* `tail(array)`: return the tail of an array. If array has no tail return empty array
* `takeUntil(array, callback)`: return shallow copy of an filtered array
* `without(source, itemsToRemove)`: return shallow copy of an array with remove