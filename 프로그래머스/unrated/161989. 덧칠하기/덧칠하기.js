function solution(n, m, section) { 
    let result = 0;
    let sample = section[0];
    
    for (let i = 0; i < section.length; i++) {
        if (section[i] < sample) {
            continue;
        }
        result++;
        sample = section[i] + m;
    }  
    return result;
}