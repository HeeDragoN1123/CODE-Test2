function solution(s){
    var answer = true;

    //1. 문자를 대문자 or 소문자로 통일
    s= s.toUpperCase()
    let nump = 0;
    let numy = 0; 
    for (i =0 ; i <s.length; i++){
        if(s[i] === 'P'){
            nump++
        }
        if(s[i] === 'Y'){
            numy++
        }
    }

    answer = (nump === numy)

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log(s)

    
    return answer;
}

var str1 = 'pPoooyY'
var str2 = 'Pyy'
solution(str1);














// function solution(s){
//     let answer = true;
//     let p = 'p'; 
//     let y = 'y';
//     let count = 0;
//     for(let i=0; i <s.length ; i++){
//     if(s[i] === p){
        
//      }
        
//     // if(s[i] === 'y'){y++}
    
//     console.log(count)
        
//     // console.log(s[i] ==='Y') 
        
//     }
        


//     // return result;
//}