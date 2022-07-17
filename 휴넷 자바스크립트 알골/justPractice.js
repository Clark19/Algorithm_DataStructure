// 입력
const scores = [ 100, 75, 50, 37, 90, 95];
let sum = 0;
let N = scores.length;

// 처리
for (let i=0; i<N; i++) {
  if (scores[i] >= 80)
    sum += scores[i]
}

// 출력
console.log(`${N}명의 점수 중 80점 이상의 총점: ${sum}`);


sum = 0
let i = 0
do {
  sum += i
  i++
} while (i <= 5);
console.log(`total: ${sum}`)
