"use strict";
//Literal Types
let myName;
let userName;
userName = 'Amy';
//functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (msg) => {
    console.log(msg);
};
logMsg('Hello!');
logMsg(add(2, 3));
let subtract = function (c, d) {
    return c - d;
};
// interface mathFunction { 
//   (a: number, b: number): number
// };
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 2));
//Optional Parameters
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
