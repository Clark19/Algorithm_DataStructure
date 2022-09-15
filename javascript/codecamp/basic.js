// // Reference Code (hard Coding)
// let answer = 0; // 이동 횟수
// let current = 1; // 로봇의 현재 위치

// answer = answer + 1;
// current = current + 2; 
// // ... (49번 반복)

// answer = answer + 1;
// current = current + 1;


// // Reference Code (for 반복문)
// let answer = 0; // 이동 횟수
// const limit = 100; // 이동할 층

// for( let i = 1; i < limit; i = i + 2 ) {
// 	answer = answer + 1;
// }

//최종 
const limit = 100; // 이동할 층

const answer = Math.floor( limit / 2 );


/* 배열의 선언과 할당. push, index
*/
const fruits = [];

// push
fruits.push("사과");
fruits.push("바나나");
fruits.push("파인애플");

// index
fruits[0] = "사과";
fruits[1] = "바나나";
fruits[2] = "파인애플";

const fruits = ["사과", "바나나", "파인애플"]