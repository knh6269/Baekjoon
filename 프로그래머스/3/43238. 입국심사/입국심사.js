function solution(n, times) {
    times.sort();
    let time = 0;
    
    let start = 0;
    let end = Math.max(...times) * n;
    
    while (start < end) {
        const mid = Math.floor((start + end) / 2);
    
        let count = 0;
    
        for (let time of times) {
            count += Math.floor(mid / time);
            if (count > n) {
                break;
            }
        }
          
        if (count > n) {
            end = mid;
        }
        else if (count < n) {
            start = mid + 1;
        } else {
            end--;
        }
    }
    
    return start;
}