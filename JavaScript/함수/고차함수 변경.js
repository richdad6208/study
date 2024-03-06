const foo = () => () => {
  console.log("Hello");
};

function foo() {
  return function () {
    console.log("Hello");
  };
}
