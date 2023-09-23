function solution(numbers) {;
    var answer = [];
    let arr = [];
    //console.log(numbers)

    for(let i =0; i<numbers.length; i++){
        for(let j = i+1; j<numbers.length; j++){
            let a = numbers[i]
            let b = numbers[j]
            arr.push(a+b)
        }
    }

    answer = [...new Set(arr)];
    return answer.sort((a,b) => (a-b));
}
