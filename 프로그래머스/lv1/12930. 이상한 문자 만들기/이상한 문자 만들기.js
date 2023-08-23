// 짝수번째 알파벳 대문자
// 홀수번째 소문자
// toUpperCase() 대문자 변환
// toLowerCase() 소문자 변환

function solution(s) {
    var answer = '';
    let arr = s.split(' '); // arr ['try' , 'hello' , 'world']
    //console.log(arr.length) // 3
    //console.log(arr[0][0])
    // for(let i = 0;)

    for (let i = 0; i < arr.length; i++) {
        // i = 0 1 2 
        // console.log(i)
        for (let z = 0; z < arr[i].length; z++) {
            // z arr[0] 012 arr[1] 01234 arr[2] 01234
            // console.log(z)
            if (z % 2 === 0) {
                answer += arr[i][z].toUpperCase();
            } else {
                answer += arr[i][z].toLowerCase();
            }

        }
        //  012 <  3-1   i가  0 1  일때 answer 띄워쓰기를 추가 해주세요        
        if (i < arr.length - 1) {
            answer += ' ';
        }
    }
    return answer;
}
    console.log(solution('try hello world'))