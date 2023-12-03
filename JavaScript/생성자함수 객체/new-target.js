function Circle(radius) {
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
  if (!new.target) return new Circle(radius);
}
const circle = Circle(5);
console.log(circle);
