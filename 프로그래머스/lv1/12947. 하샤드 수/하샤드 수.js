
function solution(x) {
    let sum = 0; 
    let str = x.toString()
    // console.log(str)
    // console.log(typeof(str))
    let spl = str.split('')
       // console.log(spl)
    // console.log(typeof(spl))
    for(let i =0;  i <spl.length; i++){
        sum  += Number(spl[i])
       
    }

    return x%sum === 0 ? true : false;
}