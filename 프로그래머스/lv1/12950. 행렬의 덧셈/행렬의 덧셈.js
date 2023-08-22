// 행렬의 덧셈 

function solution(arr1, arr2) {
    var answer = [];
    
    for(let i = 0; i<arr1.length; i++){
        let sum = [];
        // console.log(arr1[i])
        for(let z= 0 ; z<arr1[i].length; z++){

            // console.log(arr1[i][z])
            // console.log(arr2[i][z])
            sum.push(arr1[i][z] + (arr2[i][z])) 
          
        }
        answer.push(sum)
        
    }
    return answer;
}

console.log(solution([[1,2],[2,3]], [[3,4],[5,6]]))