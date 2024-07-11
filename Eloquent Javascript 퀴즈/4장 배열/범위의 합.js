const range = (start, end, step = 1) => {
  return Array(end - start + 1)
    .fill(undefined)
    .map((item, index) => {
      if (index % Math.abs(step) === 0) return start + index;
    })
    .filter((item) => Boolean(item) === true);
};

console.log(range(5, 2, -1));

const sum = (numbers) => {
  let number = 0;

  for (let num of numbers) {
    number += num;
  }

  return number;
};
console.log(sum(range(1, 10)));
