// 문제풀이
// for 문과 if 로 해결
// for 문  :  i = 0부터 시작 i < array.length (배열이 몇개인지 숫자로 나타내기위해 사용) i 는 array.length 값 까지 적용된다  ; i++ 
// if 문 array[i] 가 === n   : array[i] 가 n 과 같다면 {정답에 +=1을 반복적으로 추가해주세요}

function solution(array, n) {
    var answer = 0;
    for (i = 0; i <array.length ; i++){
        if (array[i] === n) {
           answer += 1 
        }
    }
    return answer;
}