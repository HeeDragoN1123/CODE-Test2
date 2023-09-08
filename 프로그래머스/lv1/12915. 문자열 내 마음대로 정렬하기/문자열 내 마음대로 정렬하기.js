
function solution(strings, n) {
    
    for ( i =0; i <strings.length ; i++){
        
        answer = strings.sort((a,b) => {
          if ( a[n] < b[n]){
            return -1;
          }else if(a[n] > b[n]){
            return 1;
          }else{
           return  a.localeCompare(b)
          }

        })

    }
    return strings;
}
