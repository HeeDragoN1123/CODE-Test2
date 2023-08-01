// 문제 해결
// for 문을 사용하기 위해 n 을 문자로 바꾸는 변수 지정
// for 문을 사용 문자로 바뀐 n의 배열 탐색
// parseInt를 사용하여 무자를 정수로 반환
// for 문의 결과 i 의 인덱스값 [0,1,2,3] , // answer = parseInt(str[i]) [1,2,3,4]
// 1234 += 로 안의 배열을 다 더함

function solution(n) {
    var answer = 0;
    let str = String(n)
    for (i = 0; i < str.length ; i ++){
        answer += parseInt(str[i])
    }
        
    return answer;
}