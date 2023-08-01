// Math.floor 함수 사용

function solution(hp) {
    let jg = Math.floor(hp/5) //  23/5   4
    let bg = Math.floor((hp - jg * 5) / 3) // 23 - 20 3/3  1
    let ig = Math.floor((hp - (jg * 5) - (bg * 3))) // 23 - 20(4*5) - 3(1*3)
    
    return jg + bg + ig;
}