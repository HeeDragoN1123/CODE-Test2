//문제 해설
// 변수 str 로 모음 'aeiou'를 지정
// my_string.split('') 으로 배열로 나눔 //  콘솔  ['b', 'u','s']
// filter 메소드를 사용
// out 은 (부정연산자 ! 를 사용) str 배열에 넣지마세요 // 콘솔 ['b','s'] 
// joun('') 으로 ''를 합침 // 콘솔 'bs'

function solution(my_string) {
    
    const str = 'aeiou'
    let newString = my_string.split('').filter((out)=>(!str.includes(out))).join('')
    
    return newString
    
}




//다른 답


