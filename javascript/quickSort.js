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


/** 퀵소트
 * @isMutable 기본값=true라서 원본 배열 변경 함(in-place 버전).
 *              false 값으로 변경시 원본 배열을 수정하지 않고, 새로운 배열 생성해 리턴(non in-place 버전)
 */
function quickSort(arr, isMutable=true, left=0, right=arr.length-1) {
  if (left >= right) return arr;

  const partitionIdx = divide(arr, left, right); // pivotIdx = partition()
  if (isMutable) { // == in-place
    quickSort(arr, isMutable, left, partitionIdx - 1);
    quickSort(arr, isMutable, partitionIdx, right);

    return arr;
  } else { // Immutable == non-inplace
    const leftArr = quickSort(arr.slice(0, pivotIdx), isMutable)
    const rightArr = quickSort(arr.slice(pivotIdx), isMutable)
  
    // return [...leftArr, ...rightArr]
    return leftArr.concat(rightArr)
  }
}

const swap = (arr, idx1, idx2) => [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];

/** https://im-developer.tistory.com/135 */
function divide(array, left, right) {
  const mid = Math.floor((left + right) / 2);
  const pivot = array[mid];

  while (left <= right) {
    while (array[left] < pivot) left++;
    while (array[right] > pivot) right--;

    if (left <= right)
      swap(array, left++, right--);
  }

  return left;
}


// const assert = require("assert")
// import assert from "assert"

// const testData = [
//   { input: [3, 1, 2, 5, 4], answer: [1, 2, 3, 4, 5] },
//   { input: [3, 6, 1, 3, 2, 5, 4], answer: [1, 2, 3, 3, 4, 5, 6] },
//   { input: [3, 1, 3, 2, 5, 4], answer: [1, 2, 3, 3, 4, 5] },
//   { input: [2, 2, 2], answer: [2, 2, 2] },
//   { input: [3, 1, 2], answer: [1, 2, 3] },
//   { input: [-3, -1, -2], answer: [-3, -2, -1] },
//   {
//     input: [5, 7, 9, 0, 3, 1, 6, 2, 4, 8],
//     answer: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
//   },
//   {
//     input: [100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23],
//     answer: [-3, 1, 2, 2, 3, 4, 5, 6, 9, 23, 100],
//   },

// 추후에 안보고 생객했었던 검증용 데이터들
// {input: [0] , answer: [0]},
// {input: [1,1] , answer: [1,1]},
// {input: [-3] , answer: [-3]},
// {input: [-2, -4] , answer: [-4, -2]},
// {input: [3,2,1] , answer: [1,2,3]},
// {input: [3,1,2] , answer: [1,2,3]},
// {input: [3,3,2,1] , answer: [1,2,3,3]},
// {input: [3,2,3,1 ] , answer: [1,2,3,3]},
// {input: [100, -3, 0,1,5,2] , answer: [-3, 0, 1,2,5,100]},
// ];


// let output = null
// testData.forEach(data => {
//   output = quickSort(data.input)
//   console.log(output)
//   assert.deepStrictEqual(output, data.answer)
// });

// console.log("good")


module.exports = quickSort;
