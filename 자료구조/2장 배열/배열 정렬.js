const friends = [
  { name: "John", age: 34 },
  { name: "Camila", age: 21 },
  { name: "Jack", age: 30 },
];

const compareFn = (a, b) => {
  if (a.age > b.age) {
    return 1;
  }
  if (a.age < b.age) {
    return -1;
  }
  return 0;
};

friends.sort(compareFn);

console.log(friends);
RTCRtpReceiver;
