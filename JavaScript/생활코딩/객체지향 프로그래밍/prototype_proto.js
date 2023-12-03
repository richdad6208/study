function Person(name, first, second) {
  this.name = name;
  this.first = first;
  this.second = second;
}
Person.prototype.sum = function () {
  return console.log("hellow");
};

var kim = new Person("kim", 10, 20);

var lee = new Person("lee", 10, 10);

console.log(kim.name);

kim.sum();
