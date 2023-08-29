// 3명의 정수 번호를 가지고있음
// 학생이 5명 정수번호 -2 3 0 2 -5
// 배열중 세개를 더했을때 0이 나오는 개수 를 구해라?
// for 문 으로 number 의 배열을 나타냄
// 그 배열들을 3개 더해서 0이 되는 값을 구하라
//number[i] + number[i] + number[i] ===0 이면 정답에 +=?
// 이러면 그냥 배열이 1 1 1 / 2 2 2 /3 3 3 이런식으로 됨

function solution(number) {
    var answer = 0;
    for(let x = 0; x<number.length ; x++){
        for(let y=x+1; y<number.length ; y++){
            for(z = y+1; z<number.length; z++){
                if(number[x] + number[y] + number[z] ===0){
                    
                    answer +=1
                }
            }
        }
        
        }
     return answer;
}

   
