/** 프로그래머스 레벨 0 자바스크립트로 푼거 */

// 4일차 수학, 배열
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

// 5일차 수학, 배열
// 옷가게 할인 받기 https://school.programmers.co.kr/learn/courses/30/lessons/120818
function solution(price) {
  let answer = 0;
  let discount = 1.0;

  if (price >= 500000) discount = 0.8;
  else if (price >= 300000) discount = 0.9;
  else if (price >= 100000) discount = 0.95;

  return Math.trunc(price * discount);
}

// 아이스 아메리카노 https://school.programmers.co.kr/learn/courses/30/lessons/120819
function solution(money) {
  let answer = [];
  answer.push(Math.trunc(money / 5500));
  answer.push(money % 5500);
  return answer;
}

// 나이 출력 https://school.programmers.co.kr/learn/courses/30/lessons/120820
function solution(age) {
  return 2022 - age + 1;
}

// 배열 뒤집기
function solution(num_list) {
  let answer = [];
  for (let i = num_list.length - 1; i >= 0; i--) answer.push(num_list[i]);

  return answer;
  // return num_list.reaasverse() // mutable : 원본 배열을 건드리는 함수
}

// 6일차 문자열, 반복문, 출력, 배열, 조건문
// 문자열 뒤집기 https://school.programmers.co.kr/learn/courses/30/lessons/120821
function solution(my_string) {
  let answer = "";
  for (let i = my_string.length - 1; i >= 0; i--) {
    answer += my_string[i];
  }
  return answer;
}

// 직각삼각형 출력하기 https://school.programmers.co.kr/learn/courses/30/lessons/120823
function solution(n) {
  for (let i = 1; i <= n; i++) {
    // let s = ""
    // for (let j=1; j<=i; j++)
    //     s += "*"
    // console.log(s)
    // s = ""
    console.log("*".repeat(i));
  }
}

// 짝수 홀수 개수 https://school.programmers.co.kr/learn/courses/30/lessons/120824
function solution(num_list) {
  // let answer = [0, 0]; // [0] 짝, [1] 홀 카운트
  // num_list.forEach(el => el%2 ? answer[1]++: answer[0]++)
  // return answer;

  let answer = [0, 0];
  num_list.forEach((el) => answer[el % 2]++);
  return answer;
}

// 문자 반복 출력하기 https://school.programmers.co.kr/learn/courses/30/lessons/120825
function solution(my_string, n) {
  // return my_string.split("").map(el => el.repeat(n)).join("");
  // return [...my_string].map(el => el.repeat(n)).join("")
  return [...my_string].reduce((acc, cur) => acc + cur.repeat(n), "");
}

// 7일차 문자열, 조건문, 수학, 반복문
// 특정 문자 제하기 https://school.programmers.co.kr/learn/courses/30/lessons/120826
function solution(my_string, letter) {
  // return my_string.replaceAll(letter, "");

  // const regexp = new RegExp(letter, "g");
  // return my_string.replace(regexp, "")

  return my_string.split(letter).join("");
}

// 각도기 https://school.programmers.co.kr/learn/courses/30/lessons/120829
function solution(angle) {
  let answer = 0;

  if (angle === 180) answer = 4;
  if (90 < angle && angle < 180) answer = 3;
  if (angle === 90) answer = 2;
  if (0 < angle && angle < 90) answer = 1;

  return answer;
}

// 양꼬치 https://school.programmers.co.kr/learn/courses/30/lessons/120830
function solution(n, k) {
  // return 12000*n + 2000*(k - Math.trunc(n/10));
  return 12000 * n + 2000 * (k - ~~(n / 10));
}

// 짝수의 합 https://school.programmers.co.kr/learn/courses/30/lessons/120831
function solution(n) {
  // let sum = 0;
  // for (let i=2; i<=n ; i += 2) {
  //     sum += i
  // }
  // return sum;

  // return Array(n).fill(1)
  //     .map((_, i) => ++i)
  //     .filter(el => el%2 == 0)
  //     .reduce((acc, cur) => acc + cur, 0)

  return ((~~(n / 2) * (2 + n)) / 2) | 0;
}

// Day 8 배열, 구현, 수학
// 배열 자르기 https://school.programmers.co.kr/learn/courses/30/lessons/120833
function solution(numbers, num1, num2) {
  return numbers.slice(num1, num2 + 1);
}

// 외계행성의 나이 https://school.programmers.co.kr/learn/courses/30/lessons/120834
function solution(age) {
  // return String(age).split("").map(numStr => "abcdefghij"[numStr]).join("");

  // return String(age).split("").map(numStr => String.fromCharCode(97+Number(numStr)) ).join("")

  return age.toString().replace(/./g, (n) => "abcdefghij"[n]);
}

// 진료 순서 정하기 https://school.programmers.co.kr/learn/courses/30/lessons/120835
function solution(emergency) {
  // let sortedEmergecy = [...emergency].sort((a,b) => b-a)
  // same immutable sort array
  let sortedEmergecy = emergency.slice().sort((a, b) => b - a);
  return emergency.map((n) => sortedEmergecy.indexOf(n) + 1);
}
