function getDate(string) {
  let [_, month, day, year] = /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string);
  return new Date(year, month - 1, day);
}

console.log(getDate("1-30-2003"));

console.log(
  "Liskov, Barbara\nMcCarthy, John\nWadler, Philip".replace(
    /(\w+), (\w+)/g,
    "$2 $1"
  )
);

let s = "the cia and fbi";

console.log(
  s.replace(/\b(fbi|cia)\b/g, (str) => {
    let upper = str[0].toUpperCase();
    let rest = str.slice(1);
    return upper + rest;
  })
);

const stock = "1 lemon, 2 cabbages, and 101 eggs";
function minusOne(match, amount, unit) {
  amount = Number(amount) - 1;
  if (amount == 1) {
    unit = unit.slice(0, unit.length - 1);
  } else if (amount == 0) {
    amount = "no";
  }
  return amount + " " + unit;
}

console.log(stock.replace(/(\d+) (\w+)/g, minusOne));

let name = "harry";
let text = "Harry is a suspicious character.";
let regexp = new RegExp("\\b(" + name + ")\\b", "gi");
console.log(text.replace(regexp, "_$1_"));
