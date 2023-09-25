function solution(s) {
  var answer = [];
  var arr = [];
  for (let i = 0; i < s.length; i++) {
    //console.log(s[i]);
   // let index = s.lastIndexOf(s[i]); // b: 0 a:1 n:2 a:1 n:2 a:1 indexOf
    //console.log(index);
    if (!arr.includes(s[i])) {
      arr.push(s[i]);
      answer.push(-1);
    } else {
      answer.push(arr.length - arr.lastIndexOf(s[i]));
      arr.push(s[i]);
    }

  }
  //console.log(arr);
  //console.log(answer);
  return answer;
}
