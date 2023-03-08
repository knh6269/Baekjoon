function solution(t, p) {
    const lengths = p.length; 
    let answer = 0;
    
    for (let i = 0; i <= t.length - lengths; i++) {
        
        if (t[i] < p[0]) {
            answer += 1;        
        }
        
        else if (t[i] == p[0]) {
            if (t.substring(i, i + lengths) <= p) {
                answer += 1;
            }
        }
    }

    return answer;
}