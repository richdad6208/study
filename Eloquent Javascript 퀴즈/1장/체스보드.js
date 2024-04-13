const str = `# # # #`;
const space = ` `;
let count = 0;

while (count < 9) {
  count++;
  if (count % 2 !== 0) {
    console.log(space + str);
  }

  console.log(str);
}
