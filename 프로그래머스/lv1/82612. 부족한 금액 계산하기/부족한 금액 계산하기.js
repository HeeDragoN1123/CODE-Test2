// price  n번 이용하면 원래 n배 를 받음
// 100원이 기본인데? 1번 이용시 100원 2번째이용시 200원?
// 놀이기구 count번 타면 돈이 모자라는지 구해야함
// 놀이기구를 4번타고싶은 사람이 가진 금액이 20이라면 3 + 6 + 9 + 12 = 30 원
// 10원이 부족하므로 result = 10
// for문으로 i를 카운트만큼 돌린다
// 필요한 돈은    += i*price
// 정답은 += i*price 값 - money
// 3 6 9 12
function solution(price, money, count) {
    var a = 0;
    for(let i = 1; i<=count; i++){
        //console.log(i)
        //   1*3 2*3 3*3+4*3
        a += i*price
        
    }
    return (a-money)>0 ? a - money : 0 
}