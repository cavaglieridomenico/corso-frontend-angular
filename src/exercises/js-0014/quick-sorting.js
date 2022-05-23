const getPartition = (list, low, high) => {
  let pivot = list[high];

  let i = low - 1;

  for (let j = low; j <= high - 1; j++) {
    if (list[j] < pivot) {
      i++;
      let temp = list[i];
      list[i] = list[j];
      list[j] = temp;
    }
  }
  let temp = list[i + 1];
  list[i + 1] = list[high];
  list[high] = temp;
  return i + 1;
};

export const getQuickSort = (list, low, high) => {
  if (low < high) {
    let pi = getPartition(list, low, high);

    getQuickSort(list, low, pi - 1);
    getQuickSort(list, pi + 1, high);
    return list;
  }
};
