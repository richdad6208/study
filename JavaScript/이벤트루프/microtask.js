const promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("foo");
  }, 0);
});

function test2(cb) {
  cb();
}

function test() {
  promise.then(console.log);
}

test2(test);

console.log("hi");

// Promise 함수의 콜백은 mcrotask queue에 저장 된 뒤, 콜 스택이 비게 되면 이벤트루프에 의해 푸시되어 실행되는데, 이는 task queue보다 우선순위가 높다.
