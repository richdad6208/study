import { Stack } from "./스택.mjs";

function twoBinaryChanger(tenBinary) {
  const r = [];
  let n = tenBinary;
  const stack = new Stack(r);

  while (n >= 1) {
    if (n === 1) {
      stack.push(1);
      break;
    } else if (n % 2 !== 0) {
      stack.push(1);
      n = Math.floor(n / 2);
    } else {
      stack.push(0);
      n = Math.floor(n / 2);
    }
  }

  return r.reverse().join("");
}

console.log(twoBinaryChanger(500));

// 교재 코드
function divideBy2(decNumber) {
  const remStack = new Stack();
  rem, (binaryString = "");

  while (decNumber > 0) {
    rem = Math.floor(decNumber % 2);
    remStack.push(rem);
    decNumber = Math.floor(decNumber / 2);
  }

  while (!remStack.isEmpty()) {
    binaryString += remStack.pup().toString();
  }

  return binaryString;
}
