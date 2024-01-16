function loadData() {
  return new Promise((resolve, reject) => {
    // 비동기 작업 시뮬레이션: 2초 후에 작업 완료
    setTimeout(() => {
      try {
        // 데이터 로딩 성공
        const data = "Sample Data";
        resolve(data); // 성공 시 resolve 함수 호출
      } catch (error) {
        reject(error); // 오류 발생 시 reject 함수 호출
      }
    }, 2000);
  });
}

(async function () {
  const result = await loadData();
  return console.log(result);
})();
