function solution(n, k) {
    var answer = 0;
    // let food ={
    //     yang : 12000;
    //     drink : 2000;
    // }
    
    
    // let yang = 12000;
    // let drink = 2000;
    
    // 문제 풀이
    // let service = Math.trunc(n/10) : 서비스 = 소수점을 없애고 출력 (개수/10);
    // answer = n*12000 + (k- service)*2000 
    // 개수(n) * 12000(양꼬치 가격) + (개수(k) - 서비스)*2000(음료가격)
    
    
    let service = Math.trunc(n/10)
    
    answer = n*12000 + (k- service)*2000
    
    return answer;
}
