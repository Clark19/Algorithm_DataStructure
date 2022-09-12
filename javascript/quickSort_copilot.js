// 퀵 정렬 (Quick Sort) 구현하기
// 퀵 정렬은 분할 정복 알고리즘의 일종입니다.
// 퀵 정렬은 다음과 같은 순서로 동작합니다.
// 1. 리스트 안에 있는 한 요소를 고릅니다. 이렇게 고른 요소를 피벗(pivot)이라고 합니다.
// 2. 피벗 앞에는 피벗보다 값이 작은 모든 요소가 오고, 피벗 뒤에는 피벗보다 값이 큰 모든 요소가 오도록 피벗을 기준으로 리스트를 둘로 나눕니다. 이렇게 리스트를 둘로 나누는 것을 분할(Divide)이라고 합니다.
// 3. 분할을 마친 뒤에 피벗은 더 이상 움직이지 않습니다.
// 4. 피벗을 제외한 리스트를 다시 둘로 나눕니다. 이때 피벗을 제외한 왼쪽, 오른쪽 리스트에 대해 재귀(Recursion)적으로 이 과정을 반복합니다.
// 5. 재귀가 끝나는 조건은 리스트의 크기가 0이나 1이 될 때입니다. 이때 리스트는 이미 정렬되어 있기 때문에, 재귀를 종료하고 병합(Conquer) 과정으로 돌아갑니다.
// 6. 병합 과정은 아무것도 하지 않아도 됩니다. 왜냐하면, 리스트의 크기가 0이나 1이 되면 이미 정렬된 상태이기 때문입니다.
// 7. 분할 과정에서 피벗을 제외한 왼쪽 리스트와 오른쪽 리스트는 각각 다시 피벗을 정하고, 피벗을 기준으로 왼쪽 리스트는 피벗보다 작은 값들로, 오른쪽 리스트는 피벗보다 큰 값들로 나눕니다. 이렇게 리스트를 둘로 나누는 것을 분할이라고 합니다.
// 8. 분할을 마친 뒤에 피벗은 더 이상 움직이지 않습니다.
// 9. 피벗을 제외한 리스트를 다시 둘로 나눕니다. 이때 피벗을 제외한 왼쪽, 오른쪽 리스트에 대해 재귀적으로 이 과정을 반복합니다.
// 10. 재귀가 끝나는 조건은 리스트의 크기가 0이나 1이 될 때입니다. 이때 리스트는 이미 정렬되어 있기 때문에, 재귀를 종료하고 병합 과정으로 돌아갑니다.
// 11. 병합 과정에서는 정렬된 두 개의 리스트를 합쳐서 하나의 정렬된 리스트로 만듭니다.
let cnt = 0;

function quickSort_copilot(arr, left = 0, right = arr.length - 1) {
  if (left >= right) return;
  const pivotIdx = partition(arr, left, right);
  quickSort_copilot(arr, left, pivotIdx - 1);
  quickSort_copilot(arr, pivotIdx + 1, right);
  // console.log(`${++cnt}번째, pivot=${pivotIdx},${arr[pivotIdx]}: ${arr}`);
  return arr;
}

const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

function partition(arr, left, right) {
  const pivotObj = getPivot(arr, left, right);
  swap(arr, left, pivotObj.idx);
  const pivotValue = arr[left]; //pivotObj.value;
  const swapIdx = left; //pivotObj.idx + 1;
  let low = left + 1;
  let high = right;
  while (low < high) {
    while (low <= right && arr[low] <= pivotValue) low++;
    while (high >= left + 1 && arr[high] >= pivotValue) high--;
    // while (high >= left && arr[high] >= pivotValue) high--;
    if (low < high) swap(arr, low, high);
  }
  // if (high < left) high = left;
  // if (low > right) low = right;
  // swap(arr, pivotIdx, pivotIdx < high ? high : low);
  swap(arr, swapIdx, high);
  return high;
}

function getPivot(arr, leftIdx, rightIdx) {
  // const mid = Math.floor((left + right) / 2);
  // if (arr[left] > arr[mid]) swap(arr, left, mid);
  // if (arr[left] > arr[right]) swap(arr, left, right);
  // if (arr[mid] > arr[right]) swap(arr, mid, right);
  // swap(arr, mid, right - 1);
  // return arr[right - 1];
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

module.exports = quickSort_copilot;
