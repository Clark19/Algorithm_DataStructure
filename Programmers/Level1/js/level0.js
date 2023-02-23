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

// Day 13 문자열, 배열, 사칙연산, 수학, 조건문
// 컨트롤 제트 https://school.programmers.co.kr/learn/courses/30/lessons/120853
function solution(s) {
  s = s.split(" ");
  var answer = 0;
  let el = 0;
  let last = "";
  while (s.length) {
    el = s.pop();
    if (el !== "Z") {
      if (last !== "Z") answer += parseInt(el);
      else last = "";
    } else {
      last = "Z";
    }
  }
  return answer;
}

// 배열 원소의 길이 https://school.programmers.co.kr/learn/courses/30/lessons/120854?language=javascript
function solution(strlist) {
  return strlist.map((el) => el.length);
}

// 중복된 문자 제거 https://school.programmers.co.kr/learn/courses/30/lessons/120888?language=javascript
function solution(my_string) {
  return [...new Set(my_string)].join("");
}

// 삼각형의 완성조건 (1) https://school.programmers.co.kr/learn/courses/30/lessons/120889
function solution(sides) {
  // const max = Math.max(...sides)
  // sides.splice(sides.indexOf(max), 1)
  // return  max < (sides[0]+sides[1]) ? 1: 2
  sides.sort((a, b) => a - b);
  return sides[2] < sides[0] + sides[1] ? 1 : 2;
}

// Day 14 조건문, 반복문, 시뮬레이션, 문자열
// 가까운 수 https://school.programmers.co.kr/learn/courses/30/lessons/120890?language=javascript
function solution(array, n) {
  const gaps = array.sort((a, b) => a - b).map((num) => Math.abs(n - num));
  return array[gaps.indexOf(Math.min(...gaps))];
}

// 369게임 https://school.programmers.co.kr/learn/courses/30/lessons/120891?language=javascript
function solution(order) {
  const m = order.toString().match(/[369]/g);
  return m ? m.length : 0;
}

// 암호 해독 https://school.programmers.co.kr/learn/courses/30/lessons/120892
function solution(cipher, code) {
  return Array.from(cipher)
    .filter((ch, i) => (i % code) + 1 === code)
    .join("");
}

// 대문자와 소문자 https://school.programmers.co.kr/learn/courses/30/lessons/120893?language=javascript
function solution(my_string) {
  return my_string
    .split("")
    .map((ch) => (ch.toUpperCase() == ch ? ch.toLowerCase() : ch.toUpperCase()))
    .join("");

  // return my_string.split("").reduce((acc,cur) => acc + (cur.toUpperCase() == cur ? cur.toLowerCase() : cur.toUpperCase()), "")

  // let answer = ""
  // for (const c of my_string) answer += c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()
  // return answer
}

// Day15 문자열, 해시, 배열, 수학
// 영어가 싫어요 https://school.programmers.co.kr/learn/courses/30/lessons/120894
function solution(numbers) {
  const numMaps = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };
  const regex = /zero|one|two|three|four|five|six|seven|eight|nine/g;
  // const m = numbers.match(regex)
  // return parseInt(m.map(key => numMaps[key]).join(""))
  return parseInt(numbers.replace(regex, (key) => numMaps[key]));
}

// 인덱스 바꾸기 https://school.programmers.co.kr/learn/courses/30/lessons/120895?language=javascript
function solution(my_string, num1, num2) {
  // var temp = my_string[num2]
  // my_string[num2] = my_string[num1]
  // my_string[num1] = temp
  my_string = my_string.split("");
  [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];
  return my_string.join("");
}

// 한 번만 등장한 문자 https://school.programmers.co.kr/learn/courses/30/lessons/120896
function solution(s) {
  // const amap = new Map();
  // s.split("").forEach(ch => amap.set(ch, amap.has(ch) ? amap.get(ch)+1 : 1));
  // let answer = [];
  // amap.forEach((v,k,m) => v === 1 ? answer.push(k) : null);
  // return  answer.sort().join("")

  // 문자열 중 딱 한번만 나온 문자 체크후 리턴시 아래와 같은 최적화된 방식 사용 가능!
  const answer = [];
  for (ch of s) if (s.indexOf(ch) === s.lastIndexOf(ch)) answer.push(ch);
  return answer.sort().join("");
}

// 약수 구하기 https://school.programmers.co.kr/learn/courses/30/lessons/120897?language=javascript
function solution(n) {
  const answer = [];
  for (let i = 1; i * 2 <= n; i++) {
    n % i === 0 ? answer.push(i) : null;
  }
  answer[answer.length] = n;
  return answer;
  // return Array(n).fill(0).map((_,i) => ++i).filter(v => n%v === 0)
}

// Day16 문자열, 수학, 배열, 조건문
// 편지 https://school.programmers.co.kr/learn/courses/30/lessons/120898
function solution(message) {
  return message.length * 2;
}

// 가장 큰 수 찾기 https://school.programmers.co.kr/learn/courses/30/lessons/120899?language=javascript
function solution(array) {
  const max = Math.max(...array);
  return [max, array.indexOf(max)];
}

// 문자열 계산하기 https://school.programmers.co.kr/learn/courses/30/lessons/120902
function solution(my_string) {
  let op = "";
  let sum = 0;
  my_string.split(" ").forEach((el) => {
    if (el === "+" || el === "-") op = el;
    else {
      if (op === "+") sum += parseInt(el);
      else if (op === "-") sum -= parseInt(el);
      else sum += parseInt(el);
    }
  });
  return sum;
}

// 배열의 유사도 https://school.programmers.co.kr/learn/courses/30/lessons/120903
function solution(s1, s2) {
  // let cnt = 0;
  // s1.forEach(el => s2.forEach(n => n === el ? cnt++ : null))
  // return cnt;
  return s1.filter((el) => s2.includes(el)).length;
}

// Day 17 문자열, 수학, 조건문, 배열, 사칙연산
// 숫자 찾기 https://school.programmers.co.kr/learn/courses/30/lessons/120904
function solution(num, k) {
  const found = num.toString().indexOf(k);
  return found === -1 ? -1 : found + 1;
}

// n의 배수 고르기 https://school.programmers.co.kr/learn/courses/30/lessons/120905?language=javascript
function solution(n, numlist) {
  return numlist.filter((num) => num % n === 0);
  // const answer = [];
  // numlist.forEach(num => num%n === 0 ? answer.push(num) : null)
  // return answer
}

// 자릿수 더하기 https://school.programmers.co.kr/learn/courses/30/lessons/120906
function solution(n) {
  return n
    .toString()
    .split("")
    .reduce((acc, cur) => acc + parseInt(cur), 0);
}

// OX퀴즈 https://school.programmers.co.kr/learn/courses/30/lessons/120907
function solution(quiz) {
  return quiz.map((el) => {
    let [calc, rst] = el.split(" = ");
    let sum = 0;
    calc = calc.split(" ");
    if (calc[1] === "+") sum = parseInt(calc[0]) + parseInt(calc[2]);
    else sum = parseInt(calc[0]) - parseInt(calc[2]);

    return sum === parseInt(rst) ? "O" : "X";
  });
}

// Day 18 문자열, 수학, 조건문, 정렬\
// 문자열안에 문자열 https://school.programmers.co.kr/learn/courses/30/lessons/120908
function solution(str1, str2) {
  return str1.includes(str2) ? 1 : 2;
}

// 제곱수 판별하기 https://school.programmers.co.kr/learn/courses/30/lessons/120909
function solution(n) {
  // return Number.isInteger(Math.sqrt(n)) ? 1 : 2;
  return Math.sqrt(n) % 1 === 0 ? 1 : 2;
}

// 세균 증식 https://school.programmers.co.kr/learn/courses/30/lessons/120910?language=javascript
function solution(n, t) {
  // return 2**t*n;
  // return n*Math.pow(2,t)
  return n << t;
}

// 문자열 정렬하기 (2) https://school.programmers.co.kr/learn/courses/30/lessons/120911
function solution(my_string) {
  return [...my_string.toLowerCase()].sort().join("");
  // return my_string.toLowerCase().split("").sort().join("");
}


// Day 19 문자열, 배열, 조건문
// 7의 개수 https://school.programmers.co.kr/learn/courses/30/lessons/120912
function solution(array) {
  return array.join("").split(7).length -1;
}

// 잘라서 배열로 저장하기 https://school.programmers.co.kr/learn/courses/30/lessons/120913
function solution(my_str, n) {
  // const answer = [];
  // for (let i=0; i<my_str.length; i += n)
  //     answer.push(my_str.slice(i, i+n))
  // return answer;
  
  return my_str.match(new RegExp(`.{1,${n}}`, "g"));   
}

// 중복된 숫자 개수 https://school.programmers.co.kr/learn/courses/30/lessons/120914
function solution(array, n) {
  return array.filter(el => n === el).length;
}

// 머쓱이보다 키 큰 사람 https://school.programmers.co.kr/learn/courses/30/lessons/120915
function solution(array, height) {
  return array.filter(el => el > height).length;
}


// Day 20 수학, 시뮬레이션, 문자열, 사칙연산
// 직사각형 넓이 구하기 https://school.programmers.co.kr/learn/courses/30/lessons/120860
function solution(dots) {
  const rst = dots.sort((a,b) => a[0]-b[0]); // x좌표를 기준으로 정렬
  const w = dots[2][0] - dots[0][0]
  const h = Math.abs(dots[1][1] - dots[0][1])
  return w*h;
}

// 캐릭터의 좌표 구하기 https://school.programmers.co.kr/learn/courses/30/lessons/120861
function solution(keyinput, board) {
  const maxX = Math.trunc(board[0]/2);
  const minX = -maxX;
  const maxY = Math.floor(board[1]/2);
  const minY = -maxY;
  let x =0, y=0;
  keyinput?.forEach(el => {
      if (el === "right") x++
      else if (el === "left") x--
      else if (el === "up") y++
      else if (el === "down") y--
      
      if (x < minX) x = minX;
      else if (x > maxX) x = maxX;
      else if (y < minY) y = minY;
      else if (y > maxY) y = maxY;
  });
  
  return [x, y];
  
  
//     let key = {"right" : [1,0], "up" : [0,1], "down" : [0,-1], "left" : [-1,0]};
//     let rslt = keyinput.map(v => key[v]).reduce((a,b) => { 
//         if (Math.abs(a[0] + b[0]) > board[0]/2 || Math.abs(a[1] + b[1]) > board[1]/2) 
//             return [a[0],a[1]] ; 

//         return [a[0] + b[0], a[1] + b[1]];}
//     , [0,0])

//     return rslt;
}

// 최댓값 만들기 (2) https://school.programmers.co.kr/learn/courses/30/lessons/120862
// 정렬 후 제일 앞/뒤 것이 최대 또는 최소가 됨을 이용하면 O(n^2) 보다 더 빠르게 O(n) 성능으로 구현 가능
function solution(numbers) {
  // 방식1. O(n^2), 더 느림
  // let max = Number.MIN_SAFE_INTEGER;
  // numbers.forEach(n => numbers.forEach(num => {
  //     if (numbers.indexOf(n) === numbers.lastIndexOf(num)) return
  //     const m = n*num;
  //     m > max ? (max=m) : null;
  // }));
  // return max;
  
  // 방식2. O(n), 더 빠름
  const n = numbers.sort((a,b) => a-b)
  return Math.max(n[0]*n[1], n.at(-1)*n.at(-2))
}

// 다항식 더하기 https://school.programmers.co.kr/learn/courses/30/lessons/120863
// ! 맞추기 여려움. 레벨 0 짜리지만 맞추면 9점 줄 정도로 다양한 케이스를 고려해야 해서 맞추기 어려운 문제.
function solution(polynomial) {
  let sum = {nx:0, x:0, n:0};
  polynomial.split(" + ").forEach(el => {
      if (!el.includes("x"))
          sum.n += Number(el)
      else if (el.length === 1 )
          sum.x++
      else
          // sum.nx += Number(el.replace(/x/, ""))
          sum.nx += parseInt(el)

      
  });
  
  let rst = "";
  let nx = sum.nx + sum.x;
  if (nx == 1) rst += "x";
  else if (nx > 1) rst += `${nx}x`;
  // when nx == 0 : rst = ""
  
  if (rst === "")
      rst += sum.n !== 0 ? `${sum.n}` : "";
  else
      rst += sum.n !== 0 ? ` + ${sum.n}` : "";

  return rst === "" ? "0" : rst;
}


// Day 21 문자열, 사칙연산, 시뮬레이션, 2차원배열, 수학, 배열
// 숨어있는 숫자의 덧셈 (2) https://school.programmers.co.kr/learn/courses/30/lessons/120864
function solution(my_string) {
  // const rst = my_string.match(/\d+/g)
  // 여기선 parseInt()사용해도 됨. .match()로 뽑아서 배열에 빈문자열이 없기 때문에.
  // return rst ? rst.reduce((acc, cur) => acc + parseInt(cur),0) : 0;
  return my_string.split(/\D+/).reduce((acc, cur) => acc + Number(cur), 0);
  
  // 아래 방식처럼 Number() 대신 parseInt() 사용하면 cur이 빈문자열일때("") NaN리턴해서 제대로 처리 못함. split로 뽑으면 배열에 빈 문자열 생김.
  // return my_string.split(/\D+/).reduce((acc, cur) => acc + parseInt(cur),0) 
}

// 안전지대 (2) https://school.programmers.co.kr/learn/courses/30/lessons/120865
function solution(board) {
  const bLen = board.length;
  board.forEach((el,r, arr) => el.forEach((ia, c) => {
      if (ia === 1) {
          const iaLen = arr.length;
          const rs = r-1 < 0 ? 0 : r-1;
          const re = r+1 >= bLen ? bLen-1 : r+1;
          const cs = c-1 < 0 ? 0 : c-1;
          const ce = c+1 >= iaLen ? iaLen-1 : c+1;
          for (let i=rs; i<=re; i++) {
              for (let j=cs; j<=ce; j++) {
                  if (arr[i][j] !== 1)
                      arr[i][j] = 2;
              }
          }
      }
  }));
  
  let dZoneCnt = 0
  board.forEach(el => el.forEach(e => e ? dZoneCnt++ : 0 ));
  return bLen**2 - dZoneCnt
}

// 삼각형의 완성조건 (2) https://school.programmers.co.kr/learn/courses/30/lessons/120866
function solution(sides) {
  let max = sides[0] > sides[1] ? sides[0] : sides[1];
  const min = sides[1] === max ? sides[0] : sides[1];
  const rst = []
  let x = max-min+1; 
  while (x <= max)
      rst.push(x++);
  while (x < (min+max))
      rst.push(x++)
  
  return rst.length;
}

// 외계어 사전 (2) https://school.programmers.co.kr/learn/courses/30/lessons/120867
function solution(spell, dic) {
  // const s = spell.sort().join("")
  // const found = dic.find(el => el.split("").sort().join("") === s);
  // return found ? 1 : 2;
  
  return dic.find(el => spell.every(e => el.includes(e))) ? 1 : 2;
}


// Day 22 dp, 수학, 조건문, 배열
// 저주의 숫자 3 https://school.programmers.co.kr/learn/courses/30/lessons/120871
function solution(n) {
    let rst = 0;
    for (let i=1; i<=n; i++) {
        rst++
        if (rst%3 === 0 || rst.toString().includes("3"))
            --i;
    }
    return rst;
}

// 평행 https://school.programmers.co.kr/learn/courses/30/lessons/120875?language=javascript
function solution(dots) {
    let aPairIdx = 1;
    const [ax1, ay1] = dots[3];
    const length = dots.length;
    for (let i=0; i<length-1; i++) {
        const [ax2, ay2] = dots[i];
        const [bx1, by1] = dots[(i+1)%3];
        const [bx2, by2] = dots[(i+2)%3];

        if ( Math.abs(ay2-ay1)/Math.abs(ax2-ax1)
             === Math.abs(by2-by1)/Math.abs(bx2-bx1) )
            return 1
        
    }
    return 0;
}

// 겹치는 선분의 길이 https://school.programmers.co.kr/learn/courses/30/lessons/120876
function solution(lines) {
  /*
  // 방식1: 선분 상의 정수들을 배열로 만들어 중복 체크하는 방식
  let ptsOfLines = []
  for (let i=0; i<lines.length; i++) {
      const [start, end] = lines[i];
      ptsOfLines.push(Array(end-start+1).fill(0).map((v,i) => start+i));
  }

  let overlapped = []
  let overlappedPts = []
  for (let i=0; i<ptsOfLines.length; i++) {
      overlappedPts = ptsOfLines[i].filter(n => ptsOfLines[(i+1)%3].includes(n));
      if (overlappedPts.length >= 2)
          overlapped.push(overlappedPts)
  }   

  if (overlapped.length === 3) { // 세개의 선분이 겹치는 경우
      return Math.max(...overlapped.flat())
       - Math.min(...overlapped.flat())
  }
  else { // 2개 이하의 선분이 겹칠 때
      if (overlapped.length === 0) return 0;
      return overlapped.reduce((acc, el) => acc + Math.max(...el) - Math.min(...el), 0)
  }
*/
  
  // 방식2. 속도 문제를 떠나서 직관적인 아이디어
  // start와 end에 해당하는 공간을 모두 채운 후에 두번 이상 채워진 건 겹쳐진 것이므로 그것의 갯수가 2 이상인 것의 갯수를 구하는 방식.
  const line = Array(200).fill(0);
  lines.forEach(([start, end]) => {
      for (; start<end; start++)
          line[100+start]++; // 시작포인트를 20으로 잡을 경우 성공 못하는 테스트 케이스 존재 함. 그래서 100으로 잡음.
  });
  return line.reduce((acc, cur) => cur>=2 ? acc+1 : acc,0)
}

// 유한소수 판별하기 https://school.programmers.co.kr/learn/courses/30/lessons/120877
function solution(a, b) {
  const gcd = (max,min) => max%min===0 ? min : gcd(min, max%min);
  const checkDenominatorSoinsu = num => {
      while (num%2 === 0) num /= 2;
      while (num%5 === 0) num /= 5;
      return num === 1 ? 1 : 2;
  };
  
  return checkDenominatorSoinsu(b/gcd(b,a));
}


// Day 23 배열, 정렬, 문자열
// 특이한 정렬 https://school.programmers.co.kr/learn/courses/30/lessons/120880
function solution(numlist, n) {
  // return numlist.sort((a,b) => {
  //     const ma = Math.abs(n-a);
  //     const mb = Math.abs(n-b);
  //     if (ma < mb) return -1;
  //     if (ma > mb) return 1;
  //     if (ma === mb) {
  //         return a > b ? -1 : 1;
  //     }
  // });
  
  return numlist.sort((a,b) => Math.abs(n-a) - Math.abs(n-b) || b-a)
}

// 등수 매기기 https://school.programmers.co.kr/learn/courses/30/lessons/120881
function solution(score) {
  const mean = score.map(([eng, math]) => (eng+math)/2)
  let sortedMean = [...mean].sort((a,b)=>b-a);
  return mean.map(pt => sortedMean.indexOf(pt)+1);
}

// 옹알이 (1) https://school.programmers.co.kr/learn/courses/30/lessons/120882
function solution(babbling) {
  const regexp = /^(aya|ye|woo|ma)+$/;
  
  return babbling.reduce((ans, word) => (
    regexp.test(word) ? ++ans : ans
  ), 0);
}

// 로그인 성공? https://school.programmers.co.kr/learn/courses/30/lessons/120883?language=javascript
function solution(id_pw, db) {
  // const [id, pw] = id_pw;
  // for (const user of db) {
  //     let [_id, _pw] = user;
  //     if (_id === id) {
  //         if (_pw !== pw) return "wrong pw"
  //         return "login"
  //     }
  // }
  // return "fail";
  
  const [id, pw] = id_pw;
  const dbMap = new Map(db);
  return dbMap.has(id) ? (dbMap.get(id) === pw ? "login" : "wrong pw") : "fail";
}
