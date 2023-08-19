// 문제해결
// while문 과 if 문의 중첩으로 해결
// num이 1이 아닐때 
// if 문으로 cnt( 횟수 변수)가 500보다 적을때 
// 짝수 와 홀수의 계산을 하고 cnt++로 횟수를 늘려준다
// cnt 가 500 일때 -1을 출력하고 break를 건다

function solution(num) {
    var cnt = 0;
    while(num !== 1){
        if(cnt<500){
            if(num%2 ===0){
                num = num/2
            }else{
                num = num*3 +1
            }
            cnt++
        }else if(cnt === 500){
           cnt = -1
            break 
        }
        
    }
    return cnt;
}

