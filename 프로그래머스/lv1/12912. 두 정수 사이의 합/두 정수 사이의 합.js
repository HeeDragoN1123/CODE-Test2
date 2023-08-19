// 문제해결
// Math.max min 을 사용해서 a b 중에 큰값과 작은값을 변수에 넣음
// for 문으로 작은값 부터 큰값까지 돌려서
// answer 에 더해줌
function solution(a , b) {
    let answer = 0;
    let max = Math.max(a,b)
    let min = Math.min(a,b)

    for(let i = min; i<=max; i++){
        answer +=i;
    }
    return answer;
}
