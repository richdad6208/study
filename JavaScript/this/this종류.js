// 일반함수
function foo() {
  console.log(this);
}
foo(); // window

// 메소드라도 일반함수로 호출하면 this는 window이다.
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

// 화살표 함수는 상위 스코프
const man2 = {
  name: "kim",
  age: 10,
  sayName() {
    setTimeout(() => console.log(this), 1000);
  },
};
man2.sayName(); // man2

// 생성자 함수에서 this는 미래에 생설될 인스턴스를 참조한다.

function Foo(name) {
  this.name = name;
  return this.name;
}

const foo = new Foo("kim");
console.log(foo); // kim

function foo() {
  return console.log(this);
}

foo.apply({ a: 1 });
