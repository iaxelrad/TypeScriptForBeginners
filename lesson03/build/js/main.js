"use strict";
let stringArr = ['one', 'hey', 'Itamar'];
let guitars = ['strat', 'Les Paul', 5150];
let mixedData = ['EVH', 1984, true];
stringArr[0] = 'Jon';
stringArr.push('hey');
guitars[0] = 1984;
guitars.unshift('Jim');
stringArr = guitars; //TS doesn't allow this assignment of a string | number union array to string array
guitars = stringArr; //TS allows this assignment of a string array to a string | number union array
let test = [];
let bands = [];
bands.push('Tom');
// Tuple
let myTuple = ['Dave', 42, true];
let mixed = ['John', 1, false];
mixed = myTuple;
myTuple[1] = 42;