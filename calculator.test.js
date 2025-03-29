import calculator from "./calculator.js";

describe("calcuator analogy", () => {
  let Value;
  beforeAll(() => {
    Value = new calculator(2, 3);
  });
  test("addition", () => {
    expect(Value.addition()).toEqual(5);
  });
  test("subtraction", () => {
    expect(Value.subtract()).toEqual(-1);
  });
  test("multiplication", () => {
    expect(Value.multiplication()).toEqual(6);
  });
  test("division", () => {
    expect(Value.division()).toEqual(0.6666666666666666);
  });
});
