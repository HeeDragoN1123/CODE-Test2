//1. 문자를 대문자 or 소문자로 통일
//2. for 문으로 s의 글자들을 반복문으로 돌림
//3. if 문으로 s[i] 글자가 일치하면 숫자를 더해줌
//4. answer 로 더해진 숫자들의 값이 참인지 거짓인지 구분

function solution(s){
    var answer = true;

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