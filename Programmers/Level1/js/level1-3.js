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
