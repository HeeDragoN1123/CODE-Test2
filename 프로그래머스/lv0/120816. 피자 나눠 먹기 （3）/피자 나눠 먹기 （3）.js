// 해설
// 피자먹는 사람의수를 피자조각으로 나눈 나머지가 0이면
// 피자먹는 사람수를 피자조각으로 나눈 정수값을 표시해주세요
// 아니면 피자먹는 사람수를 피자조각으로 나눈 정수값에 1을 더해주세요

function solution(slice, n) {
    var answer = 1;
        answer = n % slice === 0 ? Math.floor(n/slice) : Math.floor(n/slice)+ 1; 
    return answer;
}



//다른 답

// function solution(slice, n) {
//     var answer = 0;
//     answer = Math.floor( (n - 1) / slice) + 1;
//     return answer;
// }