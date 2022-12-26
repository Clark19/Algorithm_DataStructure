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
