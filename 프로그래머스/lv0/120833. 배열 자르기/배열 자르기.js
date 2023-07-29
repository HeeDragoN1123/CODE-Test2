function solution(numbers, num1, num2) {
    var answer = [];
   answer = numbers.slice(num1 , num2+1)
    return answer;
}




// function solution(numbers, num1, num2) {
//    let answer = [];
//     for(i = 0; i <numbers.length ; i ++){
//          answer = numbers.slice(num1,num2)
//     }
//     return answer;
// }