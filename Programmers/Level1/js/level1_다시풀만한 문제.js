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

// 성격 유형 검사하기 https://school.programmers.co.kr/learn/courses/30/lessons/118666
// 2022 KAKAO TECH INTERNSHIP
function solution(survey, choices) {
    const scores = [-100, 3,2,1,0,1,2,3];
    const rst = {R:0,T:0, C:0,F:0, J:0,M:0, A:0,N:0}
    survey.forEach((el, i) => {
        const [a, b] = el.split("");
        if (choices[i] < 4)
            rst[a] += scores[choices[i]];
        else
            rst[b] += scores[choices[i]];
    });
    
    let mbti = "";
    let before = null;
    let i = 0;
    for (const el of Object.entries(rst)) {
        if (i%2)
            mbti += before[1] >= el[1] ? before[0] : el[0];
        else
            before = el;
        i++
    }
    
    return mbti;
}


// 햄버거 만들기 https://school.programmers.co.kr/learn/courses/30/lessons/133502
// 처음 푼 방식은 시간초과 남. 아래 풀이는 시간 초과 안남. 안보고 다시 풀어볼 것.
function solution(ingredient) {     
    const isEqualArray = (a,b) => a.every((v,i) => v === b[i])
    const stack = [];
    let cnt = 0;
    let sLen = 0;
    let i = 0;
    while(i < ingredient.length) {
        stack.push(ingredient[i++]);
        sLen = stack.length;
        if (sLen < 4) continue;
            
        if (isEqualArray(stack.slice(sLen-4, sLen), [1,2,3,1])) {
            stack.splice(-4);
            // stack.splice(sLen-4, 4);
            cnt++;
        }
    }
    
    return cnt;
}

// 둘만의 암호 https://school.programmers.co.kr/learn/courses/30/lessons/155652#
function solution(s, skip, index) {
    // 방식1.
    // skip = skip.split("").map(ch => ch.charCodeAt());
    // return s.split("")
    //         .map(ch => {
    //             const code = ch.charCodeAt();
    //             const arr = []
    //             let i = 1;
    //             while (arr.length < index) {
    //                 if (!skip.includes( (code+i-97)%26 + 97))
    //                     arr.push(String.fromCharCode((code+i-97)%26 +97))
    //                 i++
    //             }
    //             return arr[index-1]
    //         })
    //         .join("");
    
    
    // 방식2. 방식1에서 사용한 배열에 넣는 방식 사용하지 않고 skipCount 사용하여 성능 소량 개선.
//     skip = skip.split("").map(ch => ch.charCodeAt());
//     return s.split("")
//             .map(ch => {
//                 const code = ch.charCodeAt();
//                 let skipCnt = 0;
//                 let i = 1;
//                 while (skipCnt < index) {
//                     if (!skip.includes( (code+i-97)%26 + 97))
//                         skipCnt++
//                     i++
//                 }
                
//                 return String.fromCharCode( (code + --i -97)%26 + 97 )
//             })
//             .join("");
    
    
    // 방식3. 타인의 간단한 풀이 방식 참고한 후, 안보고 풀어 본 것.
    const alpha = Array(26).fill(0).map((_,i) => String.fromCharCode('a'.charCodeAt()+i)).filter(el => !skip.split("").includes(el));
    
    return s.split("").map(ch => alpha[ (alpha.indexOf(ch)+index) % alpha.length ]).join("");
}

// 대충 만든 자판 https://school.programmers.co.kr/learn/courses/30/lessons/160586#
function solution(keymap, targets) {
    // 방식1: 직접 푼 방식
//     return targets.map(target => {
//         let keyCnt = 0;
//         for (let i=0; i<target.length; i++) {
//             let minIdx = Number.MAX_SAFE_INTEGER;
//             let idx = -1;
            
//             for (let kIdx=0; kIdx<keymap.length; kIdx++) {
//                 idx = keymap[kIdx].indexOf(target[i]);
//                 if (idx !== -1)
//                     minIdx = idx < minIdx ? idx : minIdx;
                
//                 if (kIdx === keymap.length-1 && minIdx === Number.MAX_SAFE_INTEGER && idx === -1 )
//                     return -1;    
//             }
            
//             if (minIdx !== Number.MAX_SAFE_INTEGER)
//                 keyCnt += minIdx + 1;
//         }
        
//         return keyCnt ? keyCnt : -1;
//     });
    
    
    // 방식2. 타인 소스 참조 후 간단한 방식으로 풀어 본거.
    const keyHash = {};
    const rst = [];
    for (const key of keymap)
        key.split("").forEach((ch, i) => keyHash[ch] = (keyHash[ch] < i+1) ? keyHash[ch]: i+1);
    
    for (const target of targets)
        rst.push(target.split("").reduce((acc, ch, i) => acc+keyHash[ch], 0) || -1);
    
    return rst;
}


// 개인정보 수집 유효기간 https://school.programmers.co.kr/learn/courses/30/lessons/150370#
// 2023 KAKAO BLIND RECRUITMENT
function solution(today, terms, privacies) {
    // 방식1. Date() 이용 방식
//     const answer = [];
//     today = new Date(today);
//     today.setHours(today.getHours()+9); // 문자로 설정한 시간 보다 9시간 적게 나와서 +9시간 해줌.
//     const termHash = {};
//     terms.forEach(term => {
//         const [rule, month] = term.split(" ");
//         termHash[rule] = parseInt(month);
//     });
    
//     privacies.forEach((prv, i) => {
//         const [uDate, rule] = prv.split(" ");    
//         const date = new Date(uDate);
//         date.setHours(date.getHours()+9)
//         date.setMonth(date.getMonth()+termHash[rule])
        
//         if (date.getDate() == 1){
//             date.setDate(28)
//             date.setMonth(date.getMonth()-1)
//         } else
//             date.setDate(date.getDate()-1)
        
//         if (date < today) answer.push(i+1)
        
//     });
    
//     return answer;

    
    // 방식2. 날짜를 (28일/1달)일로 모두 변환해서 풀기. 
    // (문제 조건이 무조건 한 달이 28일.)
    const answer = []
    const [year, month, date] = today.split(".").map(Number)
    const todayDates = year*12*28 + month*28 + date
    
    const termHash = {}
    terms.forEach(term => {
        const [rule, month] = term.split(" ")
        termHash[rule] = parseInt(month);
    })

    privacies.forEach((prv, i) => {
        let [uDate, rule] = prv.split(" ")
        uDate = uDate.split(".").map(Number)
        const date = uDate[0]*12*28 + uDate[1]*28 + uDate[2] + termHash[rule]*28 - 1
        if (date < todayDates)
            answer.push(i+1)
    })
    
    return answer
}