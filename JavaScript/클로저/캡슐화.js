const Person = (function () {
  let _age;

  function Person(name, age) {
    this.name = name;
    _age = age;
  }

  Person.prototype.sayHi = function () {
    console.log(`Hello your name is ${this.name}. your age is ${_age}`);
  };

  return Person;
})();

const jeasung = new person("Jeasung", 20);

jeasung.sayHi();
console.log(jeasung._age);
