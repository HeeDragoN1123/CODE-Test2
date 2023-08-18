function solution(n)
{
    var answer = 0;
    var str1 =  String(n);
    // console.log(str1)
    // console.log(typeof(str1))
    var mapfn = (arr) => Number(arr);
    
    var Newn = Array.from(str1,mapfn);
    // console.log(Newn)
    // console.log(typeof(Newn[0]))
    
    for(i = 0; i <Newn.length ; i ++){
        answer += Newn[i]
    }

    return answer;
}