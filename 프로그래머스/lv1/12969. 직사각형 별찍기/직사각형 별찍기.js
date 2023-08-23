// 문제해결
// data 의 값을 받고 그것을 배열로 나누는 변수가 n
// n = [5,3]
// a = 5 b = 3
// 정답을 담을 answer 변수
// 문자열.repeat(a) -> 문자열을  a번 반복함
// *****를 출력
// for 문으로 b까지 i를 반복 b가 3이므로 3번돔
// 트러블슈팅
// vscode에서 콘솔을 찍어보고 싶었는데 평소 하던 solution 으로 시작하는 함수가 아니라서 당황
// 결국 프로그래머스에서 직접 코드를 실행하면서 확인
// console.log(answer) 의 위치가 for 문 안쪽이어야 3번이 돌아감

process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    // a = 5 b=3 임
    
    let answer = '';
    for(let i = 0; i<b; i++){ 
        answer = '*'.repeat(a)  // 5
        console.log(answer);
    }
        
    // console.log(a);
    // console.log(b);
});
