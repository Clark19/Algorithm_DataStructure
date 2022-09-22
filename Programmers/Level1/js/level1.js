/** 프로그래머스 레벨 1 자바스크립트로 푼거 */


// 5일차
// 문자열을 정수로 바꾸기 https://school.programmers.co.kr/learn/courses/30/lessons/12925
function solution(s) {
  return Number(s);
}



// 6일차
// 같은 숫자는 싫어 https://school.programmers.co.kr/learn/courses/30/lessons/12906
function solution(arr)
{
   return arr.filter((el, i, ar) => el !== ar[i+1]);
}


// 핸드폰 번호 가리기 https://school.programmers.co.kr/learn/courses/30/lessons/12948
function solution(phone_number) {
  let answer = '';
  
  /* 1. for문 이용법 */
  // for (let i=0; i<phone_number.length; i++) {
  //     if (i < phone_number.length-4)
  //         answer += "*"
  //     else
  //         answer += phone_number[i]
  // }
  
  
  /* 2. str.padStart(), str.padStart() 이용법
      이 방법이 정규식 이용법보다 프로그래머스에서 3배 정도 빠름.
   */
  // answer = answer.padStart(phone_number.length-4, "*") + phone_number.slice(-4)
  
  // return "".padStart(phone_number.length-4,"*") + phone_number.slice(-4)
  
 
  /* 3. 정규표현식 이용법 */
  answer = phone_number.replace(/\d(?=\d{4})/g, "*")
  
  return answer;
}

// 짝수와 홀수 https://school.programmers.co.kr/learn/courses/30/lessons/12937
function solution(num) {
  // let answer = "Even"
  // if (num % 2)
  //     answer = "Odd"
  return num % 2 ? "Odd": "Even";
}


// 7일차
// 가운데 글자 가져오기 https://school.programmers.co.kr/learn/courses/30/lessons/12903
function solution(s) {
  const len = s.length  
  return len%2 ? s[Math.floor(len/2)] : s[len/2 - 1] + s[len/2]
  // return len%2 ? s.slice(Math.floor(len/2), Math.floor(len/2)+1) : s.slice(len/2-1, len/2+1)
}

// 서울에서 김서방 찾기 https://school.programmers.co.kr/learn/courses/30/lessons/12919
function solution(seoul) {    
  return `김서방은 ${seoul.indexOf("Kim")}에 있다`;;
}

// 문자열 다루기 기본 https://school.programmers.co.kr/learn/courses/30/lessons/12918
function solution(s) {
  /* for, isNaN() 사용방식 */
  //     let answer = true
      
  //     if (s.length !== 4 && s.length !== 6) 
  //         answer = false
      
  //     for (let i=0; i<s.length; i++) {
  //         if (isNaN(s[i]))
  //             answer = false
  //     }
      
  //     return answer;
      
      
      /* 정규표현식 사용 방식 */
      const regex = /^\d{4}$|^\d{6}$/
      return regex.test(s)
  }

// 약수의 합 https://school.programmers.co.kr/learn/courses/30/lessons/12928
function solution(n) {
  // let sum = 0;
  // for (let i=1; i<= n; i++) {
  //     if (n%i === 0) {
  //       sum += i  
  //     }
  // }
  
  // 살짝 최적화 방법: 약수는 본수의 1/2을 넘을수 없으므로.
  // let sum = n;
  // for (let i=1; i<= n/2; i++) {
  //     if (n%i === 0) {
  //       sum += i  
  //     }
  // }
  // return sum;
  
  
  /* reduce() 사용방식 */
  const newNArr = new Array(n).fill(1) // reduce()는 배열 메서드 이므로
  let sum = newNArr.reduce((acc, cur, idx) =>     {
      const num = cur + idx
      console.log(acc, cur, idx)
      return n % num ? acc : acc+num
  }, 0)
  
  return sum
}


// 8일차
//자릿수 더하기 https://school.programmers.co.kr/learn/courses/30/lessons/12931
function solution(n)
{
    // var answer = 0;

    // const N = String(n)
    // for (let i =0; i<N.length; i++) {
    //   answer += Number(N[i])
    // }
    
    
    let answer = String(n)
        .split("")
        .reduce((acc, cur) => {
            // console.log(acc, cur)
            return acc + Number(cur)
    }, 0)

    return answer;
}

// x만큼 간격이 있는 n개의 숫자 https://school.programmers.co.kr/learn/courses/30/lessons/12954
function solution(x, n) {
  let answer = [];
  // for (let i=1; i<=n; i++) {
  //     // console.log(i, x, i*x)
  //     answer.push(i*x)
  // }
  
  answer = new Array(n).fill(x)
      .map((el, i) => el * (i+1))
  
  return answer;
}

// 문자열 내림차순으로 배치하기 https://school.programmers.co.kr/learn/courses/30/lessons/12917
function solution(s) {
  //     var arr = [];
      
  //     for (let i=0; i<s.length; i++) {
  //         arr.push(s[i])
  //     }
  //     arr.sort((a,b) => {
  //         return a>b ? -1 : 1
  //     })
  //     let answer = ""
  //     for (let i=0; i<arr.length; i++)
  //         answer += arr[i]
      const arr = s.split("")
      arr.sort((a,b) => {
          return a>b ? -1 : 1
      })
      const answer = arr.join("")
      return answer;
  }

// K번째수 https://school.programmers.co.kr/learn/courses/30/lessons/42748
function solution(array, commands) {
  //     var answer = [];
  //     for (let idx = 0; idx < commands.length; idx++) {
  //         const [i, j, k] = commands[idx]
          
  //         const result = array.slice(i-1, j)
  //         result.sort((a,b) => a - b)
  //         answer.push(result[k-1])
  //         console.log(result)
  //     }
      
      const answer = commands.map(el => {
          const result = array.slice(el[0]-1, el[1])
          result.sort((a,b) => a-b)
          // console.log(result)
          return result[el[2]-1]
      })
      
      return answer;
  }