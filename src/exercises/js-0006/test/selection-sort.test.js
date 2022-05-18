import { getSelectionSort } from "../selection-sorting";

const numbers = [90, 77, 80, 9];

test("it should return a sorted list", () => {
  expect(getSelectionSort([90, 77, 80, 9])).toStrictEqual([9, 77, 80, 90]);
  expect(getSelectionSort([100, 1, 20, 50, 12])).toStrictEqual([
    1, 12, 20, 50, 100,
  ]);
  expect(getSelectionSort([900, 787, 8001, 9])).toStrictEqual([
    9, 787, 900, 8001,
  ]);
});
