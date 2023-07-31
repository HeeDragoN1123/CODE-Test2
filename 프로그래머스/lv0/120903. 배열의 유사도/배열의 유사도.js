// 문제해결 
// 필터 사용
//s1.filter를 사용하여 s2가 includes(포함되었는지 확인) 매서드 . length 로 숫자를 출력
function solution(s1, s2) {
    let answer = 0;
    answer = s1.filter((e) => s2.includes(e)).length;
    return answer;
}
