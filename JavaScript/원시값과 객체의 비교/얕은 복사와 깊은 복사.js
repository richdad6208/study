const _ = require("lodash");

const obj = {
  x: {
    y: 10,
  },
};

const copy = { ...obj };
console.log(copy === obj);
console.log(copy.x);

const copy2 = _.cloneDeep(obj);

console.log(copy2 === obj);
console.log(copy2.x === obj.x);

const copy3 = { ...obj };

console.log(copy3 === obj);
console.log("real", copy3.x === obj.x);
