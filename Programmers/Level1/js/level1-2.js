/** 프로그래머스 레벨 1 자바스크립트로 푼 것들 2 */

// 22일차
// 폰켓몬 https://school.programmers.co.kr/learn/courses/30/lessons/1845
function solution(nums) {
  // 1방식. 내가 푼 방식
//     const halfNum = nums.length / 2
//     const kindSet = new Set(nums)
//     const maxNumOfKind = kindSet.size
//     // maxNumOfKind could not over halfNums.
//     // console.log("maxNumOfKind, halfNum", maxNumOfKind, halfNum)
//     if (maxNumOfKind >= halfNum) return halfNum    
  
//     return maxNumOfKind;


  // 1방식. 내가 푼 방식-2
  const lenHalf = nums.length/2
  let kind = new Set(nums).size
  return lenHalf < kind ? lenHalf : kind


  // 1방식. 내가 푼 방식-3
  // const lenHalf = nums.length/2
  // let kindSet = {}; // {0:true}
  // nums.forEach((el,i) => kindSet[el] = true);
  // let kind = Object.keys(kindSet).length
  // return lenHalf < kind ? lenHalf : kind   

  
  // 2. 코드캠프 방식1
  // const answer = [];
  // for (let i=0; i<nums.length; i++) {
  //     if (!answer.includes(nums[i]) && (nums.length/2) !== answer.length) {
  //         answer.push(nums[i])
  //     }
  // }
  // // console.log(answer)
  // return answer.length
  
  
  // 3. 코드캠프 방식2
  // const answer = new Set([]);
  // for (let i=0; i<nums.length; i++) {
  //     if ((nums.length/2) !== answer.size) {
  //         answer.add(nums[i])
  //     }
  // }
  // return answer.size
  
  
  // 4. 코드캠프 방식3
//     const answer = []
//     nums.forEach((monster) => {
//         if (!answer.includes(monster) && (nums.length/2) !== answer.length) {
//             answer.push(monster)
//         }
//     })

//     return answer.length
  
  
  // 4. 코드캠프 방식4
  // const answer = new Set(nums).size
  // const limit = nums.length / 2
  
  // if (limit >= answer) return answer

  // return limit
}