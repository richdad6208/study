function foo(func) {
  return func();
}

function bar() {
  return "caller: " + bar.caller;
}

console.log(foo(bar));
console.log(bar());
