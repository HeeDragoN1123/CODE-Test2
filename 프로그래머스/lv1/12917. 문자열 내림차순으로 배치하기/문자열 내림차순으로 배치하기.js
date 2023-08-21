// 문제해결
// 매서드의 활용
// split 으로 문자를 배열로 바꾸고 
// sort() 로 정렬을함 기본값이 
function solution(s) {

    return s.split('').sort().reverse().join('');
}


console.log(solution('Zbcdefg'))