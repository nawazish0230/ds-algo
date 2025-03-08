const partion = (arr, low, high) => {
  const pivot = arr[low];
  let i = low,
    j = high;

  while (i < j) {
    while (arr[i] <= pivot && i <= high - 1) {
      i++;
    }
    while (arr[j] > pivot && j >= low + 1) {
      j--;
    }
    if (i < j) [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  [arr[low], arr[j]] = [arr[j], arr[low]];
  return j;
};

const quickSort = (arr, low, high) => {
  if (low < high) {
    const pIndex = partion(arr, low, high);
    quickSort(arr, low, pIndex - 1);
    quickSort(arr, pIndex + 1, high);
  }
};

const array = [4, 6, 2, 5, 7, 9, 1, 3];
quickSort(array, 0, array.length - 1);
console.log(array);
