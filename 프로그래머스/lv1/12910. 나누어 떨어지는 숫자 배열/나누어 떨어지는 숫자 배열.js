// 배열의 각각을 / / divisor 로 나누었을때 떨어지는 숫자를 오름차순으로 정렬한다.
//.sort((a,b) a-b) 를 쓰면 오름 차순 으로 정렬
// for 문 반복 
// 나누어 떨어지지 않으면 -1
// 
function solution(arr, divisor) {
    var answer = [];
    let y = 0;
    for(let i = 0; i<arr.length ; i++){
        if(arr[i]%divisor === 0){
            answer[y] = arr[i] 
            y++
        }
    }
    return y>0 ? answer.sort((a,b) => a-b) : [-1];
}