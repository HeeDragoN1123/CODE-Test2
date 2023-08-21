function solution(arr) {
    var answer = [];
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