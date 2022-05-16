import { getSum } from "./js-0001.js";

test("Sum of two numbers", () => {
  expect(getSum(1, 2)).toBe(3);
  expect(getSum(3, 2)).toBe(5);
  expect(getSum(3, 12)).toBe(15);
});
