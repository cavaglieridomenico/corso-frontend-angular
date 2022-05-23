import {
  getSum,
  getSub,
  getMult,
  getDiv,
  isInvalidNumber,
} from "../number-management";

/*Number validation*/
test("it should return true if the input is a valid number, otherwise false", () => {
  expect(isInvalidNumber(1)).toBe(false);
  expect(isInvalidNumber(10)).toBe(false);
  expect(isInvalidNumber("10")).toBe(true);
  expect(isInvalidNumber("Click Me!")).toBe(true);
});

/*Operation*/
test("Sum of two numbers", () => {
  expect(getSum(1, 2)).toBe(3);
  expect(getSum(3, 2)).toBe(5);
  expect(getSum(3, 12)).toBe(15);
  expect(getSum(3.2, 12)).toBe(15.2);
  expect(getSum(3, 12.4)).toBe(15.4);
});

test("Subtraction of two numbers", () => {
  expect(getSub(5, 2)).toBe(3);
  expect(getSub(7, 2)).toBe(5);
  expect(getSub(27, 12)).toBe(15);
  expect(getSub(7.5, 11.3)).toBe(-3.8);
  expect(getSub(5.8, 9.2)).toBe(-3.4);
});

test("Multiplication of two numbers", () => {
  expect(getMult(1, 3)).toBe(3);
  expect(getMult(3, 2)).toBe(6);
  expect(getMult(3, 12)).toBe(36);
  expect(getMult(7.2, 6.8)).toBe(49);
  expect(getMult(5.9, 88.7)).toBe(523.3);
});

test("Division of two numbers", () => {
  expect(getDiv(6, 2)).toBe(3);
  expect(getDiv(15, 3)).toBe(5);
  expect(getDiv(24, 12)).toBe(2);
  expect(getDiv(78.25, 5.3)).toBe(14.8);
  expect(getDiv(52.6, 8)).toBe(6.6);
});
