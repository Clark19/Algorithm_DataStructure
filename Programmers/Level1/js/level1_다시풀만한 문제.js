/** 레벨1 문제중 다시 풀어볼 만한 문제 */

// 숫자 짝꿍 https://school.programmers.co.kr/learn/courses/30/lessons/131128
// O(n^2) 방식으로 풀어 시간 복잡도 초과로 실패한 문제
function solution(X, Y) {
  // 방식1: 처음 푼 방식. 시간초과 남.
//     const rst = X.split("").sort((a,b) => b-a).filter(n => {
//         if (Y.indexOf(n) !== -1) {
//             Y = Y.replace(n, "");
//             return true;
//         }
//         return false
//     })

//     if (rst.length === 0) return "-1";
//     else if (rst.join("") === "00") return "0";
  
//     return rst.join("");

  
  // 방식2. 거의 O(n) 유사 방식이라 통과한 방법. 타인 코드 참조.
  const xArr = [0,0,0,0,0,0,0,0,0,0]; // 0 ~ 9
  const yArr = [0,0,0,0,0,0,0,0,0,0];
  X.split("").forEach(n => xArr[n]++);
  Y.split("").forEach(n => yArr[n]++);
  
  const rst = xArr.map((n,i) => Math.min(n, yArr[i])).reverse().reduce((acc, cur, i) => {
      for (let j=0; j<cur; j++)
          acc += (9-i)
      return acc;
  }, "");
  
  if (rst.length === 0) return "-1";
  else if (rst[0] === "0") return "0";
  
  return rst;
}

// 문자열 나누기 https://school.programmers.co.kr/learn/courses/30/lessons/140108?language=javascript
// 시간 흐른 뒤 다시 재귀로 풀어보거나 좀더 빠르게 풀수 있게 다시 풀어볼 것.
// 방식1: 처음 에 중첩 for문 으로 푼 것. 정답 조건은 아니지만 문자열을 나눠서(분리) 배열에 담음.
function solution(s) {
  // const rst = []; // 배열에 나눈 문자열 담으려면 cnt 변수 없애고 rst배열 이용하면 됨.
  let cnt = 0;
  let sameCnt = 0;
  let inSameCnt = 0;  

  outerLoop:
  for (let i=0; i<s.length; i++) {
      sameCnt++
      if (i === s.length-1)
          cnt++ // rst.push(s.slice(i,i+1))

      for (let j=i+1; j<s.length; j++) {
          if (s[i] === s[j]) sameCnt++;
          else inSameCnt++;

          if (sameCnt === inSameCnt || j === s.length-1) {
              cnt++ // rst.push(s.slice(i,j+1))
              if (j === s.length-1)
                  break outerLoop;
              
              i = j
              continue outerLoop;                
          }
          
      }
  }
  
  // return rst.length;
    return cnt++
}

// 방식2: 재귀 방식
// function solution(s, cnt=0) {  
//   if (!s) return cnt;
  
//   let sameCnt = 1;
//   let inSameCnt = 0;
//   let i=0;
//   for(; i<s.length; i++) {
//       if (s[0] === s[i+1]) sameCnt++;
//       else inSameCnt++;
//       if (sameCnt === inSameCnt) break;
//   }
  
//   return solution(s.slice(i+2), ++cnt)
// }
