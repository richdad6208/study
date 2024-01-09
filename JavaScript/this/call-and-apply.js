function changeArray() {
  const arr = Array.prototype.slice.apply(arguments);
  console.log(arr);
}

changeArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
