// 문제풀이 
// if 문을 사용하여 num 이 2로 나눈 나머지가 0 이면 짝수 아니면 홀수로 코딩
// 트러블 슈팅
// function solution(num) {
//     var answer = '';
//     if(num%2 === 0){
//       answer = console.log('Even')
//     }else {
//       answer = console.log('Odd')
//     }
//     return answer;
// }
// solution(4);
// 이런식으로 함수안에 값을 console.log 로 return 값을 표시하니  undefind가 생김
// 
function solution(num) {
    var answer = '';
    if(num%2 === 0){
        return answer = "Even"
    }else{
        return answer = "Odd"
    }
    return answer;
}


//삼항 연산자 풀이법
// function solution(num) {
//     return (num%2 === 0 ? 'Even' : 'Odd')
// }