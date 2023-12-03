const closure = (function () {
  const a = 2;
  return function () {
    return a * 1;
  };
})();

console.log(closure());
