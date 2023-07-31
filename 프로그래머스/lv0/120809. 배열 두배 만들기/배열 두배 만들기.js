//문제풀이
// for 문으로 numbers 배열을 탐색
// answer.push(numbers[i]*2) 로 빈 배열 answer 에 제곱된 i의 배열을 넣음

function solution(numbers) {
    var answer = [];
        for(i = 0; i <numbers.length; i ++){
        answer.push(numbers[i]*2)
    }
    return answer;
}
