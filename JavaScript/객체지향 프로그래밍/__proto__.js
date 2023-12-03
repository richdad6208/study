// const obj = {};
// const parent = { x: 1 };

// obj.__proto__ = parent;

// console.log(obj.x);

// const person = { name: "lee" };

// console.log(person.hasOwnProperty("__proto__"));

// console.log(Object.getOwnPropertyDescriptors(Object.prototype, "__proto__"));

// console.log({}.__proto__ === Object.prototype);

const obj = {};
const parent = { x: 1 };
Object.getPrototypeOf(obj);
Object.setPrototypeOf(obj, parent);

console.log(obj.x);
