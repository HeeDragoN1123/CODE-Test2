function solution(my_string){
   return my_string.split('').map(Number).filter(a => !isNaN(a)).sort((a,b) => a-b)
}


// function solution(my_string) {
//     var answer = [];
//     let str = my_string.split('')
//     for (i = 0; i <=str.length; i++){
//         if(Number(str[i])){
//             answer.push(str[i])
//         }
//     }
    
//     return answer.map(Number).sort((a,b) => a-b);
// }
