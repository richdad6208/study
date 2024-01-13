// 비동기 작업

const numAdd = (a, b) => a + b;

const async = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(numAdd(1, 2));
  });
});

// 비동기를 동기적으로 처리하기 위해 then을 사용한다.
async.then((result) => {
  console.log(result);
});

//비동기 작업
setTimeout(() => console.log("동기"));
console.log("done"); //done, 동기
