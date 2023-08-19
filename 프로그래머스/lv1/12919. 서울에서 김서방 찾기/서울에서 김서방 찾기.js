// 서울배열의  엘리먼트 중 kim의 위치 x를 찾아 김서방은 x에 있다는 String을 반환하는 함수,
// index 0 1 이 어서 김서방은 1?
// includes()?
// 'kim' index 값을 찾는거 
// 서울에 특정 인덱스에 kim이 없을떄 반복
// 인덱스 값은 처음에 0으로 지정해서 하나씩 늘어나도록
// 인덱스 값을 지정하는 변수 0;
function solution(seoul) {
    let x = 0;
    while(seoul[x] !== 'Kim'){
        x++
    }
    return '김서방은 ' + x + '에 있다';
}