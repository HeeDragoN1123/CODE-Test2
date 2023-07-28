// includes 매서드와 삼항연산자로 풀이
// str1.includes(str2)  :  str1 안에 str2 가 포함되어있는지 찾고 true flase 로 표시해줌 
// 삼항연산자로 str1 안에 str2 가 있다면? 1 :  없다면2 ; 

function solution(str1, str2) {
    let answer = str1.includes(str2) ? 1 : 2;
    return answer;
}


