function quickSort_simplePivot(arr, leftIdx = 0, rightIdx = arr.length - 1) {
  if (leftIdx >= rightIdx) return arr;

  const pivotIdx = partition(arr, leftIdx, rightIdx);
  quickSort_simplePivot(arr, leftIdx, pivotIdx - 1);
  quickSort_simplePivot(arr, pivotIdx + 1, rightIdx);

  return arr;
}

const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

function partition(arr, leftIdx, rightIdx) {
  const pivotObj = getPivot(arr, leftIdx, rightIdx);
  const pivot = pivotObj.value;
  let swapIdx = pivotObj.idx;

  for (let i = leftIdx + 1; i <= rightIdx; i++) {
    if (arr[i] < pivot) {
      swapIdx++;
      if (swapIdx !== i) swap(arr, swapIdx, i);
    }
  }
  swap(arr, leftIdx, swapIdx);
  return swapIdx;
}

function getPivot(arr, leftIdx, rightIdx) {
  return { value: arr[leftIdx], idx: leftIdx };
}

// // 테스트 코드
// const arr = [
//   [3, 1, 2, 5, 4],
//   [3, 6, 1, 3, 2, 5, 4],
//   [3, 1, 3, 2, 5, 4],
//   [2, 2, 2],
//   [3, 1, 2],
//   [-3, -1, -2],
//   [5, 7, 9, 0, 3, 1, 6, 2, 4, 8],
//   [100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23],
// ];

// arr.forEach((el) => {
//   console.log("original arr:", el);
//   console.log("after qsort:", quickSort_simplePivot(el));
//   cnt = 0;
// });

module.exports = quickSort_simplePivot;
