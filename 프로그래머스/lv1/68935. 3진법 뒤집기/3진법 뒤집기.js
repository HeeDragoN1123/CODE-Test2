//  n.toString(radix) : n을 () 안의 진수로 바꾼 문자열로 출력한다.
//  parseInt(string, radix) : 문자열을 뒤에있는 진수로 바꿔 숫자로 출력한다.
function solution(n) {

    let all = n.toString(3).split('').reverse().join(''); // 0021
    // console.log(all)


    return parseInt(all, 3);
}
