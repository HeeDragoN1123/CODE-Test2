// 문제해결
// while 문으로 작성
// 인덱스를 만들 변수x를 지정
// while 문으로 seoul[x] 이 'Kim'이 아닐때
// x++시켜준다

// function solution(seoul) {
//     let x = 0;
//     while(seoul[x] !== 'Kim'){
//         x++
//     }
//     return '김서방은 ' + x + '에 있다';
// }

function solution(seoul) {
    for (let i = 0; i < seoul.length; i++) {
        if (seoul[i] === 'Kim') 
            return `김서방은 ${i}에 있다`
    }
}