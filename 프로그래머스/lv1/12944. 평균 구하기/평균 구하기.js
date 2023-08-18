function solution(arr) {
    var answer = 0;
    for ( i = 0; i <arr.length ; i ++){
        answer += arr[i]
    }
    return answer / arr.length;
}

// function solution(arr) {
//     var answer = 0;
    
//     return answer;
// }



// function solution(arr) {
    
//     return (Math.max(...arr) + Math.min(...arr))/2
// }

// 처음 완성 답
// function solution(arr) {
//   answer =   Math.max(...arr) + Math.min(...arr)
//     return answer/2;
// }
