export const getSelectionSort = (list) => {
  for (let i = 0; i < list.length - 1; i++) {
    let minId = i;
    for (let j = i + 1; j < list.length; j++) {
      if (list[j] < list[minId]) {
        minId = j;
      }
    }
    let temp = list[minId];
    list[minId] = list[i];
    list[i] = temp;
  }
  return list;
};
