// 문제 해설
// 주의사항 if 문을 작상할때 위에서부터 조건을 만족하면 return 값이 적용 되어버리기 때문에 10만 > 50 만 순서로 코드를 작성하지말고  50만 > 10만 순서로 작성할 것!
// 만약 가격이 50만원 이상이라면 정수(가격*0.8) ..... 그렇지 않으면 .. 10만 까지 쭉 내려가고 마지막에 10만원 이하는 가격을 그대로 리턴


function solution(price) {
    if (500000 <= price ){
        return Math.floor(price * 0.8);
    }else if(300000 <= price ){
        return  Math.floor(price * 0.9);
    }else if(100000 <= price){
        return Math.floor(price * 0.95);
    }else{
        return price
    }
    
}



// function solution(price) {
//     if (100000 <= price ){
//         return Math.floor(price * 0.95);
//     }else if(300000 <= price ){
//         return  Math.floor(price * 0.9);
//     }else if(500000 <= price){
//         return Math.floor(price * 0.8);
//     }else{
//         return price
//     }
    
// }