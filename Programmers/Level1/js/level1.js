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

// 14일차
// 콜라츠 추측 https://school.programmers.co.kr/learn/courses/30/lessons/12943
function solution(num) {
  // 1방식. for loop 이용
//     if (num === 1) return 0
  
//     var answer = 0;
//     while (num !== 1) {
//         num = num%2 ? num*3+1 : num/2
//         if (++answer > 500) return -1
//     }
//     // console.log(num, answer)
//     return answer;
 
  
  /* 2방식. Array().fill() 이용 방식 : 이 방식은 비효율적. */
  // const result = new Array(500).fill(1)
  //     .forEach(el => {
  //         if (num != 1) {
  //             num = num%2 ? num*3+1 : num/2
  //             answer++
  //         }
  //     })
  // return num !== 1 ? -1 : answer
  
  
  // 3 방식. 재귀 호출 방식
  if (num === 1) return 0
  if (num <= -1) return -1
   
  let answer = 1;
  
  num = num%2 ? num*3+1 : num/2


  // answer = solution(num ) === -1 ? -1 : answer +  
  answer += solution(num)
  if (answer > 500) return -1
  return answer
}

// 콜라즈 추측 안보고 다시 풀어본거
function solution(num) {
  // let cnt = 0
  // while(num !== 1) {
  //     if (num%2 === 0) num = num/2
  //     else num = num*3 + 1
  //     if (++cnt > 500) return -1
  // }
  // return cnt
}
// 재귀 방식
function solution(num, count = 0) {
  // console.log(num, count)
  if (count > 500) return -1
  return num === 1 ? count : solution(num%2 ? num*3+1 : num/2, ++count)
}


// 두 개 뽑아서 더하기 https://school.programmers.co.kr/learn/courses/30/lessons/68644
function solution(numbers) {
  let answer = [];
  const set = new Set()
  numbers.forEach((el,i,arr) => {
      for (let j=i+1; j<arr.length; j++) {
          set.add(el+arr[j])
      }
  } );

  return [...set].sort((a,b) => a-b);
  
  /* Set 특징
  set.forEach(el => el) 사용 가능
  set.add(el) : 중복된 값은 추가 안됨.
  set.delete(2 value)
  set.has(vale)
  set.size
  set.clear()
  */
  
  // 2방식. 메서드만 이용하는 방식
  // const answer = new Set([])
  // numbers.forEach((num1, i) => {
  //     numbers.slice(i+1).forEach(num2 => {
  //         answer.add(num1 + num2)
  //     })
  // })
  // return [...answer].sort((a,b) => a-b)
  
  
  // // 3.방식. for loop
  // const answer = []
  // for (let i=0; i<numbers.length; i++) {
  //     for(let j=i+1; j<numbers.length; j++) {
  //         const sum = numbers[i] + numbers[j]
  //         if (!answer.includes(sum))
  //             answer.push(sum)
  //     }
  // }
  // answer.sort((a,b) => a-b)
  // return answer
}


// 15일차
// 없는 숫자 더하기 https://school.programmers.co.kr/learn/courses/30/lessons/86051
function solution(numbers) {
  // var answer = 0;
  // const check = [0,1,2,3,4,5,6,7,8,9]
  // for (let i=1; i<=9; i++) {
  //     if (!numbers.includes(i)) {
  //         answer += i
  //     }
  // }
  // return answer;

  // 2방식 new Array(value).fill(1) 이용 방식
  // const answer = new Array(9).fill(1).reduce((acc, cur, idx) => {
  //     const sum = cur+idx
  //     // console.log(acc, cur, idx, sum)
  //     return acc + (!numbers.includes(sum) ? sum : 0)
  // }, 0)
  // // console.log(answer)
  // return answer
  
  // 3방식. 대상 합산 후 입력 배열 reduce로 합산후 빼는 방식
  return 45 - numbers.reduce((acc, cur) => acc + cur)
}

// 두 정수 사이의 합 https://school.programmers.co.kr/learn/courses/30/lessons/12912
function solution(a, b) {
  // var answer = 0;
  // const min = Math.min(a,b)
  // for (let i=min; i<= min+Math.abs(a-b); i++)  {
  //     answer += i
  // }
  // return answer;
  
  // 2방식- 가우스공식, 등차수열의 합 공식 이용법
  // (첫항+끝항) * 1/2*항수
  return (a+b)*(Math.abs(a-b)+1)/2
  
}

// 하샤드 수 https://school.programmers.co.kr/learn/courses/30/lessons/12947
function solution(x) {
  // 1방식. for loop
  // let answer = 0
  // x = String(x)
  // for (let i=0; i<x.length; i++) {
  //     answer += Number(x[i])
  // }
  // return x % answer === 0
  
  
  // 2방식. split. reduce() 이용방식
  // const sum = x.toString().split("").reduce((acc,cur) => Number(acc)+Number(cur))
  const sum = x.toString().split("").reduce((acc,cur) => acc+Number(cur), 0)
  // return x%sum ? false: true;
  // 위 리턴문 더 줄이면 아래처럼 가능
  return x%sum === 0
}


// 16일차
// 내적 https://school.programmers.co.kr/learn/courses/30/lessons/70128
function solution(a, b) {
  let answer = 0;
  a.forEach((ai, i) => answer += ai*b[i])
  return answer;
  
  // return a.reduce((acc, cur, i) => acc += cur * b[i], 0)
}

// 행렬의 덧셈 https://school.programmers.co.kr/learn/courses/30/lessons/12950
function solution(arr1, arr2) {
  //     let answer = [];
  // arr1.forEach((a,i) => { 
  //     a.forEach((data, j) => answer[i] ? answer[i].push(data+arr2[i][j]) : answer.push([data+arr2[i][j]]) )
  // })
  // return answer;
  
  // 2방식 .map() 사용
  return arr1.map((row, i) => row.map((num,j) => num+arr2[i][j]))
}
 

// 17일차
// 음양 더하기 https://school.programmers.co.kr/learn/courses/30/lessons/76501
function solution(absolutes, signs) {
  return absolutes.reduce((acc,cur,i) => signs[i] ? acc + cur : acc - cur, 0)
}


// 18일차
// 2016년 https://school.programmers.co.kr/learn/courses/30/lessons/12901
function solution(a, b) {
    
  //     const month = {
  //     1 : 31,
  //     2 : 29,
  //     3 : 31,
  //     4 : 30,
  //     5 : 31,
  //     6 : 30,
  //     7 : 31,
  //     8 : 31,
  //     9 : 30,
  //     10 : 31,
  //     11 : 30,
  //     12 : 31
  // }
  //     const week = [ "FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU" ]
      
      
      
      // 1방식. for loop 이용
  //     let answer = '';
  //     for (let i=1; i<a; i++) {
  //         answer += month[i]
  //     }
  //     answer += (b-1)
  //     answer  = week[answer % 7]
      
  //     return answer;
      
      
      // 2방식. reduce 이용
  //     const weekIdx = new Array(a).fill(1)
  //             .reduce((acc, cur, idx) => {
  //                 // console.log(cur, idx)
  //                 const monthNum = cur + idx
  //                 return acc + ((monthNum !== a)
  //                                 ? month[monthNum]
  //                                 : (b-1)
  //                               )
  //             }, 0)
      
  //     return week[weekIdx % 7]
      
      // 3방식. 내장 Date 객체 사용법
      const week = [ "SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT" ]
      const day = new Date(2016, a-1, b).getDay()
      // console.log(day)
      return week[day]
      
      
      // 4방식. 가장 간단 방식
      // const answer = new Date(`2016 ${a} ${b}`)
      // console.log(String(answer).slice(0,3).toUpperCase())
      // return String(answer).slice(0,3).toUpperCase()
      // return String(new Date(`2016 ${a} ${b}`)).slice(0,3).toUpperCase()
  }

  // 19일차
  // 최대공약수와 최소공배수 https://school.programmers.co.kr/learn/courses/30/lessons/12940
/** 1방식. 사전지식 없이(최소공배,최대공약, 유클리드호제법 다까먹은 상태) 최초 푼 방식 */
// function solution(n, m) {
//     const min = Math.min(n, m)
//     const max = Math.max(n, m)
//     return [gcd(min,max), lcm(min,max)];
// }

// // 최소공배수
// function lcm(min, max) {
//     // if (max%min === 0) return max
    
//     let lcm = 1
//     for (let i=max; i <= min*max; i += max) {
//         if (i%min === 0) {
//             lcm = i
//             break;
//         }
//     }
    
//     return lcm
// }

// // 최대공약수
// function gcd(min, max) {
//   //  1. 최초 푼 방식
//   //   let minNumYaksus = []
//   //   for (let i=1; i<=min; i++) {
//   //       if (min%i===0) {
//   //           minNumYaksus.push(i)
//   //       }
//   //   }
//   // // console.log(minNumYaksus)
//   //   let gcd = []
//   //   for (let j=0; j<minNumYaksus.length; j++) {
//   //       if (max%minNumYaksus[j]===0) {
//   //           gcd.push(minNumYaksus[j])
//   //       }
//   //   }
//   // // console.log(gcd)
//   //   return gcd.pop()
    
//     // 2. 리팩토링
//     let yaksoo = []
//     for (let i=1; i <= min; i++) {
//         if (min%i === 0 && max%i === 0) {
//             yaksoo.push(i)
//         }
//     }
//     return yaksoo.pop()
// }


/** 2방식. 최소공배, 최대공약, 유클리드호제법 재학습 후 푼 방식 */
function solution(n, m) {
  const min = n<m ? n : m
  const max = Math.max(n,m)
  const gcdNum = gcd(min, max); // 최대공약수
  return [gcdNum, min*max / gcdNum];
}

// 최대공약수 - 유클리드 호제법(반복문) 이용 방식
// function gcd(min, max) {
//     let remainder = max%min
//     while(remainder !== 0) { // 즉 max%min == 0 이면 min이 최대공약수이다.
//         max = min // max와 나머지의 역할 바꾸기 진행
//         min = remainder
//         remainder = max%min
//     }
//     return min // 즉, max % min === 0 일때의 min이 최대 공약수이다.
// }

// 3방식. 최대공약수 - 유클리드 호제법(재귀) 이용 방식
function gcd(min, max) {  
  return min === 0 ? max : gcd(max%min, min)
}


// 20일차
// 완주하지 못한 선수 https://school.programmers.co.kr/learn/courses/30/lessons/42576
function solution(participant, completion) {
  // 1방식. 성능 테스트 실패. 정확성 테스트 통과함.
  // completion.forEach((name,i) =>  {
  //     if (participant.includes(name))
  //     participant.splice(participant.indexOf(name), 1);
  // })
  // return participant[0]
  
  
  // 2. 문제 조건 잘 읽어보면 단 한명만 마라톤 완주 못함을 이용하여 찾자마자 리턴 방식
  participant.sort((a,b) => a>b ? 1:-1)
  completion.sort((a,b) => a>b ? 1:-1)
  
//     for (let i=0; i<participant.length; i++) {
//         if (participant[i] !== completion[i])
//             return participant[i]
//     }
  
  
  // participant.sort((a,b) => a-b)
  // completion.sort((a,b) => a-b)
  
  const answer = participant.filter((name,i) => name !== completion[i])
  return answer[0]
}

// for loop로 풀어본 방식: O(n^2) Double for loop 라서 효율성 테스트 실패
// function solution(participant, completion) {
//     console.log(participant, completion)
//     let compName = completion[0] // leo, kiki, eden   
    
//     for (let j = 0; j<participant.length; j++) {
//         let parName = participant[j]
//         if ( !isCompletedPerson(completion, parName) ) {
//                 return parName
//         }
//     }
// }

// function isCompletedPerson(compArr, nameToFind) {
//     for (let i=0; i<compArr.length; i++) {
//         if (nameToFind === compArr[i]) {
//             delete compArr[i]
//             // compArr[i] = ""
//             return true
//         }
//     }
//     return false
// }


// sort() 방식: O(nlogn) 
function solution(participant, completion) {
    participant.sort((a,b) => a>b ? 1:-1) // 오름차순 정렬
    completion.sort((a,b) => a>b ? 1:-1)
    console.log(completion)
    
    return participant.find((name, i) => name !== completion[i])
}


// 객체를 범용 맵처람 사용한 방식객체를 범용 맵처람 사용한 방식 => 이론상 2 * n 이라서 O(n) 이라서 제일 빠를거 같은데
// 위 sort() 방식의 O(nlogn) 보다 프로그래머스 효율성 테스트에서 조금 느리다. (평균 10~20ms 느림)
// 아마 데이터가 적어서 그런걸까?
function solution(participant, completion) {
    const hashT = {}
    let pName = ""
    let cName = ""
    for (let i=0; i<participant.length; i++) {
        pName = participant[i]
        // hashT[pName] = (hashT[pName] == undefined ? 1 : ++hashT[pName])
        hashT[pName] = (hashT[pName] || 0) + 1
        if (i <= completion.length-1) {
            cName = completion[i]
            // hashT[cName] = (hashT[cName] == undefined ? -1 : --hashT[cName])
            hashT[cName] = (hashT[cName] || 0) -1
        }
    }
     
    
    return Object.entries(hashT).find(([key, value]) => value !== 0)[0]
}


// Map() 사용: time complexity => O(2n) == O(n) 이라서 제일 빠름
function solution(participant, completion) {
  const map = new Map()
  
  participant.forEach((name, i) => {
      map.set(name, (map.get(name) || 0) + 1 )
      map.set(completion[i], (map.get(completion[i]) || 0) - 1 )
  });
  
  // return Array.from(map.entries()).find(([key, value]) => value > 0)[0]
  for(let [k, v] of map) {
      if(v > 0) return k;
  }
}


// 21일차
// 모의고사 https://school.programmers.co.kr/learn/courses/30/lessons/42840
function solution(answers) {
  //     let NumOfAnswer = [0,0,0];
  //     const p1 = [1, 2, 3, 4, 5]
  //     const p2 = [2, 1, 2, 3, 2, 4, 2, 5]
  //     const p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
      
      
  //     answers.forEach((answer,i) => {
  //         if (answer === p1[i%p1.length]) NumOfAnswer[0]++
  //         if (answer === p2[i%p2.length]) NumOfAnswer[1]++
  //         if (answer === p3[i%p3.length]) NumOfAnswer[2]++
  //     } )
  
  //     const maxNum = Math.max(...NumOfAnswer);
  //     const maxPeople = []
  //     NumOfAnswer.forEach((num,i) => maxNum === num ? maxPeople.push(i+1) : null)
  //     return maxPeople;
     
      
      // 코드캠프 강사님이 메서드만 이용하여 푼 방식
      const answerTable = [
          // 1번 수포자가 찍는 방식
          [ 1, 2, 3, 4, 5 ], // 5개의 패턴
          // 2번 수포자가 찍는 방식
          [ 2, 1, 2, 3, 2, 4, 2, 5 ], // 8개의 패턴
          // 3번 수포자가 찍는 방식
          [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5 ] // 10개의 패턴
      ]
      
      const scoreList = answerTable.map((el, i) => { 
          const score = answers.reduce((acc, cur, j) => {
              // console.log(acc, cur, el[j % el.length])
              return acc + (el[j % el.length] === cur ? 1 : 0)
          },0)
          // console.log(score)
          
          return {student: i+1, score}
      });
      // console.log(scoreList)
      
      const biggest = Math.max(...scoreList.map(el => el.score))
      return scoreList.filter(el => biggest===el.score ?  el.student : null).map(el => el.student)    
      
  }

// Map 이용해 내가 푼 방식
  function solution(answers) {
    // submitPatterns
    const sp1 = [1, 2, 3, 4, 5];
    const sp2 = [2, 1, 2, 3, 2, 4, 2, 5],
          sp3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    
    const rankerIdxs = new Map()
    answers.forEach((answer, i) => {
        if (sp1[i%sp1.length] == answer)
            rankerIdxs.set(1, (rankerIdxs.get(1) || 0) + 1)
        if (sp2[i%sp2.length] == answer)
            rankerIdxs.set(2, (rankerIdxs.get(2) || 0) + 1)
        if (sp3[i%sp3.length] == answer)
            rankerIdxs.set(3, (rankerIdxs.get(3) || 0) + 1)
    })
    
    // console.log(rankerIdxs, Math.max(...rankerIdxs.values()))
    const max = Math.max(...rankerIdxs.values())
    return Array.from(rankerIdxs.entries()).sort((a,b) => a[0]-b[0]).filter(([key, value]) => value === max).map(el => el[0])
}

// Map 대체 객체를 이용해 내가 푼 방식
function solution(answers) {
    const submitPatterns = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ]
    
    const rankerIdxs = [0,0,0]
    answers.forEach((answer, i) => {
        if (submitPatterns[0][i%5] == answer)
            rankerIdxs[0]++
        if (submitPatterns[1][i%8] == answer)
            rankerIdxs[1]++
        if (submitPatterns[2][i%10] == answer)
            rankerIdxs[2]++
    })
    console.log(rankerIdxs, Math.max(...rankerIdxs))
    const max = Math.max(...rankerIdxs)
    
    let answer = []
    rankerIdxs.forEach((answerCnt, i) => {
        if (answerCnt === max)
            answer.push(i+1)
    })
    
    return answer
}