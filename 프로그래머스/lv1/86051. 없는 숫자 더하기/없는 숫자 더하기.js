// 없는 숫자 더하기
// [1,2,3,4,6,7,8,0] 5 9 가 없음 이걸 더해줌   31? 45
//
function solution(numbers) {
    var answer = 0;
    for( let i =0; i <numbers.length; i++){
        answer +=  numbers[i]
    }
    return 45-answer;
}


