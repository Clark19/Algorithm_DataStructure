/** 프로그래머스 레벨 2 자바스크립트로 푼거 */

// 최솟값 만들기 https://school.programmers.co.kr/learn/courses/30/lessons/12941?language=javascript
function solution(A,B){
  A.sort((a,b) => a-b)
  B.sort((a,b) => b-a)   
  return A.reduce((sum, a, i) => sum + a*B[i], 0)
}