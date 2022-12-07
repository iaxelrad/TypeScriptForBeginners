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

