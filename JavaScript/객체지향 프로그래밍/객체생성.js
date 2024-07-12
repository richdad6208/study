function shouting() {
  console.log(`${this.name}!! I am sparta`);
}

const player = { name: "jaesung", shouting };

const copiedPlayer = Object.create(player);

copiedPlayer.shouting();

console.log([1, 2, 3, 4].toString());
