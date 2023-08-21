//문제해결
//약수의 개수를 구하는 함수
//for 문으로 a 를 num만큼 돌림
// num 은 아래 i에서 지정될 예정
// num 을 a로 나누어서 나머지가 0일 경우 : 약수
// sum에 약수가 나온 개수를 더해줌
function count(num){
    let sum = 0;
       for(let a = 0; a <= num; a++ ){
           if (num % a === 0)
               sum += 1;
        }
       return sum;
}
// left 와 right 의 최소값과 최대값을 구함
// for 문으로 i 를 최소값부터 최대값까지 돌림
// 삼항연산자로 count(i)가 짝수면 countSum를 더하고 홀수면 뺌

function solution(left, right) {
   let countSum = 0;
   let max = Math.max(left,right)
   let min = Math.min(left,right)
   for(let i = min; i<= max; i++ ){            
      count(i) % 2 === 0 ? countSum +=i : countSum -=i
   }
   return countSum;
}

console.log(solution(13,17))


