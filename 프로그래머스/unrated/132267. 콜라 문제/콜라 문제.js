function solution(a, b, n) {
    let myCock = 0;
    
    while (n >= a) {
        const newCock = b * Math.floor(n / a);
        myCock += newCock;
        n = n % a + newCock;
    }
    return myCock;
}