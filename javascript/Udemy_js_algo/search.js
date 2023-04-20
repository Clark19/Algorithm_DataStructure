/* Linear Search Exercise
 - https://coupang.udemy.com/course/best-javascript-data-structures/learn/quiz/5338839#learning-tools
Write a function called linearSearch which accepts an array and a value, and returns the index at which the value exists. If the value does not exist in the array, return -1.

Don't use indexOf to implement this function!

Examples:
linearSearch([10, 15, 20, 25, 30], 15) // 1
linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4) // 5
linearSearch([100], 100) // 0
linearSearch([1,2,3,4,5], 6) // -1
linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10) // -1
linearSearch([100], 200) // -1
*/
function linearSearch(arr, number){
  // add whatever parameters you deem necessary - good luck!\
  for (let i=0; i<arr.length; i++) {
      if (arr[i] === number) return i
  }
  return -1
}


/* Binary Search Exercise
 - https://coupang.udemy.com/course/best-javascript-data-structures/learn/quiz/5338841#learning-tools
Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return -1.

This algorithm should be more efficient than linearSearch - you can read how to implement it here - https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search and here - https://www.topcoder.com/community/data-science/data-science-tutorials/binary-search/
*/
function binarySearch(arr, number){
  // add whatever parameters you deem necessary - good luck!
  let left = 0
  let right = arr.length - 1
  let middle = Math.floor((left+right)/2)
  while (left <= right) {
    if (arr[middle] === number) return middle
    if (arr[middle] < number)
      left = middle + 1
    else
      right = middle - 1
    middle = Math.floor((left+right)/2)
  }

  return -1
}

console.log(binarySearch([1,2,3,4,5],2)) // 1
console.log(binarySearch([1,2,3,4,5],3)) // 2
console.log(binarySearch([1,2,3,4,5],5)) // 4
console.log(binarySearch([1,2,3,4,5],6)) // -1
console.log(binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 10)) // 2
console.log(binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 95)) // 16
console.log(binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 100)) // -1