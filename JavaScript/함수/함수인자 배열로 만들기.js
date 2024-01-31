function makeArgumentsArray() {
  const arr = Array.prototype.slice.call(arguments);
  console.log(arr);
}

function makeArgumentsArray2() {
  const arr = Array.from(arguments);
  console.log(arr);
}
