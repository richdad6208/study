function sleep(func, time) {
  const delayedTime = Date.now() + time;

  while (delayedTime > Date.now());

  func();
}

function foo() {
  console.log("foooooo....");
}
function bar() {
  console.log("barrrrrrrrrrrr.....");
}

sleep(foo, 3 * 1000);
