// function solution(strlist) {
//     var answer = [];
//   answer =  strlist.map(a => a.length)
//     return answer;
// }






// 이게 틀린이유??
function solution(strlist) {
    var answer = [];
    answer = strlist.map((a) => (a.length))
    return answer;
}



// function solution(strlist) {
//     var answer = [];
//     for (i = 0 ;  i <strlist.length ; i ++){
//        answer.push(strlist[i].length)
//   }
//     return answer;
// }