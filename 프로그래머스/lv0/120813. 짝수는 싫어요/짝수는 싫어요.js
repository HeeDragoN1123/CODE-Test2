function solution(n) {
    let answer = [];
    for(i =0 ; i <= n ; i ++){
        if(i%2 === 1){
            answer.push(i)
        }
    }
    return answer;
}