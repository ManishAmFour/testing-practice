class calculator {
  constructor(first, second) {
    this.first = first;
    this.second = second;
  }
  addition() {
    return this.first + this.second;
  }
  subtract() {
    return this.first - this.second;
  }
  multiplication() {
    return this.first * this.second;
  }
  division() {
    return this.first / this.second;
  }
}

export default calculator;
