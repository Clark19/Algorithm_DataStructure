// 문자열 내 마음대로 정렬하기 https://school.programmers.co.kr/learn/courses/30/lessons/12915
function solution(strings, n) {
  return [...strings].sort((a, b) =>
    a[n] === b[n] ? a.localeCompare(b) : a[n].charCodeAt() - b[n].charCodeAt()
  );
}

// 크기가 작은 부분문자열 https://school.programmers.co.kr/learn/courses/30/lessons/147355
// 문자열에도 slice() 사용 가능.
function solution(t, p) {
  const answer = [];
  for (let i = 0; i <= t.length - p.length; i++) {
    answer.push(t.slice(i, i + p.length));
  }
  const pNum = parseInt(p);
  return answer.filter((nStr) => parseInt(nStr) <= pNum).length;
}


// 콜라 문제 https://school.programmers.co.kr/learn/courses/30/lessons/132267
function solution(a, b, n) {
  // 방식1: 처음 푼 방식
//     let acc = ~~(n/a)*b;//6
//     let margin = n%a;//2
//     let curBottles = ~~(n/a)*b + margin;//8
  
//     while (curBottles >= a) {
//         acc += ~~(curBottles/a)*b;//8
//         margin = curBottles%a;//2
//         curBottles = ~~(curBottles/a)*b + margin
//     }
  
//     return acc;
  
  // 방식2: 방식1의 로직을 더 단순화
  let acc = 0;    
  while (n >= a) {
      acc += ~~(n/a)*b;//8
      n = ~~(n/a)*b + n%a
  }
  return acc;
}

// 푸드 파이트 대회 https://school.programmers.co.kr/learn/courses/30/lessons/134240
function solution(food) {
  let rst = ""
  food.forEach((n,i) => {
      // for (let j=0; j<Math.floor(n/2); j++)
      //     rst += i
      rst += i.toString().repeat(Math.floor(n/2))
  })

  return rst + "0" + [...rst].reverse().join("");
}

// 소수 찾기 https://school.programmers.co.kr/learn/courses/30/lessons/12921?language=javascript#
function solution(n) {
  const eratos = Array(n+1).fill(1);
  eratos[0]=0, eratos[1]=0;
  for (let i=2; i*i<=n; i++) {
  // for (let i=2; i<=Math.sqrt(n); i++) {

      for (let j=i*i; j<=n; j += i)
          eratos[j] = 0;
  }
  return eratos.filter(v => v).length;
}

// 가장 가까운 같은 글자 https://school.programmers.co.kr/learn/courses/30/lessons/142086?language=javascript
function solution(s) {
  const lastIdxMap = {};
  const arr = s.split("").map((ch, curIdx) => {
      const rst = lastIdxMap[ch] == undefined ? -1 : curIdx-lastIdxMap[ch];
      lastIdxMap[ch] = curIdx;
      return rst;
  });

  return arr;
}

// 실패율 - https://school.programmers.co.kr/learn/courses/30/lessons/42889?language=javascript
// 2019 KAKAO BLIND RECRUITMENT
function solution(N, stages) {
  // 방식1. 처음 푼 방식: 빠른 방식. 코드가 복잡하지만 시간 복잡도가 O(N) 이라서 방식2( O(N^2) ) 보다 빠름. 램 용량도 적게 사용.
  const failStagesOrder = Array(N+1).fill();
  stages.forEach((stg, i) => {
      if (failStagesOrder[stg-1] == undefined)
          failStagesOrder[stg-1] = [stg, 0];
      failStagesOrder[stg-1][1]++;
  });
  
  let restUsers = stages.length;
  let usersPerStg = 0;
  for (let i=0; i<failStagesOrder.length-2; i++) {
      if (failStagesOrder[i] == undefined) {
          failStagesOrder[i] = [i+1, 0]
          continue
      }
      usersPerStg = failStagesOrder[i][1];
      failStagesOrder[i][1] /= restUsers; // 실패율 계산후, 배열의 값을 유저수에서 실패율로 변경.
      restUsers -= usersPerStg
  }
  // 마지막 스테이지 예외 처리.
  if (failStagesOrder[failStagesOrder.length-2] == undefined)
      failStagesOrder[failStagesOrder.length-2] = [N, 0];
  if (failStagesOrder[failStagesOrder.length-1] == undefined)
      failStagesOrder[failStagesOrder.length-1] = [N+1, 0];
  failStagesOrder[failStagesOrder.length-2][1] = failStagesOrder.at(-2)[1] / (failStagesOrder.at(-2)[1] + failStagesOrder.at(-1)[1]);
  failStagesOrder.pop()
  
  return failStagesOrder.sort((a,b) => b[1]-a[1]).map(el => el[0])
  
  
  // 방식2: 코드 작성 쉽고 가독성 좋아서 빠르게 풀어서 코테에서 시간 절약시엔 좋음.
  // 시간 복잡도는 안좋음: O(N^2) 이라서 느림 - 중첩 루프(for 안에 filter()) 라서.
  // 프로그래머스 상에서 방식1이 최악성능은 약 7ms 인데, 이 방식은 최대 약 4728ms라서 600배 이상 느림.
//     const rst = []
//     for (let i=1; i<=N; i++) {
//         const reaches = stages.filter(v => v>=i).length;
//         const fail = stages.filter(v => v === i).length;
//         rst.push([i, fail/reaches])
//     };

//     return rst.sort((a,b) => b[1]-a[1]).map(v => v[0])
}

// 과일 장수 - https://school.programmers.co.kr/learn/courses/30/lessons/135808?language=javascript
function solution(k, aplPerBox, score) {
  score.sort((a,b) => b-a)
  const numOfBox = Math.floor(score.length/aplPerBox);
  const boxes = Array(numOfBox).fill(0).map(el => []);
  for (let i=0; i<numOfBox*aplPerBox; i++) {
     boxes[Math.floor(i/aplPerBox)].push(score[i]);
  };
  return boxes.reduce((acc, box) => box[aplPerBox-1]*aplPerBox + acc, 0);
}

// 명예의 전당 (1) https://school.programmers.co.kr/learn/courses/30/lessons/138477?language=javascript
function solution(k, score) {
  // 방식1. 처음 푼 방식
  // const ranking3 = [];
  // const thirdList = [];
  // score.forEach((v,i) => {
  //     if (i < k) {
  //         ranking3.push(v); 
  //         ranking3.sort((a,b) => b-a);
  //     }
  //     else if (v > ranking3.at(-1) ) {
  //         ranking3[ranking3.length-1] = v;
  //         ranking3.sort((a,b) => b-a);
  //     }
  //     thirdList.push(ranking3.at(-1));              
  // });
  // return thirdList;
  
  
  // 방식2. reduce() 사용방식.
  const ranking3 = [];
  return score.reduce((thirdList, scr) => {
      if (ranking3.length < k) {
          ranking3.push(scr);
          ranking3.sort((a,b) => b-a);
      } else if (scr > ranking3.at(-1)) {
          ranking3[k-1] = scr;
          ranking3.sort((a,b) => b-a);
      }
      thirdList.push(ranking3.at(-1));
      
      return thirdList 
  }, []);
}

// 로또의 최고 순위와 최저 순위 https://school.programmers.co.kr/learn/courses/30/lessons/77484?language=javascript
function solution(lottos, win_nums) {
  //     let correctCnt = 0;
  //     let zeroCnt = 0;
  //     lottos.forEach((n,i) => {
  //         if (n === 0) {
  //             zeroCnt++;
  //             return;
  //         }
          
  //         if (win_nums.includes(n)) correctCnt++;
          
  //     });
  //     let rank = 7;
  //     if (correctCnt === 0 || correctCnt === 1)
  //         rank = 6
  //     else
  //         rank -= correctCnt
  
  //     const lowRank = rank;
  //     const possibleNumCnt = win_nums.filter(n => !lottos.includes(n)).length;
  //     const highRank = possibleNumCnt >= zeroCnt ? rank - zeroCnt : rank - possibleNumCnt;
      
  //     return [highRank === 0 ? 1: highRank, lowRank];
      
      
    // 방식2: rank 계산 부분을 타인 코드 참고하여 rank배열로 단순화 시킨 방법.
    const rank = [6,6,5,4,3,2,1]
    let correctCnt = 0;
    let zeroCnt = 0;
    lottos.forEach((n,i) => {
        if (n === 0) {
            zeroCnt++;
            return;
        }
        if (win_nums.includes(n)) correctCnt++;
    });
    
    return [rank[correctCnt + zeroCnt], rank[correctCnt]];    
}

// 기사단원의 무기 https://school.programmers.co.kr/learn/courses/30/lessons/136798?language=javascript
function solution(number, limit, power) {
  const yaksuMap = {};
  const getNumOfYaksu = n => {
      if (yaksuMap[n]) return yaksuMap[n];
      
      let cnt = 0;
      for (let i=1; i<=n/2; i++)
          if (n%i === 0) cnt++;
      yaksuMap[n] = ++cnt;
      
      return cnt;
  };
  
  return Array(number).fill(0).map((_, i) => getNumOfYaksu(i+1)).reduce((acc, cur) => acc += cur > limit ? power : cur, 0);
}

// 카드 뭉치 https://school.programmers.co.kr/learn/courses/30/lessons/159994
function solution(cards1, cards2, goal) {
  for (const w of goal) {
      if (cards1[0] === w) cards1.shift();
      else if (cards2[0] === w) cards2.shift();
      else return "No";
  }

  return "Yes";
}

// 바탕화면 정리 https://school.programmers.co.kr/learn/courses/30/lessons/161990?language=javascript
function solution(wallpaper) {
  const xArr = [];
  const yArr = [];
  wallpaper.forEach((row, y) => {
      row.split("").forEach((data, x) => {
          if (data === "#") {
              xArr.push(x)
              yArr.push(y)
          }
      });
  });

  let minX = Math.min(...xArr)
  let maxX = Math.max(...xArr)
  let minY = Math.min(...yArr)
  let maxY = Math.max(...yArr)
  
  return [minY, minX, maxY+1, maxX+1];
}