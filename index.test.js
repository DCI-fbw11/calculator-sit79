const Calc = require("./index");

describe("Calculator tests", () => {
  test("should be able to add 1 + 1", () => {
    expect(new Calc(1).add(1)).toEqual({ num: 2 });
  });

  test("should be able to add 1 + 1 using an alias", () => {
    expect(new Calc(1).plus(1)).toEqual({ num: 2 });
  });

  test("should be able to add multiple numbers", () => {
    expect(new Calc(1).add(2).add(3)).toEqual({ num: 6 });
  });

  test("should be able to subtract 1 from 1", () => {
    expect(new Calc(1).subtract(1)).toEqual({ num: 0 });
  });

  test("should be able to subtract multiple numbers", () => {
    expect(new Calc(6).subtract(2).subtract(3)).toEqual({ num: 1 });
  });

  test("should be able to multiply 2 by 3", () => {
    expect(new Calc(2).multiply(3)).toEqual({ num: 6 });
  });

  test("should be able to multiply multiple numbers", () => {
    expect(new Calc(3).multiply(3).multiply(3)).toEqual({ num: 27 });
  });

  test("should be able to divide 2 by 3", () => {
    expect(new Calc(6).divide(3)).toEqual({ num: 2 });
  });

  test("should be able to divide multiple numbers", () => {
    expect(new Calc(81).divide(3).divide(3)).toEqual({ num: 9 });
  });

  test("Dont accept strings", () => {
    expect(() => new Calc(100).add("onehundred")).toThrow(
      "input must be a number"
    );
  });

  test("Dont accept object", () => {
    expect(() => new Calc(100).add({ num: "onehundred" })).toThrow(
      "input must be a number"
    );
  });

  test("should be able to perform an addition and a subtraction", () => {
    expect(new Calc(81).add(3).subtract(3)).toEqual({ num: 81 });
  });

  test("should be able to perform multiple additions and subtractions", () => {
    expect(
      new Calc(18)
        .add(3)
        .subtract(6)
        .add(5)
        .subtract(10)
    ).toEqual({ num: 10 });
  });
});
