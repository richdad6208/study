export class Stack {
  constructor(array) {
    this.array = array;
  }

  push(item) {
    this.array.push(item);
  }

  pop() {
    this.array.pop();
  }

  peek() {
    console.log(this.array.at(-1));
  }

  size() {
    console.log(this.array.length);
  }

  clear() {
    this.array = [];
  }

  isEmpty() {
    console.log(this.array.length === 0);
  }

  print() {
    console.log(this.array.toString());
  }
}
