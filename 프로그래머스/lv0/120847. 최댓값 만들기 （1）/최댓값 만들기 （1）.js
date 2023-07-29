// 문제 풀이 sort 함수 사용 
// sort 함수 : numbers.sort( a , b) => b-a  // 배열을 내림차순한다.
// sort 함수  numbers.sort() 안에 아무것도 안적으면[ 1 , 10 , 2 , 3 ] 이런식으로 배열이 됨

function solution(numbers) {
    numbers.sort((a,b) => b-a)

    return numbers[0] * numbers[1];
}



//뭔가 쓰는 방법이 틀린듯? 

// function solution(numbers) {
//     var answer = 0;
//     answer = numbers.sort((a,b) => b-a){
//         numbers[0] * numbers[1]
//     }
//     return answer;
// }