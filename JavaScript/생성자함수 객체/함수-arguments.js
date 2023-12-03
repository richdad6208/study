function foo(number) {
  console.log(arguments); // 함수 내부에서만 쓸 수 있다.
  return number * 2;
}

foo(2); // [Arguments] { '0': 2 }

function bar(num1, num2, num3) {
  let res = 0;
  for (let i = 0; i < arguments.length; i++) {
    res += arguments[i];
  }
  return res;
}

console.log(bar(2, 3, 4)); // 9
