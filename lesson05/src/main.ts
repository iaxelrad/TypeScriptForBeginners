type One = string;
type Two = string | number;
type Three = 'hello';

// convert ot more or less specific
let a: One = 'hello';
let b: Two = a as Two; //less specific
let c  = a as Three; //more specific

let d = <One>'world';
let e = <string | number>'world';