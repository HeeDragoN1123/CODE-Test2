//문제 해설
// str 에 my_string 의 문자를 split('') 로 배열을 하나씩 쪼갬 ['a','A','b','1','B','2',''c'','C','3','4','o','O','p']
// for문으로 쪼갠 배열을 탐색해서
// if 로 str이 숫자일경우 answer 에 더해줌

function solution(my_string) {
    let str = my_string.split('')
    let answer = 0;
    for ( i =0 ; i <= str.length ; i ++){
        if (Number(str[i])){
          answer += Number(str[i])
        }
    }
    return answer;
}
