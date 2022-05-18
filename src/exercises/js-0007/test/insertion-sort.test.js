import { getInsertionSort } from "../insertion-sorting";

const numbers = [90, 77, 80, 9];

test("it should return a sorted list", () => {
  expect(getInsertionSort([90, 77, 150, 34, 3, 80, 9])).toStrictEqual([
    3, 9, 34, 77, 80, 90, 150,
  ]);
  expect(getInsertionSort([90, 77, 80, 9])).toStrictEqual([9, 77, 80, 90]);
  expect(getInsertionSort([100, 1, 20, 50, 12])).toStrictEqual([
    1, 12, 20, 50, 100,
  ]);
  expect(getInsertionSort([900, 787, 8001, 9])).toStrictEqual([
    9, 787, 900, 8001,
  ]);
});
