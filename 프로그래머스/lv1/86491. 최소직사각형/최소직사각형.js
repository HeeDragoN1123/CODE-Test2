// 최소 직사각형
// 1 번  [60 50]   
// 2 번  [30 70]
// 3 번  [60 30]
// 4 번  [80 40]


//배열안의 숫자를 비교해서 서로 큰값을 가로로 옮김
//    그럼 가로는 60 70 60 80 이됨 이중에 가장 큰 값인 80
// 세로는 작은값  50 30 30 40 이됨 이중에 가장 큰값인 50

function solution(sizes) {
     //console.log(sizes)
    let width = [];
    let height = [];

    for(let i=0; i<sizes.length; i++){
        // 각각의 직사각형 가로세로를 비교해서 큰값과 작은값의 배열을 정렬한다. (큰 값이 앞에 오게)
        let maxwidth = Math.max(sizes[i][0], sizes[i][1]);
        let maxheight = Math.min(sizes[i][0], sizes[i][1]);
        width.push(maxwidth);
        height.push(maxheight);
    }
    //console.log(width);
   // console.log(height);
    
    return Math.max(...width) * Math.max(...height);
}



console.log(solution([[60,50],[30,70],[60,30],[80,40]]))