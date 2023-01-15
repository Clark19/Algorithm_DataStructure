/** 인프런_자바스크립트 알고리즘 문제풀이 입문 */

let rst = null;

/** 기본 문제 풀이 */

// 1. 세 수 중  최소값 : Math.min(a, b, c); 은 사용 안하고 풀기.
function min(a, b, c) {
  let answer;

  // 내가 처음 푼 방법 - 답은 나오는데 비효율적 코드로 보임
  // if (a <= b) {
  //   if (a <= c) return a;
  //   if (c <= a) return c;
  // } else if (b <= c) {
  //   if (b <= a) return b;
  //   if (a <= b) return a;
  // }

  if (a < b) answer = a;
  else answer = b;

  if (c < answer) answer = c;

  return answer;
}

console.log(min(2, 5, 1));
console.log(min(6, 5, 11));
console.log(min(6, 5, 3));

// 6강. 홀수
rst = ((arr) => {
  let sum = 0,
    min = Number.MAX_SAFE_INTEGER;

  arr.forEach((num) => {
    if (num % 2) {
      sum += Number(num);
      if (num < min) min = num;
    }
  });

  return [sum, min];
})([12, 77, 38, 41, 53, 92, 85]);

console.log(rst[0] + "\n" + rst[1]);
