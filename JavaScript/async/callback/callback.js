"use strict";

console.log("1");
setTimeout(() => {
  console.log("2");
}, 2000);
console.log("3");

// Synchronous callback
function printImmediately(print) {
  print();
}
printImmediately(() => console.log("hello")); // 1, 3, hello, 2

// Asynchronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log("async callback"), 2000); // 1, 3, 2, async callback
