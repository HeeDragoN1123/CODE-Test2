function solution(n, m) {
    let gcd = 1;
    // 최대공약수
    for ( i= 2 ; i<=Math.min(n,m); i++){

        if(n%i === 0 && m%i === 0 ){
            gcd = i;
        }
    }

    // 최소공배수
    // 두수의 곱 = 최대공약수 * 최소공배수
    // 최소공배수 = 두수의곱/최대공약수
    let lcm = n*m/gcd;
    
    // console.log(gcd)
    // console.log(n*m/gcd)

    return [gcd ,lcm];

}