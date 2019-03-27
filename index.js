class Calc {
  constructor() {
    this.num = 0;
  }

  input(num) {
    this.throwOnBadDatatype(num);
    this.num = num;
    return this;
  }

  add(num) {
    this.throwOnBadDatatype(num);
    this.num = this.num + num;
    return this;
  }

  plus(num) {
    return this.add(num);
  }

  subtract(num) {
    this.throwOnBadDatatype(num);
    this.num = this.num - num;
    return this;
  }

  multiply(num) {
    this.throwOnBadDatatype(num);
    this.num = this.num * num;
    return this;
  }

  divide(num) {
    this.throwOnBadDatatype(num);
    this.num = this.num / num;
    return this;
  }

  throwOnBadDatatype(num) {
    if (typeof num !== "number") {
      throw new Error("input must be a number");
    }
  }
}

module.exports = Calc;

const result = new Calc()
  .input(10)
  .subtract(3)
  .subtract(2)
  .multiply(34)
  .divide(12);
console.log(result.num);
