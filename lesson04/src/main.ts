//Type Aliases
type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[]

type Guitarist = {
  name?: string,
  active: boolean,
  albums: stringOrNumberArray
};

type UserId = stringOrNumber;

//Literal Types
let myName: 'Dave';

let userName: 'Dave' | 'John' | 'Amy';
userName = 'Amy'

//functions
const add = (a: number, b: number): number => {
  return a + b
};

const logMsg = (msg: any): void => {
  console.log(msg);
};

logMsg('Hello!');
logMsg(add(2,3));

let subtract = function(c: number, d: number): number {
  return c - d;
};

type mathFunction = (a: number, b: number) => number;
// interface mathFunction { 
//   (a: number, b: number): number
// };

let multiply: mathFunction = function(c: number, d: number) {
  return c * d;
};

logMsg(multiply(2,2));

//Optional Parameters
const addAll = (a: number, b: number, c?: number): number => {
  if(typeof c !== 'undefined') {
    return a + b + c;
  }
  return a + b;
};

//default param value
const sumAll = (a: number = 10, b: number, c: number = 2): number => {
  return a + b + c;
};

logMsg(addAll(2,3,2));
logMsg(addAll(2,3));
logMsg(sumAll(2,3));
logMsg(sumAll(undefined,3));

//Rest Parameters
const total = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, curr) => prev + curr)
};

logMsg(total(10 ,2, 3));