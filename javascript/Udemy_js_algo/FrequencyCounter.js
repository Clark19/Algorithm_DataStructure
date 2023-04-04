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

  for (const key in fCnt1) {
    if (!(key**2 in fCnt2))
  }
  return true

}

console.log(same([1,2,3,2,5], [9,1,4,4,25]))
console.log(same([1,2,3,2,5], [9,1,4,4,11]))

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
