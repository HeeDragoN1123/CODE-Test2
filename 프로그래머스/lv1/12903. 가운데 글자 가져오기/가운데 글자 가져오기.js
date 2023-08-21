// 단어 s의 가운데 글자를 반환하는 함수 
// 글자 5개 // 3번째 글자
// 글자 4개 // 2번째 3번쨰 글자
// 

function solution(s) {
    var answer = '';
    // console.log(s.length)
    // console.log(Math.ceil(s.length /2))
    if(s.length%2 ===1){
        answer = s[Math.floor(s.length /2)]
    }else{
        answer = (s[Math.floor(s.length /2)-1]) + (s[Math.floor(s.length /2)])
    }
    
    return answer;
}