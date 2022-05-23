import { getMergeSort } from "../merge-sorting";

const numbers = [90, 77, 80, 9];

test("it should return a sorted list", () => {
  expect(getMergeSort([90, 77, 150, 34, 3, 80, 9], 0, 6)).toStrictEqual([
    3, 9, 34, 77, 80, 90, 150,
  ]);
  expect(getMergeSort([90, 77, 80, 9], 0, 3)).toStrictEqual([9, 77, 80, 90]);
  expect(getMergeSort([100, 1, 20, 50, 12], 0, 4)).toStrictEqual([
    1, 12, 20, 50, 100,
  ]);
  expect(getMergeSort([900, 787, 8001, 9], 0, 3)).toStrictEqual([
    9, 787, 900, 8001,
  ]);
});
