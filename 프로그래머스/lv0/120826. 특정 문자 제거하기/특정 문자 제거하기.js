//문제 해설 
// split  : 문자열을 나누어서 배열 을 만듬 ('a,b,c,d,e')
// join('') : 배열 된 , 삭제 


function solution(my_string, letter) {     
    const answer = my_string.split(letter).join('')
    return answer;
}


// 오류 난것
// replace 함수를 썻더니 첫번째 B만 삭제되고 두번째 B는 그대로있음
// 특정문자를 전부 제거하는 /'B'/ 를 쓰면 변수는 지정이 안되는듯?

// function solution(my_string, letter) {
//     var answer = '';
//     answer = my_string.replace(letter, '')
//     return answer;
// }

