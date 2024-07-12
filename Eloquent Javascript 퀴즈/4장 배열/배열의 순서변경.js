const reverseArray = (array) => {
  let newArray = [];
  for (let i of array) {
    newArray.unshift(i);
  }

  return newArray;
};

console.log(reverseArray([1, 2, 3]));
