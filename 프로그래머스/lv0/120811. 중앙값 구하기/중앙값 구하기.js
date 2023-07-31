// 문제해결
// 배열 index 생각하면서 풀것!!
// answer = Math.floor(array.length / 2); 로 오름차순한 배열의 중간값을 나타냄
// array.sort((a,b) => a - b); 로 array 의 배열을 오름차순으로 나타냄
// 오름차순으로 배열한 newArr 에서 [ ] 안에 answer 를 넣어서 필요한 인덱스 2를 추출
// [1,2,3] 일경우 필요한 숫자는 2이고 인덱스는 1임  배열 3 을 2로 나누면 1.5이고 floor 로 0.5를 없애줌

function solution(array) {
    let answer = Math.floor(array.length / 2);
    
    let newArr = array.sort((a,b) => a - b);
    
    return  newArr[answer];
}



// 다른 사람의 풀이 1
// function solution(array) {
//   return array.sort((a, b) => a - b)[Math.floor(array.length / 2)];
// }