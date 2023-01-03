/** 인프런_자바스크립트 알고리즘 문제풀이 입문 */

let rst = null;

/** 기본 문제 풀이 */

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
