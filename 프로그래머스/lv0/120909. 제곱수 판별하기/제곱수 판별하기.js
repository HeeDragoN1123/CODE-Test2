//문제 풀이
// Math.sqrt(n) 의 활용 n이 어떤 수로 제곱이 되어있는지를 반환해줌
// 삼항 연산자를 활용하여 n이 제곱된 숫자와 1을 나눈 몫이 0이 된다 >> 제곱수 
// 0이 되지 않는다 >> 소수점이 남아서 0이 되지 않으므로 제곱수가 아님


function solution(n) {
    answer = Math.sqrt(n)%1 === 0 ? 1 : 2;  
    return answer;
}