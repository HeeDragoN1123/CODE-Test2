// 문제해결
// let answer  = [0,0]; 배열을 두개로 고정
// Math.floor 으로 answer[0] 값을 정수로 고정 (안하면 answer[1]값이 이상해짐)


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