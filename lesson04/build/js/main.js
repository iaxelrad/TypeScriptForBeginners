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
//default param value
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3));
logMsg(sumAll(undefined, 3));
//Rest Parameters
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(10, 2, 3));
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 2;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
    ;
};
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (typeof value === 'number')
        return 'number';
    return createError('this should never happen');
};
