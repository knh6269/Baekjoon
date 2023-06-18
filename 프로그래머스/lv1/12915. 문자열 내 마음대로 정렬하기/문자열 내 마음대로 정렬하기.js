function solution(strings, n) {
    strings.sort();
    
    strings.sort(function comperator(a, b) {
        if (a[n] > b[n]) return 1;
        else if (a[n] < b[n]) return -1;
        else return 0;
    }); 
    
    return strings
}