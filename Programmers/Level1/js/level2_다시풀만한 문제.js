/** 프로그래머스 레벨 2 자바스크립트로 푼거 */

// 최솟값 만들기 https://school.programmers.co.kr/learn/courses/30/lessons/12941?language=javascript
function solution(A,B){
  A.sort((a,b) => a-b)
  B.sort((a,b) => b-a)   
  return A.reduce((sum, a, i) => sum + a*B[i], 0)
}


// 다음 큰 숫자 https://school.programmers.co.kr/learn/courses/30/lessons/12911
/* 재귀랑 정규 표현식은 다시 한번 풀어볼 것
** 비트 연산자 방식은 이해 해 볼 것.
*/
// function solution(n) {
function solution(n, m=n+1) {
    // 방식1. 처음 푼 방식
//     const len = n.toString(2).split("").filter(el=>el === "1").length
//     let m = ++n
//     let mArr = m.toString(2).split("")
    
//     while (len !== mArr.filter(el=>el === "1").length) {
//         mArr = (++m).toString(2).split("")
//     }
    
//     return m;
    
    // 방식2. 정규 표현식 + 재귀
    console.log(n.toString(2).matchAll(/1/g)[0])
    return n.toString(2).match(/1/g).length === m.toString(2).match(/1/g).length ? m : solution(n, m+1)
}
// 방식3. 비트 연산자 사용 방식.
// ** 알고리즘 시간 복잡도 O(log n) 이지만 사실상 O(a)에 가까움.
// ** 655395 입력후 1억번 실행에 소요 시간450ms 미만
function nextBigNumber(n) {
    var i, j;
    for (i = 0; !(n & 1); i++) {n = n >> 1; } // 1을 찾을때까지 우로 쉬프트, 쉬프트 횟수 = i
    for (j = 0; n & 1; i++, j++) {n = n >> 1; } // 0을 찾을때까지 우로 쉬프트, 1의 갯수 = j
    for (j--, n++; i !== j; i--) {n = n << 1; } // 0자리에 1대입, 1의 갯수 -1, i === j 가 될때까지 죄로 쉬프트하면서 쉬프트 횟수 -1
    for (i; i; i--, n++) {n = n << 1; } // i === 0 될때까지 좌로 쉬프트 하면서 쉬프트 횟수 -1, 0자리에 1대입
    return n;
}

// 스택 이용해야 효율성 테스트 통과 가능한 문제.
// 짝지어 제거하기 https://school.programmers.co.kr/learn/courses/30/lessons/12973?language=javascript
function solution(s)
{
    // 1방식: 정규 표현식 이용방식은 시간 복잡도가 높아 효율성 테스트 통과 못함.
//     let len = -1;
//     while (s.length !== 0) {
//         len = s.length;
//         s = s.replace(/([a-z])\1/, "")
//         if (s.length === len) return 0;
//     }

//     return 1;
    
    // 2방식: 스택 이용 방식
    const stack = []
    let i = 0
    while (i < s.length) {
        stack[stack.length-1] === s[i] ? stack.pop() : stack.push(s[i])
        i++
    }

    return stack[0] ? 0 : 1;
}

// N개의 최소공배수 https://school.programmers.co.kr/learn/courses/30/lessons/12953?language=javascript
function solution(arr) {
    const GCD = (max, min) => max%min === 0 ? min : GCD(min, max%min);
    const LCM = (a,b) => {
        const gcd = GCD(a,b)
        return (a/gcd) * (b/gcd) * gcd;
    }

    let lcm = arr.pop()
    while (arr.length) {
        lcm = LCM(lcm, arr.pop())
    }

    return lcm
}

// [1차] 캐시 2018 KAKAO BLIND RECRUITMENT https://school.programmers.co.kr/learn/courses/30/lessons/17680#
function solution(cacheSize, cities) {
    const cache = []
    let found = -1
    if (cacheSize === 0) return cities.length * 5;
    
    return cities.reduce((sum, city) => {
        city = city.toLowerCase();
        found = cache.indexOf(city);
        
        if (found !== -1 ) {
            sum += 1;
            cache.splice(found, 1)
        } else {
            sum +=  5;
            // cache size가 0이면서 cities=["LA", "LA"] 인 경우이면서, 
            // 캐쉬사이즈 0일때 예외처리 위에서 안한경우,
            // 캐쉬 full 체크를 여기서 하면 오류 나므로 아래에서 push 후 해야 함.
            if (cache.length >= cacheSize)
                cache.shift()
        }
        
        cache.push(city)
       
        return sum
    }, 0)
}

// 행렬의 곱셈 https://school.programmers.co.kr/learn/courses/30/lessons/12949?language=javascript
function solution(arr1, arr2) {
    const rst = Array(arr1.length).fill(0).map(el => []);
    let sum = 0;
    arr1.forEach((row,r) => {
        for (let ar2C=0; ar2C<arr2[0].length; ar2C++) {
            row.forEach((n, ar1C) => sum += n * arr2[ar1C][ar2C]);
            rst[r][ar2C] = sum;
            sum = 0;
        }
    });
    
    return rst;
}

// 튜플 https://school.programmers.co.kr/learn/courses/30/lessons/64065?language=javascript
function solution(s) {
    // "{{}, {}}" => "[[], []]" 이런 문자열로 바꿔 JSON.parse()로 간단히 배열로 변경 가능.
    let rst = JSON.parse(s.replace(/[{}]/g, match => match === '{' ? '[' : ']'));
    rst.sort((a,b) => a.length - b.length);

    return rst.reduce((answer, ar) => {
        answer.push(ar.find(n => !answer.includes(n)))
        return answer
    }, [])
}

// n^2 배열 자르기 https://school.programmers.co.kr/learn/courses/30/lessons/87390
function solution(n, left, right) {
    // 풀이시도1. 문제 설명대로 모든 배열 만들어서, 메모리 초과 남(core dumped).
    // const rst = Array(n).fill(0).map((row, i) => Array(n).fill(n));
    // rst.forEach((row, r) => {
    //    for (let c=0; c<n; c++) {
    //        if (r<=c) row[c] = c+1
    //        else row[c] = r+1
    //    } 
    // });
    // return rst.flat().slice(left, right+1);
    
    
    // 풀이시도2. - 1문제 실패나고, 몇문제 시간초과 남.
//     const rst = []
//     let row = null;
//     for (let r=1; r<=n; r++) {
//         for (let c=1; c<=n; c++) {
//             if ((r-1)*n + c <= left) continue
//             if ((r-1)*n + c > right+1) return rst
            
//             if (r<=c) rst.push(c)
//             else rst.push(r)
//        } 
//     };
    
    
    // 풀이 성공.
    const rst = []   
    for (let i=left; i<=right; i++) {
        // if (i/n >= i%n) rst.push(~~(i/n)+1)
        // else rst.push(i%n+1)
        // 위 if else 문은 아래 처럼 단축 코딩으로 대체 가능.
        rst.push(Math.max(~~(i/n), i%n)+1)
    }

    return rst
}

// 연속 부분 수열 합의 개수 https://school.programmers.co.kr/learn/courses/30/lessons/131701
function solution(elements) {
    // 방식1. 내가 첨에 푼방식
//     elements = elements.concat(elements)
//     const s = new Set()
//     for (let i=0; i<elements.length/2; i++) {
//         for (let j=1; j<=elements.length/2; j++) {
//             s.add(elements.slice(i, i+j).reduce((sum, n) => sum + n, 0))
//         }
//     }
    
//     return s.size;
    
    // 방식2. 타인의 성능이 더 좋은 코드
    const circular = [...elements, ...elements]
    const s = new Set();
    let sum = 0;
    for (let i=0; i<elements.length; i++) {
        sum = 0;
        for (let j=0; j<elements.length; j++) {
            sum += circular[i+j]
            s.add(sum)
        }
    }
    
    return s.size;
}