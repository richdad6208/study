const countBs = (str) => {
  const arr = str.split("");
  let count = 0;

  arr.forEach((item) => {
    if (item === "B") {
      count++;
    }
  });

  return console.log(count);
};

countBs("BBBBBXXDSDF");

const countChar = (str, checkChar) => {
  const arr = str.split("");
  let count = 0;

  arr.forEach((item) => {
    if (item === checkChar) {
      count++;
    }
  });

  return console.log(count);
};

countChar("CCCCSAASD", "A");
