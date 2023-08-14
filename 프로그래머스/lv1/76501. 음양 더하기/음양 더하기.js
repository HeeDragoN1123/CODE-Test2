
// function solution(absolutes, signs) {
//     let answer = 0;
// 		// 두 배열 길이 같음
//     for (let i = 0; i < absolutes.length; i++) {
// 				// 부호에 따라 +-
//         signs[i] === true ? answer += absolutes[i] : answer -= absolutes[i]
//     }
//     return answer;
// }




function solution(absolutes, signs) {
    let answer = 0;
    for( i = 0; i < absolutes.length ; i++){
    signs[i] === true ? answer +=absolutes[i] : answer -=absolutes[i]
   }
         return answer;
}
