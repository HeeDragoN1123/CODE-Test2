// 문제해결 (안됨)
// 무슨 의미인지 모르겟음

function solution(money) {
    let answer = [0,0];
    answer[0] = Math.floor(money/5500)
    answer[1] = money - (5500* answer[0])
    return answer;
}



// 다른 답
// function solution(money) {
//     return [Math.floor(money/5500),money%5500]
// }