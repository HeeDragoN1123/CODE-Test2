function solution(n, k) {
    var answer = 0;
    // let food ={
    //     yang : 12000;
    //     drink : 2000;
    // }
    
    
    // let yang = 12000;
    // let drink = 2000;
    
    let service = Math.trunc(n/10)
    
    answer = n*12000 + (k- service)*2000
    
    return answer;
}