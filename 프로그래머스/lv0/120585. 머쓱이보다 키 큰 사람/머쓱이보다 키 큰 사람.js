//문제해결
// for문 if문 사용 
// 먼저 머쓱이 보다 키가 큰 친구들을 담을 배열을 만듬  var answer = [];
// for문(반복문)을 사용하여 array 배열 전부를 탐색 
// if 문을 사용하여 머쓱이 보다 키가 큰 배열을 골라냄
// answer.push로 빈 배열에 머쓱이보다 키가 큰 친구들을 배열에 담음
// return answer.length; 로 머쓱이보다 키가 큰 친구들의 숫자를 출력


function solution(array, height) {
    var answer = [];
    for ( i = 0; i < array.length ; i ++){
        if(array[i] > height){
            answer.push(i)
        }
    }
    return answer.length;
}


//틀린답 

//a.push(b).sort((c,d) => d-c)
// 이런식으로 push 배열에 height를 넣고 난후에 내림차순 배열을 하고 싶었지만 되지 않았다..
