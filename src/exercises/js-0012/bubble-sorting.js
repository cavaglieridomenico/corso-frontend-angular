export const getBubbleSort = (list) => {
  let changed;
  let temp;
  for (let i = 0; i < list.length - 1; i++) {
    changed = false;
    for (let j = 0; j < list.length - i - 1; j++) {
      if (list[j] > list[j + 1]) {
        temp = list[j];
        list[j] = list[j + 1];
        list[j + 1] = temp;
        changed = true;
      }
    }
    if (changed === false) break;
  }
  return list;
};
