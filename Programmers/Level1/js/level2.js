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

// 카펫 https://school.programmers.co.kr/learn/courses/30/lessons/42842?language=javascript
function solution(brown, yellow) {
  for (let i =3; i<=Math.floor(brown/2); i++) {
      for (let j=3; j<=i; j++) {
          if (brown+yellow === i*j && (i-2)*(j-2) === yellow)
              return [i, j] 
      }
  }
}

// 구명보트 https://school.programmers.co.kr/learn/courses/30/lessons/42885
/* 문제 조건에 최대 2명까지만 탈 수 있다고 되있기 때문에,
   정렬 후 최소값+최대값만 체크해보면 된다는 걸 알면 쉽게 풀리는 문제.
*/
function solution(people, limit) {
  // 방식1. 맨처음 풀 다가 실패한 방식.
//     let answer = 0;
  
//     // > a>b ? 1 : -1  오름차순
//     let pWDesc = people.sort((a,b) => b-a) //a>b ? -1 : 1
//     console.log(pWDesc)
  
//     let i = 0
//     while (pWDesc.length > 0) {
//         let w = pWDesc.shift()
//         while (pWDesc.length > 0 ) {
//             if ( (w + pWDesc[i])  <= limit) {
//                 console.log(w, pWDesc[i])
//                 answer++
//                 delete pWDesc[i]
//             }
//             i++
//         }
//         i = 0
//         console.log(pWDesc)
//     }
  
//     // let minW = Math.min(...people)
//     // console.log(minW)
  
//     // [70, 30, 50, 80, 50], 200
//     // for (let i=0; i<people.length; )
//     return answer;

  
  
  // 방식2: 정렬 후 스택에 pop() 하는 방식. (풀이 본 뒤에, 몇달 후 푼 거)
  // 밤에 어쩔땐 효율성 테스트 못하다가도 나중에 하니 통과 함.
//     people.sort((a,b) => a-b)
  
//     while (people.length) {
//         if (people[0] + people.at(-1) <= limit) {
//             people.pop()
//             people.shift()
//         } else {
//             people.pop()
//         }
//         cnt++;    
//     }
  
//     return cnt;
  
  
  // 방식3: 그냥 투 포인터 이용하는 방식이라 더 빠름. (스택 이용 x)
  let cnt = 0;
  people.sort((a,b) => a-b)
  for (let i=0, j=people.length-1; i<=j; j--) {
      if (people[i] + people[j] <= limit)
          i++;
      cnt++;
  }
  
  return cnt;
}

// 예상 대진표 https://school.programmers.co.kr/learn/courses/30/lessons/12985?language=javascript
function solution(n,a,b)
{
    // 1. 첨 푼 방식
    // let cnt = 0;      
    // for (let i=0; i<Math.log2(n); i++) {
    //     a = Math.round(a/2)
    //     b = Math.round(b/2)
    //     cnt++
    //     if (a === b)
    //         return cnt
    // }
    // return cnt
    
    
    // 간단 방식
    let cnt = 0;   
    while (a !== b) {
        a = Math.round(a/2)
        b = Math.round(b/2)
        cnt++
    }
    
    return cnt
}

// 점프와 순간 이동 https://school.programmers.co.kr/learn/courses/30/lessons/12980?language=javascript
function solution(n)
{ 
    // 방식1.
    let cnt = 0;
    while (n) {
        if (n%2 === 1) cnt++;
        n = ~~(n/2)   
    }
    
    return cnt
    
    // 방식2. 2진수로 변환 후 1의 갯수로 푸는 방식
    // return n.toString(2).match(/1/g).length;
}

// 멀리 뛰기 https://school.programmers.co.kr/learn/courses/30/lessons/12914
function solution(n) {
  let rst = [1,2];
  for (let i=2; i<n; i++) {
      rst.push(rst[i-1]+rst[i-2]%1234567)
  }
  
  return n == 1 ? 1 : rst.at(-1)%1234567
}

// 귤 고르기 https://school.programmers.co.kr/learn/courses/30/lessons/138476
function solution(k, tangerine) {
  const rst = Object.values(tangerine.reduce((data, n, i) => {
      data[n] = ~~data[n]+1
      return data
  }, {})).sort((a,b)=> a-b);

  let sum = 0;
  for (let i=1; i<=rst.length; i++) {
      sum += rst.at(-i)
      if (sum >= k)
          return i
  }
}

// 위장 https://school.programmers.co.kr/learn/courses/30/lessons/42578
function solution(clothes) {
  // (x+a)(x+b)(x+c) = x^3 + (a+b+c)x^2 + (ab+bc+ca)x + abc 공식에서 x=1 대입해서 (1+a)(1+b)(1+c) - 1 이용.
//     const cHash = new Map()
//     clothes.forEach(el => {
//         if (cHash.get(el[1]))
//             cHash.get(el[1]).push(el[0])
//         else 
//             cHash.set(el[1], [el[0]])
//     });
  
//     let sum = 1;
//     cHash.forEach(el => sum *= (1 + el.length))
//     return sum - 1
  
  // 방식2. reduce 사용.
  return Object.values(clothes.reduce((cHash, el) => {
      cHash[el[1]] = cHash[el[1]] ? cHash[el[1]]+1 : 1;
      return cHash;
  }, {})).reduce((sum, el) => sum*(el+1), 1)-1;
}
