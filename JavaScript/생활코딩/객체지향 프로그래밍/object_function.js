let kim = { name: "kim", first: 10, second: 20 };
let lee = { name: "lee", first: 10, second: 10 };
function sum(prefix) {
  return prefix + (this.first + this.second);
}
// sum();
sum.call(kim); //this => kim
console.log("sum.call(kim) ", sum.call(kim, "=> ")); //apply
console.log("sum.call(lee)", sum.call(lee, ": "));
