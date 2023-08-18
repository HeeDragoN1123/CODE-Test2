//문제풀이
// 여러가지 매서드를 사용해서 문제해결 (toString ,split,sort,join,Number )
// toString 으로 정수 n을 문자로 바꿔줌
// 바꿔준 문자를 split('') 으로 배열로 만듬
// sort의 화살표함수로 내림차순으로 변경
// join('')으로 문자열로 변경
// 마지막으로 Number로 숫자로 변경
// 트러블슈팅 
// n.String() 은 문법오류로 값이 출력되지않았다. toString으로 써야함
// split('') , join('') 소괄에 안에 ''를 써야함
// split의 경우 안쓰면 ['1','1','8','3','7','2'] 가 아니라 ['118372'] 가 출력됨
// join의 경우 '873211' 이 출력되어야 하는데 '8','7','3','2','1','1' 이 출력됨 

function solution(n) {
    let str = n.toString()
    // console.log(str)
    
    let spl = str.split('')
    // console.log(spl)
    
    let sort = spl.sort((a,b) => b-a)
    // console.log(spl)
    
    let join = sort.join('')
    // console.log(join)
    
    let num = Number(join)
    return num;
}


//다른 답(코드간소화)
// return Number(a.toString().split('').sort((a,b) => b-a).join('')) 