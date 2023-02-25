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
