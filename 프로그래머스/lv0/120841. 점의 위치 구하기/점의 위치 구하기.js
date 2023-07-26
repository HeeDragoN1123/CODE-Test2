// 문제 해설 ( 오류 너무 지연시간이 오래걸림)
// 만약 dot[0]이 양수 '이고' dot[1]이 양수라면 1
//만약 dot[0]이 음수 '이고' dot[1]이 양수라면 2
//만약 dot[0]이 양수 '이고' dot[1]이 음수라면 3
//아니라면 4를 표시해주세요 


function solution(dot) {
    if(0 < dot[0] && 0 < dot[1]){
        return 1;
    }else if(0 > dot[0] && 0 < dot[1] ){
        return 2;
    }else if(0 > dot[0] && 0 > dot[1] ){
        return 3;
    }else {
        return 4;
    }
}