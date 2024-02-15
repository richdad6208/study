const call = (function () {
  let a = 5;
  let b = 5;
  return () => a + b;
})()();

console.log(call);
