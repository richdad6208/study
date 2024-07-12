const range = (first, second, step = 1) => {
  let end = Math.max(first, second);
  let start = Math.min(first, second);

  return Array(end - start + 1)
    .fill(undefined)
    .map((item, index) => {
      if (index % Math.abs(step) === 0) return start + index;
    })
    .filter((item) => Boolean(item) === true);
};

console.log(range(1, 5));
console.log(range(5, 1, -1));

const sum = (numbers) => {
  let number = 0;

  for (let num of numbers) {
    number += num;
  }

  return number;
};
console.log(sum(range(1, 10)));
