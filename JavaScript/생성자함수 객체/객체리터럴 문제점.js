const obj1 = {
  radius: 5,
  getDiameter() {
    return 2 * this.radius;
  },
};
const obj2 = {
  radius: 10,
  getDiameter() {
    return 2 * this.radius;
  },
};

// 객체리터럴의 단점: 코드의 중복
