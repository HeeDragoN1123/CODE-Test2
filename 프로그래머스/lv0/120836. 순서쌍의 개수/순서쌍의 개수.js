// 문제해결
// answer 에 정답이 될 배열을 담을 빈 배열을 생성
// for 문으로 1 부터 n까지 반복
// if 로 n과 i 의 나머지가 0 인 항목을 정답에 출력
// return 정답에 출력된 배열의 숫자 입력 

function solution(n) {
    var answer = [];
    for ( i = 0;  i <= n; i ++){
        if (n%i ===0){
            answer.push(i)
        }
    }
    return answer.length;
}

// 다른답
// 소인수분해로 문제 해결한 것 
// 아무래도 소인수분해를 이용하신 것 같다.(소인수분해 문제 풀었을 때 코드라고 생각되기 때문)
// for문에서 제곱근 처리를 했기 때문에 하나의 약수가 발견될 때마다 +2를 해주신 것 같다.
// 제곱근이 정수로 딱 떨어지면 +1을, 아니라면 그대로 ans를 리턴한다.
// 위에서 필자가 사용했던 예시를 그대로 적용하면 문제없이 돌아가는 것을 확인할 수 있다.
// 위에 작성된 답보다 속도가 빠름

// unction solution(n) {
//     let ans = 0;
//     for (let i = 1; i < Math.sqrt(n); i++)
//         if (n%i === 0) ans+=2;

//     return Number.isInteger(Math.sqrt(n)) ? ans+1 : ans;
// }

