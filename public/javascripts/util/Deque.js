class Deque {
  constructor(arr) {
    this.arr = arr;
  }
  rotateToLeft() {
    this.arr.push(this.arr[0]);
    this.arr.splice(0, 1);
  }
  rotateToRight() {
    this.arr.unshift(this.arr[this.arr.length - 1]);
    this.arr.splice(this.arr.length - 1, 1);
  }
}

export { Deque };
