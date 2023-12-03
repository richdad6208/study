let count = 0;
const timeId = setInterval(() => {
  count++;
  console.log(count);
  if (count === 10) clearInterval(timeId);
}, 2000);
