/** 프로그래머스 레벨 2 자바스크립트로 푼거 */


// 17일차
// JadenCase 문자열 만들기 https://school.programmers.co.kr/learn/courses/30/lessons/12951
function solution(s) {
  // 1방식. 메서드 이용 방식
  // return answer = s.toLowerCase().split(" ").map(word => !word ? word : word[0].toUpperCase()+word.slice(1)).join(" ")
  
  
  // 2방식. 정규표현식 방식이 더 느림.
  // return s.toLowerCase().replace(/(\w+\s*)/g, word => word[0].toUpperCase()+word.slice(1)
  
  
  // 3방식. 정규표현식 방식 중 공백이 아닌 표현식 이용 방식이 살짝 더 빠르고 간단.
  // return s.toLowerCase().replace(/(\S+)/g, word => word[0].toUpperCase()+word.slice(1))
  return s.toLowerCase().replace(/(\S+)/g, word => {
      word[0] = word[0].toUpperCase()
      return word[0].toUpperCase()+word.slice(1)
  })
  
}

// 숫자의 표현 https://school.programmers.co.kr/learn/courses/30/lessons/12924
function solution(n) {
  let cnt = 1;
  let sum = 0;
  for (let i=1; i<=~~(n/2); i++) {
      sum += i;
      
      for (let j=i+1; sum < n; j++) {
          sum += j;
          if (j >= ~~(n/2)) break;
      }
      
      if (sum === n) cnt++;
      sum = 0;
  }
      
  return cnt;
}
