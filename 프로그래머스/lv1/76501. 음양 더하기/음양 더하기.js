// 1. for문으로 absolutes 안의 배열들을 조건문으로 돌린다
// 2. signs[i] 가 참이면 ? absolutes를 정답에 더하고 거짓이면 빼는 삼항연산자
// 3. return answer; 위치가 for 문의 {} 에 들어가면 값이 달라지니 조심

function solution(absolutes, signs) {
    let answer = 0;
    for( i = 0; i < absolutes.length ; i++){
    signs[i] === true ? answer +=absolutes[i] : answer -=absolutes[i]
   }
         return answer;
}
