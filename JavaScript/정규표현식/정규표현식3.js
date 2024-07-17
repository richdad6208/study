let re1 = new RegExp("abc");
let re2 = /abc/;
let eighteenPlus = /eighteen\+/;

console.log(/abc/.test("abcde"));
console.log(/abc/.test("abxde"));
console.log(/[0123456789]/.test("in 1992"));
console.log(/[0-9]/.test("in 1992"));

let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
console.log(dateTime.test("01-30-2003 15:20"));

let notBinary = /[^01]/;
console.log(notBinary.test("1100100010100110"), "binary");
console.log(notBinary.test("1100100010200110"), "binary");

let match = /\d+/.exec("one two 100");
console.log(match);
console.log(match.index);
