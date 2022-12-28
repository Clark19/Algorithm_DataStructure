// 백준 알고리즘 JavaScript 로 내가 푼 코드들

// 1000번 A+B - https://www.acmicpc.net/problem/1000
const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map((el) => Number(el));

console.log(input[0] + input[1]);

//  2920번 음계 - https://www.acmicpc.net/problem/2920
// 방법 1 - 직관적 방법 forEach
{
  const fs = require("fs");
  const input = fs
    .readFileSync("/dev/stdin")
    .toString()
    .split(" ")
    .map((el) => Number(el));

  let isAsc = true;
  let isDesc = true;

  input.forEach((el, idx, arr) => {
    if (idx === arr.length - 1) return;

    if (arr[idx] > arr[idx + 1]) {
      isAsc = false;
    }
    if (arr[idx] < arr[idx + 1]) {
      isDesc = false;
    }
  });

  if (isAsc) console.log("ascending");
  else if (isDesc) console.log("descending");
  else console.log("mixed");
}

// 방법 2 - 객체 이용 방식 (if 문 최소화)
{
  const fs = require("fs");
  const input = fs.readFileSync("/dev/stdin").toString().trim();

  const obj = {
    "1 2 3 4 5 6 7 8": "ascending",
    "8 7 6 5 4 3 2 1": "descending",
  };

  console.log(obj[input] || "mixed");
}

// 블랙잭 - https://www.acmicpc.net/problem/2798
// 방법 1 - 3중 for문
{
  const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
  const [N, M] = input[0].split(" ").map(Number);
  const data = input[1].split(" ").map(Number);

  let result = 0;
  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      for (let k = j + 1; k < N; k++) {
        sum = data[i] + data[j] + data[k];
        if (sum <= M) {
          result = sum > result ? sum : result;
        }
      }
    }
  }
  console.log(result);
}
