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
// Object
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: 'Dave',
    prop2: true
};
exampleObj.prop1 = 'Jon';
exampleObj.prop2 = false;
;
let evh = {
    name: 'Eddie',
    active: false,
    albums: [1984, 5150, 'OU812']
};
let jp = {
    name: 'Jimmy',
    albums: ['I', 'II', 'IV']
};
const greetGuitarist = (guitarist) => {
    return `Hello ${guitarist.name}!`;
};
console.log(greetGuitarist(jp));
