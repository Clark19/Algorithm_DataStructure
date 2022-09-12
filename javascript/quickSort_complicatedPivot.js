function quickSort_complicatedPivot(
  arr,
  leftIdx = 0,
  rightIdx = arr.length - 1
) {
  if (leftIdx >= rightIdx) return arr;

  const pivotIdx = partition(arr, leftIdx, rightIdx);
  quickSort_complicatedPivot(arr, leftIdx, pivotIdx - 1);
  quickSort_complicatedPivot(arr, pivotIdx + 1, rightIdx);

  return arr;
}

const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

function partition(arr, leftIdx, rightIdx) {
  const pivotObj = getPivot(arr, leftIdx, rightIdx);
  swap(arr, leftIdx, pivotObj.idx);
  const pivot = arr[leftIdx]; //pivotObj.value;
  let swapIdx = leftIdx; //pivotObj.idx + 1;

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
  let pivotIdx = leftIdx;
  let pivotValue = arr[pivotIdx];
  if (rightIdx - leftIdx <= 1) return { value: pivotValue, idx: pivotIdx };

  const midIdx = leftIdx + Math.floor((rightIdx - leftIdx) / 2);
  const arrToSort = [
    { value: arr[leftIdx], idx: leftIdx },
    { value: arr[midIdx], idx: midIdx },
    { value: arr[rightIdx], idx: rightIdx },
  ];
  arrToSort.sort((a, b) => a.value - b.value);

  return { value: arrToSort[1].value, idx: arrToSort[1].idx };
}

module.exports = quickSort_complicatedPivot;
