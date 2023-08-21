// 전화번호 문자열 phone_number 에서 뒷자리 4개를 제외한 나머지를  *로 표현
//
function solution(phone_number) {
    var answer = '';
   let arr = phone_number.split('');
    //console.log(arr)
    for(let i=0; i < phone_number.length; i++){
        //console.log(arr[i])
        // 01033334444   i[0,1,2,3,4,5,6,/7,8,9,10] >  11개 -4 
        if (i >= phone_number.length-4){
            answer +=arr[i]

        }else{
            answer += '*'
        }
    }
    return answer;

}