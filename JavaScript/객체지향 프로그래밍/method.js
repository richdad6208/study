const handleConsole = () => {
  console.log(this.name);
};

const player = { name: "jaesung", handleConsole };

handleConsole.call(player, "");
