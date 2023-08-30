function solution(t, p) {
    var answer = 0;         
    for(let i = 0; i< t.length - p.length +1 ; i++){
        // 배열을 자른다   0부터 3까지 ~ 4부터 6까지
        let num = t.slice(i , i + p.length)
        //console.log(num)
        if(p >= num){
            answer ++  
        }
    }
    return answer;
}


//console.log(solution('3141592','271'))
