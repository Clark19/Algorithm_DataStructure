// 빈도수 세기 패턴
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