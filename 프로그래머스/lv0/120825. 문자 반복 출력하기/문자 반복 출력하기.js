//문제해결
// for 문으로 i가 my_string 값의 글자수를 반복하게함 0 ,1 ,2 ,3 ,4
// repeat 함수를 사용하여 글자 각각의 인덱스를 n번 만큼 반복시킴

function solution(my_string, n) {
    var answer = '';
    for (let i= 0 ; i < my_string.length ; i++){
         answer += my_string[i].repeat(n);
    }
    return answer;
}

// 화살표 함수로 푼 다른 답

// const solution = (my_string, n) => {
//     return [...my_string].map(a => a.repeat(n)).join('');
// }


// function solution(my_string, n) {
//     return [...my_string].map(a => a.repeat(n)).join('');
// }



