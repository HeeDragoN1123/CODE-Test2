// 문제해결
// 
function solution(arr) {
    var answer = [];
    console.log(typeof(arr))
    if(arr.length <= 1){
        answer.push(-1)
    }else{
    // indexOf() : 배열의 앞쪽부터 특정 요소의 위치 검색
    // splice() : 요소의 지정된 부분 삭제 후 삭제한 요소 리턴
    arr.splice(arr.indexOf(Math.min(...arr)),1)
    answer = arr
    
    }
    return answer;
}

//실패 한 답
// 주어진 코드실행에서는 통과하였지만 채점에서 실패
// 아마 코드를 수행하는데 너무 시간이 오래 걸리거나
// 다른 조건을 충족하지 못했던 것 같음
// function solution(arr) {
//    let sort =  arr.sort((a,b) => b-a)
//    let last = sort.pop()
//    // last 1
//    // sort [4,3,2]
//    if(sort.length === 0) {
//        return [-1]
//    }
       
//     return sort;
// }
