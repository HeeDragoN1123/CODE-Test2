//문제 해설
// 삼항연산자로 해결
// 피자를 7로 나눴을떄 나오는 나머지가 0이라면
// n을 7로 나눈값의 정수를 구해주세요 
// 아니라면 n을 7로 나눈값의 정수에 1을 더해주세요 


function solution(n) {
    let pizza = n%7 === 0 ? Math.floor(n/7) : Math.floor(n/7) +1
    return pizza;
}