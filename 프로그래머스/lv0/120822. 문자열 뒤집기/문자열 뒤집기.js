// 문제 해결
// for 문 사용 (변수 i 는 my_string의 문자개수 -1) 부터 시작 ; i는 0까지 실행된다 ; i는 반복될때마다 줄어든다
// answer('') +=(반복된 값을 더한다) my_string[i]('4' '3' '2' '1' '0') 순으로 입력 

function solution(my_string) {
    var answer = '';
    for (var i = my_string.length - 1  ; i>= 0 ; i-- ) {
        answer += my_string[i]
    }
    
    return answer;
}