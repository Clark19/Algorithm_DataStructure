// Sum values
(function () {
  // 입력 == Input
  const scores = [100, 75, 50, 37, 90, 95];
  let sum = 0;
  let N = scores.length;

  // 처리 == Process
  for (let i = 0; i < N; i++) {
    // 필터링 조건 넣는다.
    if (scores[i] >= 80) sum += scores[i];
  }

  // 출력 == Output
  console.log(`${N}명의 점수 중 80점 이상의 총점: ${sum}`);

  sum = 0;
  let i = 0;
  do {
    sum += i;
    i++;
  } while (i <= 5);
  console.log(`total: ${sum}`);
})();

// Average value
(() => {
  // input
  const scores = [100, 75, 50, 37, 90, 95];
  let sum = 0;
  let cnt = 0;
  const N = scores.length;

  // process
  for (let i = 0; i < N; i++) {
    if (scores[i] <= 50) {
      cnt++;
      sum += scores[i];
    }
  }

  // output
  console.log(`평균: ${sum / cnt}`);
})();

// Max value
(() => {
  // 0. initialize
  let max = Number.MIN_SAFE_INTEGER;

  // 1. input
  const input = [-7, -100, -5, -20];

  // 2. process
  input.forEach((num) => {
    if (num > max) max = num;
  });

  // 3. output
  console.log(`Mav value: ${max}`);
})();

// Min value
(() => {
  // 0. initialize
  let min = Number.MAX_SAFE_INTEGER;

  // 1. input
  const input = [2, 5, 3, 7, 1]; // 전체 작은 값=1, 짝수 중 작은 값은 2

  // 2. process
  input.forEach((num) => {
    if (num < min && num % 2 === 0) min = num;
  });

  // 3. output
  console.log(`Mav value: ${min}`);
})();

// Near value 근사값(원본 데이터 중에서 대상 데이터와 가장 까까운 값 구하기) == 차이값의 절대값 중에서 최소값
(() => {
  // init
  const target = 25;
  let min = Number.MAX_SAFE_INTEGER;

  // input
  const numbers = [10, 20, 30, 27, 17];
  let near = 0;

  // process
  let diff = 0;
  for (let i = 0; i < numbers.length; i++) {
    diff = Math.abs(numbers[i] - target);
    if (diff < min) {
      min = diff;
      near = numbers[i];
    }
  }

  // output
  console.log(`target ${target}과 가장 가까운 값: ${near} (차이: ${min})`);
})();

// Rank 순위 기초 알고리즘
(() => {
  // input
  const scores = [90, 87, 100, 95, 80]; // 등수: 3,4,1,2,5
  let N = scores.length;
  let rankings = Array(5).fill(1);

  // process
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (scores[i] < scores[j]) {
        rankings[i]++;
      }
    }
  }

  // output
  scores.forEach((score, i) => {
    console.log(`랭킹${rankings[i]}: ${score}점`);
  });
})();


const swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

// 선택 정렬 = Selection Sort
(() => {
  // init
  console.log(1)
  // input: Data structure(Array, List, Stack, Queue, Tree, DB, ...)
  const data = [3, 2, 1, 5, 4] // 비정렬 데이터
  const N = data.length // 의사코드(슈도코드) (공통의) 형태로 알고리즘을 표현하기 위함
  console.log(2)
  // process
  for (let i=0; i<N-1; i++) {
    for (let j=i+1; j<N; j++) {
      if (data[j] < data[i]) { // 부등호 방향에 따라 오름차순(<), 내림차순(>) 둘 중 하나로 정렬 됨
        swap(data, i, j)
      }
    }
  }
  console.log(3)
  
  // output: UI (Console, Desktop, Web, Mobile)
  console.log(`* 선택 정렬: ${data}`)
})();