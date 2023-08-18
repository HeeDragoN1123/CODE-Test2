//문제해설
// n을  x로 나누었을때 나머지가 1이어야하므로  for 문에서 i <n으로 코딩
// for 으로 i 로 돌려서 
// if n을 i 로 나눈 값이 1 이면 
// answer = i    / += i 를 안적는 이유는 최소값 만 구하면 되기 때문
// break 로 for 문을 멈춰서 최소값 이외의 숫자가 나오지 않게한다.

function solution(n) {
    var answer = 0;
    for(let i =1; i < n ; i ++){
        // console.log(i)
        if(n%i === 1){
            answer = i
            break
        }
    }
    return answer;
}
