const isEven = (number) => {
  if (number < 0) return "음수";

  if (number === 0) return "짝수";

  if (number === 1) return "홀수";

  return isEven(number - 2);
};

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
