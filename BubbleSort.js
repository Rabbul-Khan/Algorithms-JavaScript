const bubbleSort = (arr) => {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  let noSwap;

  for (let i = arr.length; i > 0; i--) {
    noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwap = false;
      }
    }
    if (noSwap) {
      break;
    }
  }
  return arr;
};

const arr = [
  10, 4, 3, 67, 45, 32, -234432, 2, 5, 5, 5, -3, 3, 3, 2, -2, 2, 2, 2, -2, 234,
];
console.log(bubbleSort(arr));
console.log('end');
