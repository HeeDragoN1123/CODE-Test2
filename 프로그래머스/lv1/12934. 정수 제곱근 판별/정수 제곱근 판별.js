//문제 해결
// Math.sqrt(n) Math.pow 으로 문제해결
// sqrt 제곱근 반환  pow  첫번째인수를 두번째인수로 제곱함
// if 만약 n 이 a(제곱근) 으로 나누었을때 나머지 0 이라면 
// a+1 을 2제곱해주세요
// 아니라면 -1 을 출력해주세요

function solution(n) {
    var answer = 0;
    
   var a = Math.sqrt(n)	//x의 제곱근 반환
   console.log(a)
    if (n % a === 0){
        answer = Math.pow(a+1 , 2)
    }else {
        answer = -1;
    }
    // answer = Math.pow(n,y)
    return answer;
}