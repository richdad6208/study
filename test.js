const compose =
  (...fns) =>
  () =>
    fns.reduce((c, f) => f(c));

const callOne = () => console.log("one");
const callTwo = () => console.log("Two");

compose(callOne, callTwo);
callOne();
