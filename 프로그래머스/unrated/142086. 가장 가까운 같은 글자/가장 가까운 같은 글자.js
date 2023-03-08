function solution(s) {
    const map = new Map();
    const result = [];
    
    for (let i = 0; i < s.length; i++) {
        
        if (map.get(s[i]) === undefined) {
            map.set(s[i], i);
            result.push(-1);
        }
        
        else {
            result.push(i - map.get(s[i]));
            map.set(s[i], i);
        }
    }
    
    return result;
}