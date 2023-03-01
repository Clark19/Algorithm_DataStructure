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

