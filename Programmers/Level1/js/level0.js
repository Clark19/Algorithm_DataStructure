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

// 순서쌍의 개수 https://school.programmers.co.kr/learn/courses/30/lessons/120836?language=javascript
function solution(n) {
  // var answer = 0
  // for (let i=1; i<=n; i++) {
  //     for (let j=1; j<=n; j++) {
  //         if (i*j === n)
  //             answer++
  //     }
  // }
  // return answer;

  let answer = 0;
  for (let i = 2; i <= n; i++) {
    if (n % i === 0) answer++;
  }

  return ++answer;
}

// Day 9 수학, 문자열, 해시, 완전탐색, 조건문
// 개미 군단 https://school.programmers.co.kr/learn/courses/30/lessons/120837
function solution(hp) {
  let answer = Math.trunc(hp / 5);
  answer += Math.trunc((hp % 5) / 3);
  answer += Math.trunc(((hp % 5) % 3) / 1);

  return answer;
}

//모스부호 (1) https://school.programmers.co.kr/learn/courses/30/lessons/120838
function solution(letter) {
  morse = {
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
  };
  // return letter.split(" ").map(el => morse[el]).join("");
  return letter.split(" ").reduce((prev, cur) => prev + morse[cur], "");
}

// 가위 바위 보 https://school.programmers.co.kr/learn/courses/30/lessons/120839
function solution(rsp) {
  let GaBaBo = { 2: 0, 0: 5, 5: 2 };
  return rsp.split("").reduce((prev, cur) => prev + GaBaBo[cur], "");
}

// 구슬을 나누는 경우의 수 https://school.programmers.co.kr/learn/courses/30/lessons/120840
function factorial(n) {
  // if (n < 0) return;
  // if (n < 2) return 1;
  // return n * factorial(n - 1);
  let sum = BigInt(1);
  for (let i = 2; i <= n; i++) sum *= BigInt(i);

  return sum;
}
function solution(balls, share) {
  // nCr = n! / (n-r)!r!
  return factorial(balls) / (factorial(balls - share) * factorial(share));
}

// Day 10 조건문, 배열, 수학, 시뮬레이션
//점의 위치 구하기
function solution(dot) {
  let x = dot[0] > 0 ? [1, 4] : [2, 3];
  let y = dot[1] > 0 ? [1, 2] : [3, 4];
  let interSection = x.filter((n) => y.indexOf(n) >= 0);

  return interSection[0];
}

// 2차원으로 만들기
function solution(num_list, n) {
  // 방식1.
  // const len = Math.ceil(num_list.length / n)
  // let answer = Array();
  // let k = 0;
  // for (let i = 0; i < len; i++) {
  //   answer[i] = [];
  //   for (let j = 0; j < n; j++) {
  //     answer[i].push(num_list[k++]);
  //   }
  // }
  //   return answer;

  // 방식2. - mutable
  const arr = [];
  while (num_list.length) {
    arr.push(num_list.splice(0, n));
  }

  // 방식3 - immutable
  // for (let i=0; i<num_list.length; i += n) {
  //     arr.push(num_list.slice(i, i+n))
  // }

  return arr;
}

// 공 던지기 https://school.programmers.co.kr/learn/courses/30/lessons/120843?language=javascript
function solution(numbers, k) {
  return numbers[((k - 1) * 2) % numbers.length];
}

// 배열 회전시키기 https://school.programmers.co.kr/learn/courses/30/lessons/120844?language=javascript
function solution(numbers, direction) {
  // const answer = [];
  // if (direction === "right") {
  //     answer.push(numbers.at(-1))
  //     answer.push(...numbers.slice(0,-1))
  // } else {
  //     answer.push(...numbers.slice(1))
  //     answer.push(numbers.at(0))
  // }
  // return answer;

  if (direction === "right") {
    numbers.unshift(numbers.pop());
  } else {
    numbers.push(numbers.shift());
  }
  return numbers;
}

// Day 11 수학, 반복문
// 주사위의 개수 https://school.programmers.co.kr/learn/courses/30/lessons/120845?language=javascript
function solution(box, n) {
  let answer = Math.floor(box[0] / n);
  answer *= Math.floor(box[1] / n);
  answer *= Math.floor(box[2] / n);
  return answer;
}

// 합성수 찾기 https://school.programmers.co.kr/learn/courses/30/lessons/120846?language=javascript
const hasYaksu = (n) => {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return true;
  }
  return false;
};
function solution(n) {
  var answer = 0;
  for (let i = 2; i <= n; i++) {
    if (hasYaksu(i)) answer++;
  }
  return answer;
}

// 최댓값 만들기 (1) https://school.programmers.co.kr/learn/courses/30/lessons/120847
function solution(numbers) {
  //     let max1 = Math.max(...numbers);
  //     numbers.splice(numbers.indexOf(max1), 1)
  //     let max2 = Math.max(...numbers)

  //     return max1 * max2;

  const [max1, max2] = numbers.sort((a, b) => b - a);
  return max1 * max2;
}

// 팩토리얼 https://school.programmers.co.kr/learn/courses/30/lessons/120848?language=javascript
function solution(n) {
  var answer = 1;
  for (let i = 2; i <= n; i++) {
    answer *= i;
    if (answer >= n) {
      if (answer == n) return i;
      return --i;
    }
  }

  return answer;
}

// Day 12 문자열, 정렬, 사칙연산, 수학
// 모음 제거 https://school.programmers.co.kr/learn/courses/30/lessons/120849
function solution(my_string) {
  const mo = ["a", "e", "i", "o", "u"];
  // let answer = my_string.split("").filter(el => !mo.includes(el)).join("");
  // let answer = my_string.split("").reduce((prev, cur) => prev + (!mo.includes(cur) ? cur : ""), "");
  let answer = my_string.replace(/[aeiou]/g, "");
  return answer;
}

// 문자열 정렬하기 (1) https://school.programmers.co.kr/learn/courses/30/lessons/120850?language=javascript
// 문자열 안의 숫자들만 추출해서 오름차순으로 정렬하는 문제.
function solution(my_string) {
  let regex = /\d/g;
  // let ret = [...my_string.matchAll(regex)].map(el => parseInt(el[0])).sort((a,b) => a-b)
  let ret = my_string
    .match(regex)
    .map((el) => parseInt(el))
    .sort((a, b) => a - b);
  return ret;
}

// 숨어있는 숫자의 덧셈 (1) https://school.programmers.co.kr/learn/courses/30/lessons/120851
function solution(my_string) {
  return my_string.match(/\d/g).reduce((acc, cur) => acc + parseInt(cur), 0);
  // return Array.from(my_string.replace(/[^\d]/g, "")).reduce((acc, cur) => acc + parseInt(cur), 0);
}

// 소인수분해 https://school.programmers.co.kr/learn/courses/30/lessons/120852
function solution(n) {
  const primes = eratos(n);
  let answer = [];
  let b = n;
  let p = 0;
  for (let i = 0; i < primes.length; i++) {
    p = primes[i];
    if (b % p !== 0) continue;

    b = b / p;
    answer.push(p);
    if (b !== 1) i--;
    else break;
  }

  return [...new Set(answer)];
}
// 에라토스테네스의 체 = 소수 갯수 구하기 또는 소수 구하기
function eratos(num) {
  let sieve = Array(num + 1).fill(1);
  (sieve[0] = 0), (sieve[1] = 0);
  for (let i = 2; i * i <= num; i++) {
    for (let j = i * i; j <= num; j += i) {
      sieve[j] = 0;
    }
  }
  // console.log(sieve)
  let primes = [];
  sieve.forEach((el, i) => (el ? primes.push(i) : null));
  return primes;
}
