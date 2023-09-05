//숫자 문자열과 영단어


//변수.replace(”찾을 문자열”, “변경할 문자열”);
// g는 모든패턴을 체크
// s= s.replace 의 형태로 작성해야 내용이 누적됨
// 다른변수 = s.replace 로하면 마지막 숫자만 변하므로 Nan이 뜸

function solution(s) {

    s = s.replace(/zero/g, 0);
    s = s.replace(/one/g, 1);
    s = s.replace(/two/g, 2);
    s = s.replace(/three/g, 3);
    s = s.replace(/four/g, 4);
    s = s.replace(/five/g, 5);
    s = s.replace(/six/g, 6);
    s = s.replace(/seven/g, 7);
    s = s.replace(/eight/g, 8);
    s = s.replace(/nine/g, 9);


    //console.log(s)
    return Number(s);
}

//console.log(solution('one4seveneight'))