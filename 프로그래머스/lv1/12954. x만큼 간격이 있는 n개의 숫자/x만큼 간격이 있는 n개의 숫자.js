// x ,n x부터 시작 x 씩 증가하는 숫자 n개를 리스트 리턴
// [x, x+x, x+x+x , ] // 곱하기 1x 2x 3x ... nx

function solution(x, n) {
    var answer = [];
    for (let i = 1; i <=n ; i++){  
         // 1,2,3,4,5
        //  
        //  answer[0(i-1)] = 2 * 1   2 4
        //  answer[1] = 2 * 2   2 4
        //  answer[2] = 2 * 3   2 4
        //  answer[3] = 2 * 4   2 4
        //  answer[4] = 2 * 5   2 4
        
        answer[i-1] = x*[i]
        //  
    }
    return answer;
}