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
let numbers = new calculator(18, 2);

console.log(numbers.addition());
console.log(numbers.subtract());

console.log(numbers.multiplication());
console.log(numbers.division());
