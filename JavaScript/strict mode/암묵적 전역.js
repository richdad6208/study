// "use strict"; 스트릭트 모드에서는 암묵적 전역이 발생하지 않는다.

function foo() {
  x = 10;
}

foo();

console.log(x); // 10. 키워드 없이 변수선언을 하면 암묵적으로 전역변수에 선언,할당된다.
