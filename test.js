const compose =
  (...fns) =>
  (arg) =>
    fns.reduce((compose, f) => f(compose), arg);

const plusOne = (num) => num + 1;

const plusTwo = (num) => num + 2;

const twoFunc = compose(plusOne, plusTwo);

console.log(twoFunc(2));
