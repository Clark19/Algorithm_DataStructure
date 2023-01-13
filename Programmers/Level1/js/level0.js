/** 프로그래머스 레벨 0 자바스크립트로 푼거 */

// 4일차
// 피자 나눠 먹기 (1) - https://school.programmers.co.kr/learn/courses/30/lessons/120814
function solution(n) {
  // return Math.ceil(n / 7) // 가장 단순하면서 최적화 풀이

  // Math.ceil() 안쓰고 풀어본거
  let answer = n / 7;
  if (answer % 1) answer = Math.trunc(answer) + 1;

  return answer;
}

console.log(solution(7));
console.log(solution(1));
console.log(solution(15));
console.assert(solution(7) === 1);
console.assert(solution(1) === 1);
console.assert(solution(15) === 3);

//피자 나눠 먹기 (2) - https://school.programmers.co.kr/learn/courses/30/lessons/120815?language=javascript
function solution(n) {
  // n과 6 의 최소공배수 구하고 <= 그러면 먼저 최대공약수 구해야 함.
  // 최소공배수를 6으로 나눈 몫을 리턴
  let min = n < 6 ? n : 6;
  let max = n >= 6 ? n : 6;
  let g = gcd(min, max);
  // console.log("gcd: ", g)

  // n과 6 lcm
  let l = lcm(6, n, g);
  // console.log("lcm: ", l)

  return l / 6;
}

function gcd(a, b) {
  return a % b === 0 ? b : gcd(b, a % b);
}

function lcm(a, b, gcd) {
  // return gcm * a/gcm * b/gcm  // 불필요 연산 중복됨
  return (a * b) / gcd;
}

// 피자 나눠 먹기 (3) - https://school.programmers.co.kr/learn/courses/30/lessons/120816?language=javascript
function solution(slice, n) {
  //     let cnt = 1
  //     while (slice * cnt < n) {
  //         cnt++
  //     }

  //     return cnt;

  return Math.ceil(n / slice);
}

// 배열의 평균값 https://school.programmers.co.kr/learn/courses/30/lessons/120817?language=javascript
function solution(numbers) {
  return numbers.reduce((acc, cur) => acc + cur, 0) / numbers.length;
}
