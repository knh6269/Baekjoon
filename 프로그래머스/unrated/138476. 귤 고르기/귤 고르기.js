function solution(k, tangerine) {
    let count = 0;
    
    const map = new Map();
    
    for (let num of tangerine) {
        if (map.get(num)) {
            map.set(num, map.get(num) + 1);
        } else {
            map.set(num, 1);
        }
    }
    
    const sorted = [...map].sort((a, b) => b[1] - a[1]);
    
    let i = 0;
    
    while (count < k) {
        count += sorted[i][1];    
        i++;
    }
    
    return i;
}