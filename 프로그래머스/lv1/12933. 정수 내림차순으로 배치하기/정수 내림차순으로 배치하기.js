function solution(n) {
    let str = n.toString()
    console.log(str)
    
    let spl = str.split('')
    console.log(spl)
    
    let sort = spl.sort((a,b) => b-a)
    console.log(spl)
    
    let join = sort.join('')
    console.log(join)
    
    let num = Number(join)
    return num;
}