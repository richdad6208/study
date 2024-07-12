const player = { type: "black" };

player.prototype.toString = function () {
  return `${this.type} rabbit`;
};

console.log(String(player));
