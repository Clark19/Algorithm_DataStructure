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
