const obj = {
  x: function () {},
};
// x는 축약표현으로 된 메소드가 아니므로 constructor이다.

console.log(new obj.x()); // x {}

const obj2 = {
  x() {}, //ES6의 메서드 축약 표현만 메서드로 인정한다.
};

console.log(new obj2.x()); // Error obj2.x is not a constructor
