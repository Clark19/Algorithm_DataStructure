// 빈도수 세기 패턴 = Frequency Counter Pattern
// O(n^2)을 O(n)으로 성능 개선한 버전
function same(arr1, arr2) {
  if (arr1.length != arr2.length) return true;

  let fCnt1 = {}
  let fCnt2 = {}
  for (const el of arr1)
      fCnt1[el] = (fCnt1[el] || 0) + 1    
  
  for (const el of arr2)
      fCnt2[el] = (fCnt2[el] || 0) + 1
  
  for (const key in fCnt1) {
      if (!(key**2 in fCnt2)) return false
      if (fCnt1[key] !== fCnt2[key**2]) return false
  
  }

  return true
}
console.log(same([1,2,3,2,5], [9,1,4,4,25]))
console.log(same([1,2,3,2,5], [9,1,4,4,11]))

/* Frequency Counter - sameFrequency
 - https://coupang.udemy.com/course/best-javascript-data-structures/learn/quiz/5338795#overview
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:
Time: O(N)
*/
function sameFrequency(m, n){
  // good luck. Add any arguments you deem necessary.
  m = m.toString()
  n = n.toString()
  if (m.length !== n.length) return false
  
  let fCnt = {}
  for (const ch of m) {
      fCnt[ch] ? fCnt[ch]++ : fCnt[ch] = 1;
  }
  
  for (const ch of n) {
      if (!fCnt[ch]) return false
      fCnt[ch]--
  }
  
  return true
}
sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false

// 애너그램
function validAnagram(str1, str2){
  // add whatever parameters you deem necessary - good luck!
  if (str1.length !== str2.length) return false;
  
  const lookup={}
  for (const val of str1)
    lookup[val] ? lookup[val]++ : lookup[val] = 1;
    // lookup[val] = (lookup[val] || 0) + 1

  for (const val of str2) {
      if (!lookup[val]) return false
      lookup[val]--;
  }
  
  return true
} 

console.log(validAnagram('', '')) // true
console.log(validAnagram('aaz', 'zza')) // false
console.log(validAnagram('anagram', 'nagaram')) // true
console.log(validAnagram("rat","car")) // false
console.log(validAnagram('awesome', 'awesom')) // false
console.log(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana')) // false
console.log(validAnagram('qwerty', 'qeywrt')) // true
console.log(validAnagram('texttwisttime', 'timetwisttext')) // trueae

// 다중 포인터 패턴 = multiple pointers pattern
// 고유 값 종류 세기 - 정렬된 배열에서만 가능한 코드
function countUniqueValues(arr) {
  if (arr.length === 0) return 0;

  // 방식1 : 내가 푼 버전 - 중첩 루프라 O(n^2)처럼 보이지만 사실 O(n)이다.
  // let cnt = 0;
  // for (let i=0; i<arr.length; i++) {
  //   // console.log('a', arr[i])
  //   for (let j=i+1; j<arr.length; j++) {
  //     if(arr[i] === arr[j]) {
  //       // console.log('b', arr[j])
  //       continue
  //     }
  //     cnt++
  //     i = j-1
  //     break;
  //   }

  // }
  // return ++cnt

  // 방식2 : 리팩토링 버전 - O(n)
  let i = 0
  for (let j=1; j<arr.length; j++) {
    if (arr[i] !== arr[j])
      arr[++i] = arr[j]
  }

  return i+1
}

console.log(countUniqueValues([1,1,1,1,1,2])) // 2
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])) // 7
console.log(countUniqueValues([])) // 0
console.log(countUniqueValues([-2,-1,-1,0,1])) // 4

/*
Multiple Pointers - averagePair
 - https://coupang.udemy.com/course/best-javascript-data-structures/learn/quiz/5338799#overview
Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

Bonus Constraints:
Time: O(N)
Space: O(1)
*/
function averagePair(arr, num){
  // add whatever parameters you deem necessary - good luck!
  // 방식1. 처음 내가 푼 버전.
//   let avg = 0
//   let i=0
//   let j = 0
//   while (i < arr.length-1) {
//       j++
//       if (j === arr.length) {
//           i++
//           j=i+1
//       }
//       avg = (arr[i]+arr[j])/2

//       if ( avg === num) {
//           return true
//       }
//       else if (avg > num) {
//           i++
//           j=i
//       }
//   }
  
//   return false

    
    // 방식2. 가독성 개선 버전
    let avg = 0
    let start = 0
    let end = arr.length - length-1
    while (start < end) {
        avg = (arr[start] + arr[end])/2
        if(avg === num) return true
        else if (avg < num) start++
        else end--
    }
    
    return false
}
averagePair([1,2,3],2.5) // true
averagePair([1,3,3,5,6,7,10,12,19],8) // true
averagePair([-1,0,3,4,5,6], 4.1) // false
averagePair([],4) // false


/* Frequency Counter / Multiple Pointers - areThereDuplicates
 - https://coupang.udemy.com/course/best-javascript-data-structures/learn/quiz/5338797#overview
Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

Restrictions:
Time - O(n)
Space - O(n)

Bonus:
Time - O(n log n)
Space - O(1)
*/
/* 한문제를 여러가지 방식으로 풀어보기 */
// 문제 : 주어진 인자들 중 중복된 값이 있는지 확인하라.
// 인자는 숫자, 문자열, 불리언 값 등이 될 수 있다.
// 인자의 개수는 제한되어 있지 않다.
// 중복된 값이 있으면 true, 없으면 false를 반환한다.
// 인자의 개수가 0개이면 false를 반환한다.
// 인자의 개수가 1개이면 false를 반환한다.
// 인자의 개수가 2개 이상이면 두 인자가 같은지 비교하여 true 또는 false를 반환한다.

// 방식1: Frequency Counter
// Time - O(n), Space - O(n
function areThereDuplicates(...args) {
  // good luck. (supply any arguments you deem necessary.)
  if (args.length === 0) return false
  if (args.length === 1) return false

  let lookup = {}
  for (const val of args) {
    if (lookup[val]) return true
    lookup[val] = 1;
  }

  return false
}

// 방식2: Multiple Pointers
// Time O(n log n), Space O(1)
function areThereDuplicates(...args) {
  // Two pointers
  if (typeof args[0] == "number")
      args.sort((a,b) => a > b);
  else if (typeof args[0] == "string")
    args.sort((a,b) => a.localeCompare(b))

  let start = 0;
  let next = 1;
  while(next < args.length){
    if(args[start] === args[next]){
        return true
    }
    start++
    next++
  }


  return false
}

// 방식3 : 1줄 코딩
function areThereDuplicates(...args) {
    return new Set(args).size !== args.length
}
areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true 


/* Multiple Pointers - isSubsequence
 - https://coupang.udemy.com/course/best-javascript-data-structures/learn/quiz/5338801#overview
Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

Examples:

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)
Your solution MUST have AT LEAST the following complexities:

Time Complexity - O(N + M)

Space Complexity - O(1)
*/
function isSubsequence(str1, str2) {
  // good luck. Add any arguments you deem necessary.
//   let s=0
//   let n=s
//   let ch = ''
//   for (let i = 0; i<str1.length; i++) {
//       ch = str1[i]
      
//       if (ch == str2[n]) {
//           s++
//           n = s
//       } else {
//           n++
//       }
//       if (i === str1.length-1 && s >= str2.length) return true
//       if (n >= str2.length) return false
      
//   }
  
//   return true
  

    // 방식2. 가독성 개선 버전
    // if (!str1) return true
    // let i = 0
    // let j = 0
    // while (j < str2.length) {
    //     if (str1[i] === str2[j]) i++
    //     if (i === str1.length) return true
    //     j++
    // }

    // return false


    // 방식3. 재귀 방식 space O(1) 이 아님.
    if (str1.length === 0) return true
    if (str2.length === 0) return false
    if (str1[0] === str2[0]) return isSubsequence(str1.slice(1), str2.slice(1))

    return isSubsequence(str1, str2.slice(1))
}

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false 
console.log(isSubsequence('yo', 'yo')); // T
console.log(isSubsequence('aaa', "Madam, I'm Adam")) // T



/* Sliding Window - maxSubarraySum
 - https://coupang.udemy.com/course/best-javascript-data-structures/learn/quiz/5338803#overview
Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

Constraints:
Time Complexity - O(N)
Space Complexity - O(1)
*/
function maxSubarraySum(intArr, num){
    // add whatever parameters you deem necessary - good luck!
      if (intArr.length < num) return null
      // let tempSum = intArr.slice(0, num).reduce((a,b) => a+b, 0)
      let tempSum = 0
      for (let i=0; i<num; i++) {
          tempSum += intArr[i]
      }
      let max = tempSum
  
      for (let i=num; i<intArr.length; i++) {
          tempSum += -intArr[i-num] + intArr[i]
          max = Math.max(max, tempSum)
      }
  
      return max
  }
  console.log(maxSubarraySum([100,200,300,400], 2)) // 700
  console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4))  // 39 
  console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2)) // 5
  console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2)) // 5
  console.log(maxSubarraySum([2,3], 3)) // null


/* 
Sliding Window - minSubArrayLen
 - https://coupang.udemy.com/course/best-javascript-data-structures/learn/quiz/5338805#learning-tools
Write a function called minSubArrayLen which accepts two parameters
 - an array of positive integers and a positive integer.

 This function should return the minimal length of a contiguous subarray
of which the sum is greater than or equal to the integer passed to the function.
If there isn't one, return 0 instead.

Time Complexity - O(n)
Space Complexity - O(1)
*/
function minSubArrayLen(nums, sum) {
  let total = 0
  let start = 0
  let end = 0
  let minLen = Infinity

  while (start < nums.length) {
    if (total < sum && end < nums.length) {
      total += nums[end++]
    } else if (total >= sum) {
      minLen = Math.min(minLen, end - start)
      total -= nums[start++]
    } else 
      break
  }

  return minLen === Infinity ? 0 : minLen
}
console.log(minSubArrayLen([2,3,1,2,4,3], 7)) // 2 -> because [4,3] is the smallest subarray
console.log(minSubArrayLen([2,1,6,5,4], 9)) // 2 -> because [5,4] is the smallest subarray
console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52)) // 1 -> because [62] is greater than 52
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],39)) // 3
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],55)) // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)) // 2
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],95)) // 0


/* 
Sliding Window - findLongestSubstring
Write a function called findLongestSubstring, which accepts a string
and returns the length of the longest substring with all distinct characters.

Time Complexity - O(n)
*/
function findLongestSubstring(str){
  // add whatever parameters you deem necessary - good luck!
  let maxLen = -Infinity
  let start = 0
  let end = 0
  let arr = []
  let idx = -1
  while (end < str.length) {
    idx = arr.indexOf(str[end])
    if (idx === -1 && end === str.length - 1) {
      arr.push(str[end++])
      maxLen = Math.max(maxLen, arr.length)
    } else if (idx >= -1) {
      maxLen = Math.max(maxLen, arr.length)
      start = idx
      arr.splice(0, start + 1)
    }
    arr.push(str[end++])
  }

  return maxLen === -Infinity ? str.length : maxLen;
}

console.log(findLongestSubstring('')) // 0
console.log(findLongestSubstring('rithmschool')) // 7
console.log(findLongestSubstring('thisisawesome')) // 6
console.log(findLongestSubstring('thecatinthehat')) // 7
console.log(findLongestSubstring('bbbbbb')) // 1
console.log(findLongestSubstring('longestsubstring')) // 8
console.log(findLongestSubstring('thisishowwedoit')) // 6