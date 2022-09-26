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
    // 1. 처음 푼 방식. for loop 이용
//     var answer = [];
//     for (let idx = 0; idx < commands.length; idx++) {
//         const [i, j, k] = commands[idx]
        
//         const result = array.slice(i-1, j)
//         result.sort((a,b) => a - b)
//         answer.push(result[k-1])
//         console.log(result)
//     }
    
    // 2방식. map(), slice() 등 이용
//     const answer = commands.map(el => {
//         const result = array.slice(el[0]-1, el[1])
//         result.sort((a,b) => a-b)
//         // console.log(result)
//         return result[el[2]-1]
//     })
    
//     return answer;
    
    
    // 3방식. 몇일 뒤 안보고 푼 방식
    return commands.map(command => array.slice(command[0]-1, command[1]).sort((a,b) => a-b)[command[2]-1])
}


// 12일차
// 문자열 내 p와 y의 개수 https://school.programmers.co.kr/learn/courses/30/lessons/12916
function solution(s){
  /* 처음 푼 방식 */
//     let pCnt = 0
//     let yCnt = 0
  
//     for (let i=0; i<s.length; i++) {
//         console.log(s[i].toLowerCase())
//         if (s[i].toLowerCase() === "p") {
//             pCnt++
//         } else if (s[i].toLowerCase() === "y") {
//             yCnt++
//         }
//     }   
//     // console.log(pCnt, yCnt)
//    return pCnt === yCnt
  
  /* 방식 2 */
  // const obj = {p:0, y:0}
  // s.toLowerCase().split("").forEach(char => {
  //     obj[char] === undefined
  //         ? obj[char] = 1
  //         : obj[char]++
  // })
  // return obj.p === obj.y
  
  /* 방식 3 */
  // return s.toLowerCase().split("p").length === s.toLowerCase().split("y").length
  
  // 4 방식 정규표현식 이용. 구현 더 간단, 그러나 더 느림. - s.match(regex)에 매칭되는게 없으면 결과과 없어 null 이 되므로 optional chaining 사용해야 런타임 에러안남
  return s.match(/p/ig)?.length === s.match(/y/ig)?.length
}

// 이상한 문자 만들기 https://school.programmers.co.kr/learn/courses/30/lessons/12930
function solution(s) {
  //     let answer = '';
  //     let idx = 0;
      
  //     for (let i=0; i<s.length; i++) {
          
  //         if (s[i] === " ") {
  //             answer += " ";
  //             idx = 0;
  //         } else {
  //             // console.log(s[i], i, idx);
  //             answer += idx%2 === 0
  //                 ? s[i].toUpperCase()
  //                 : s[i].toLowerCase()
  //             idx++;
  //         }
  
  //     }
  //     return answer;
      
      
    // 2 방식
    // const answer = s.split(" ")
    //                 .map(word => {
    //                     return word.split("")
    //                                 .map((letter, i) => i%2 ? letter.toLowerCase() : letter.toUpperCase()).join("")
    //                 }).join(" ")
    // // console.log(answer)
    // return answer
    
    // 3 방식 regex
    const process = a => a[0].toUpperCase() + a[1].toLowerCase()
    return s.toUpperCase().replace(/(\w)(\w)/g, process)
}

// 자연수 뒤집어 배열로 만들기 https://school.programmers.co.kr/learn/courses/30/lessons/12932
function solution(n) {
  //     let answer = [];
  //     n = n.toString() // .toString() 은 변수에 숫자를 담아야 에러 없이 사용 가능
      
  //     // for (let i=n.length-1; i>=0; i--) {
  //     //     answer.push(Number(n[i]))
  //     // }
  //     for (let i=0; i<n.length; i++) {
  //         // console.log(n[i])
  //         answer.unshift(Number(n[i]))
  //     }
  //     return answer;
      
      
      // 2 방식
      // return String(n).split("")
      //             .reverse().map(el => Number(el))
      
          // 3방식 숫자풀이
      var arr = [];
  
      do {
          arr.push(n%10); // 뒷자리(일의 자리) 숫자만 뽑아서 넣기
          n = Math.floor(n/10); // 뒷자리(일의 자리) 숫자 제거하기
      } while (n>0); // 모든 숫자 없어질때(0될때) 까지 하기
  
      return arr;
  }


// 나누어 떨어지는 숫자 배열 https://school.programmers.co.kr/learn/courses/30/lessons/12910
function solution(arr, divisor) {
  // const answer = [];
  // for (let i=0; i<arr.length; i++) {
  //     console.log(arr[i], arr[i]%divisor)
  //     if (arr[i] % divisor === 0) {
  //         answer.push(arr[i])
  //     }
  // }
  // return answer.length === 0
  //         ? [-1]
  //         : answer.sort((a,b) => a-b)
  
  const answer = arr.filter(num => num%divisor === 0).sort((a,b) => a-b)
  return answer.length === 0
          ? [-1]
          : answer
}


// 13일차
// 정수 제곱근 판별 https://school.programmers.co.kr/learn/courses/30/lessons/12934
function solution(n) {
  //     var answer = -1;
      
  //     // 2* 2 === 4
  //     // i*i === n
  //     for (let i=1; i*i <= n; i++) {
  //         if (i*i === n) {
  //             console.log(i, i*i)
  //             // answer = Math.pow(i+1, 2)
  //             return (i+1)**2
  //         }
  //     }
  //     // 제곱근을 찾지 못한 경우
  //     return answer;
      
      let sqrt = Math.sqrt(n)
      if (Number.isInteger(sqrt) === true ) {
          // 제곱근일 경우
          sqrt++
          return sqrt**2
      } else {
          return -1
      }
  }

// 제일 작은 수 제거하기 https://school.programmers.co.kr/learn/courses/30/lessons/12935
function solution(arr) {
  //     var answer = [];
  //     let min = arr[0]
  //     for (let i = 0; i<arr.length; i++) {
  //         if (arr[i] < min)
  //             min = arr[i]
  //     }
  //     for (let i =0; i<arr.length; i++) {
  //         if (arr[i] !== min)
  //             answer.push(arr[i])
  //     }
      
  //     return answer.length === 0
  //             ? [-1]
  //             : answer
      
      
      // filter 사용 방식
      // let min = Math.min(...arr)
      // return arr.length === 1
      //         ? [-1]
      //         : arr.filter(el => el !== min)
      
      // .sort() 사용 하는 방식도 있음.
      
      // splice로 제거 하는 방식
      arr.splice(arr.indexOf(Math.min(...arr)), 1)
      return arr.length < 1
              ? [-1]
              : arr
  }
