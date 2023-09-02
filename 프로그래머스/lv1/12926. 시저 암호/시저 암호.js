// 시저암호 
// 아스키 코드로 푼 문제


function solution(s, n) {
    let word = s
    let newWord =[]
    let ask = 0
    
    let pushN = n
    for (let i = 0 ; i < s.length ; i ++){
    let tep_str = s[i]
    console.log(tep_str)
    ask = tep_str.charCodeAt(0)
    console.log(ask)
    ask = ask + pushN
    if (tep_str ==' '){
    newWord[i]= ' ';
    continue;
    }
    if(ask >= 65 && ask <= 90 + pushN){
    if (ask > 90) ask -=26;
    } else if(ask >= 97 && ask <= 122+ pushN){
    if(ask > 122) ask -= 26
    }
    newWord[i] = String.fromCharCode(ask);
    }
    return newWord.join('')
    }