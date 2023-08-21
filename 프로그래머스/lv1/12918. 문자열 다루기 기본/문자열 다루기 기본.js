// return 을 써서 앞의 if 결과가 뒤에 영향을 미치지 못하도록해야함
// return 을 쓰면 함수가 종료되고 결과값이 나와짐

function solution(s) {
    
    if(s.length !==4 && s.length !==6){
        return false;
    }
    
    for(let i =0; i <s.length ; i++){
        if(isNaN(s[i])){
            return false;
        
        
        }
        
    }
    
    return true;
}

