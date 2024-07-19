let input = "A string with 3 numbers in it... 42 and 88.";
let number = /\b\d+\b/g;
let match;
while ((match = number.exec(input))) {
  console.log("Found", match[0], "at", match.index);
}

function parseINI(string) {
  let result = {};
  let section = result;
  string.split(/\r?\n/).forEach((line) => {
    let match;
    if ((match = line.match(/^(\w+)=(.*)$/))) {
      section[match[1]] = match[2];
    } else if ((match = line.match(/^\[(.*)\]$/))) {
      section = result[match[1]] = {};
    } else if (!/^\s*(;.*)?$/.test(line)) {
      throw new Error("Line '" + line + "' is not valid.");
    }
    return result;
  });
}
