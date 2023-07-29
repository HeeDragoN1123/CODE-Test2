

function solution(num_list) {
    let jjak = 0;
    let hol = 0;
    num_list.map((a) =>{
        if(a%2 == 0){
            return jjak +=1
        }else{
            return hol +=1
        }
    })
    return [jjak,hol];
}