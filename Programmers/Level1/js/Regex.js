/** 정규 표현식. Regular Expression 문제들 */

// 옹알이 (2) https://school.programmers.co.kr/learn/courses/30/lessons/133499?language=javascript
function solution(babbling) {
  // 1방식: 제일 간단. 정규 표현식과 reudce() 이용 방식.
  const consecutiveWordRegex = /(aya|ye|woo|ma)\1/; // 연속해서 나오는 문자 검출용 정규표현식
  const matchedRegex = /^(aya|ye|woo|ma)+$/; // 일치 패턴 검출용
  
  return babbling.reduce((acc, str) => !consecutiveWordRegex.exec(str) && matchedRegex.exec(str) ? ++acc : acc, 0);
  
  // 2방식: 정규 표현식과 for of 문이용법
//     const consecutiveWordRegex = /(aya|ye|woo|ma)\1/; // 연속해서 나오는 문자 검출용 정규표현식
//     const matchedRegex = /^(aya|ye|woo|ma)+$/; // 일치 패턴 검출용
//     let cnt = 0
//     for (const b of babbling) {
//         if (consecutiveWordRegex.exec(b)) continue
//         if (!matchedRegex.exec(b)) continue
      
//         cnt++
//     }

//     return cnt
  
  // 3방식: 정규 표현식 이용하지 않는 방식
//     const babs = ["aya", "ye", "woo", "ma"];
//     let cnt = 0;
//     let t = ""
//     outterLoop:
//     for (word of babbling) {
//         for (b of babs)
//             if (word.includes(b.repeat(2)))
//                 continue outterLoop;
      
//         for (b of babs) {
//             // word = word.split(b).join(" ").trim();
//             word = word.replaceAll(b, " ").trim();
//             // ""로 대체하지말고, " "로 해야 "myea"와 같은 경우 "ye"를 제거시 "m a"로 돼, 원래 "ma"인 단어와 구분가능하다.
//         }
      
//         if (word) continue;

//         cnt++;
//     }
  
//     return cnt;
}
