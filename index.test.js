const Calc = require("./index");

describe("Calculator tests", () => {
  test("should be able to input 1 and add 1", () => {
    expect(new Calc().input(1).add(1)).toEqual({ num: 2 });
  });

  test("should be able to add 1 + 1 using an alias", () => {
    expect(new Calc().input(1).plus(1)).toEqual({ num: 2 });
  });

  test("should be able to input 1 and add multiple numbers", () => {
    expect(
      new Calc()
        .input(1)
        .add(2)
        .add(3)
    ).toEqual({ num: 6 });
  });

  test("should be able to subtract 1 from 1", () => {
    expect(new Calc().input(1).subtract(1)).toEqual({ num: 0 });
  });

  test("should be able to subtract multiple numbers", () => {
    expect(
      new Calc()
        .input(10)
        .subtract(2)
        .subtract(3)
    ).toEqual({ num: 5 });
  });

  test("should be able to multiply 2 by 3", () => {
    expect(new Calc().input(2).multiply(3)).toEqual({ num: 6 });
  });

  test("should be able to multiply multiple numbers", () => {
    expect(
      new Calc()
        .input(3)
        .multiply(3)
        .multiply(3)
    ).toEqual({ num: 27 });
  });

  test("should be able to divide 6 by 3", () => {
    expect(new Calc().input(6).divide(3)).toEqual({ num: 2 });
  });

  test("should be able to divide multiple times", () => {
    expect(
      new Calc()
        .input(81)
        .divide(3)
        .divide(3)
    ).toEqual({ num: 9 });
  });

  test("Dont accept strings", () => {
    expect(() => new Calc().add("onehundred")).toThrow(
      "input must be a number"
    );
  });

  test("Dont accept object", () => {
    expect(() => new Calc().add({ num: "onehundred" })).toThrow(
      "input must be a number"
    );
  });

  test("should be able to perform an addition and a subtraction", () => {
    expect(
      new Calc()
        .input(81)
        .add(3)
        .subtract(3)
    ).toEqual({ num: 81 });
  });

  test("should be able to perform multiple additions and subtractions", () => {
    expect(
      new Calc()
        .input(18)
        .add(3)
        .subtract(6)
        .add(5)
        .subtract(10)
    ).toEqual({ num: 10 });
  });
});
