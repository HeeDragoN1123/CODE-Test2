// 문제해결
// for 문으로 배열을 전부 더해준다음 answer 에 넣고
// 리턴으로 answer를 받아서  배열의 개수 만큼 나눠줌
// 트러블 슈팅
// 1.처음에 문제를 잘못 이해해서 Math.max + Math.min을 나누었음 
// 코드 실행시는 정상적으로 출력되었지만 숫자가 단계적으로 1씩 상승하거나 같은 숫자가 아니어서 채점에서는 오답이 뜸
// 뭔가 잘못되었다고 생각해서 위의 방법으로 수정
// 2. vscode 로 실행을 해보고 싶었는데 문제 마지막에 solution([1,2,3,4]); 를 하니까 출력이 안되는 문제... 
// 왜안되나 한참 고민했는데 알고보니 앞에 console.log(solution([1,2,3,4])) 이런식으로 콘솔로그 안에 넣으면 되는거엿음 ......

function solution(arr) {
    var answer = 0;
    for ( i = 0; i <arr.length ; i ++){
        answer += arr[i]
    }
    return answer / arr.length;
}
