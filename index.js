class Calc {
  constructor(num) {
    this.num = num;
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

const result = new Calc(1)
  .add(3)
  .subtract(3)
  .multiply(2)
  .divide(3);
console.log(result.num);
