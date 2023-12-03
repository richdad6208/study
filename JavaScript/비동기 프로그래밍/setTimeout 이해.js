(function () {
  function sleep(func, time) {
    const delayedTime = Date.now() + time;

    while (Date.now() < delayedTime);

    func();
  }

  function foo() {
    console.log("foo....");
  }
  function bar() {
    console.log("bar.....");
  }
  setTimeout(bar, 1 * 1000);
  sleep(foo, 5 * 1000);
})();
