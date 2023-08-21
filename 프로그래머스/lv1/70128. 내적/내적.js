// 1차원 정수배열 a,b 
// a와 b가 내적을 리턴
// 내적 a[0]*b[0] + a[1]*b{1}
function solution(a, b) {
    var answer = 0;
    for(let i =0; i <a.length; i++){
       answer += a[i]*b[i]
       // 1+(-3) // 2+(-1) // 3+0 // 4+2 
    }
    return answer;
}