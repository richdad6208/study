var funcs = [];
for (var i = 0; i < 3; i++) {
  funcs[i] = (function () {
    let _id = i;

    return function () {
      return _id;
    };
  })();
}

for (var j = 0; j < funcs.length; j++) {
  console.log(funcs[j]());
}
