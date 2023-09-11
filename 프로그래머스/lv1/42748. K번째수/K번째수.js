function solution(array, commands) {
    var answer = [];
    

    for(let i=0; i<commands.length; i++){  
        //console.log(commands[i][0])
       var newArr = array.slice(commands[i][0]-1 , commands[i][1]).sort((a,b) => a-b);
        //console.log(newArr)
         answer.push(newArr[commands[i][2]-1])
    }
    return answer;
}
