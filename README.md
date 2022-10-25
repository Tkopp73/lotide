# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @tkopp73/lotide`

**Require it:**

`const _ = require('@tkopp73/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

*`function1(head)`: Returns the 'head' of an array
*`function2(tail)`: Returns the 'tail' of an array
*`function3(middle)`: Returns the 'middle' of an array
*`function4(assertEqual)`: Asserts if two pieces of data are equal
*`function5(eqArrays)`: Tests two arguments are arrays 
*`function6(assertArraysEqual)`: Asserts if two arrays are equal
*`function7(countLetters)`: Counts letters in a string
*`function8(countOnly)`: Takes an array and only counts the argument passed through
*`function9(findKey)`: Takes an object and find an item by the key
*`fuction10(findKeyByValue)`: Takes an abject and finds the key by its value
*`function11(flatten)`: Compresses one level of arrays inside of an array
*`funciton12(letterPositions)`: Returns an object of indexs for each letter in the string passed
*`function13(map)`: Receives an array(s) and returns the index passed through
*`function14(takeUntil)`: Returns the array received until the argument passed
*`function15(without)`: Returns the array received without the argument passed