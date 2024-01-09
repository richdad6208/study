// 일반함수
// function foo() {
//   console.log(this);
// }
// foo(); // window

const man = {
  name: "kim",
  age: 10,
  sayName() {
    setTimeout(function () {
      console.log(this);
    }, 1000);
  },
};
man.sayName(); // window
