//문제해결

function solution(n) {
    var answer = [];
    var str1 = String(n)
    // console.log(str1)
    // console.log(typeof(str1))
    var map = (num) => Number(num)
    var arr = Array.from(str1,map)
    // console.log(arr)
    for(let i= arr.length-1; i>=0; i--){
        // console.log(arr[i])
        // arr[5-1] = index4  5 
        // arr[4-1] = index3  4
        // arr[3-1] = index2  3
        // arr[2-1] = index1  2
        // arr[1-1] = index0  1
        
        answer.push(arr[i])
    }
    return answer;
}