const checkPrime = (num) => {
    if (num === 0 || num === 1) return false;
    
    let flag = 1;
    
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            flag = 0;
        }    
    }
    if (flag) return true;
    return false;
}

function solution(n, k) {
    const sample = n.toString(k).split('0').map((Number));
    let count = 0;
    
    sample.forEach((item) => {
        if (checkPrime(item)) { 
            count++;
        }
    });
    
    return count;
}