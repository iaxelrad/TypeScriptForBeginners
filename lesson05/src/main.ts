type One = string;
type Two = string | number;
type Three = 'hello';

// convert ot more or less specific
let a: One = 'hello';
let b: Two = a as Two; //less specific
let c  = a as Three; //more specific

let d = <One>'world';
let e = <string | number>'world';

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
  if( c === 'add' ) return a + b;
  return '' + a + b;
};

let myVal: string = addOrConcat(2,2, 'concat') as string;