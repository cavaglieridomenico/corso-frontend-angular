const setMerge = (list, l, m, r) => {
  let n1 = m - l + 1;
  let n2 = r - m;

  const L = new Array(n1);
  const R = new Array(n2);

  for (let i = 0; i < n1; i++) L[i] = list[l + i];
  for (let j = 0; j < n2; j++) R[j] = list[m + 1 + j];

  let i = 0;

  let j = 0;

  let k = l;

  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      list[k] = L[i];
      i++;
    } else {
      list[k] = R[j];
      j++;
    }
    k++;
  }

  while (i < n1) {
    list[k] = L[i];
    i++;
    k++;
  }

  while (j < n2) {
    list[k] = R[j];
    j++;
    k++;
  }
};

export const getMergeSort = (list, l, r) => {
  if (l >= r) {
    return;
  }
  let m = l + parseInt((r - l) / 2);
  getMergeSort(list, l, m);
  getMergeSort(list, m + 1, r);
  setMerge(list, l, m, r);
  return list;
};
