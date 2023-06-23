function solution(s) {
    const array = s.split("},");
    const answer = [];
    
    const sample = array.map((item, index) => {
        if (index === 0) {
            item = item.split('')
            item.shift();
            item = item.join('');
        }
        
        if (index === array.length - 1) {
            item = item.split('');
            item.pop();('');
            item.pop();
            item = item.join('');
        }
            item = item.split('')
            item.shift();
            item = item.join('');
        
        return item.split(',');
    });
    
    const intSample = sample.map((item) => item.map(Number)).sort((a, b) => a.length - b.length);
    
    for (let array of intSample) {
        for (let num of array) {
            if (!answer.includes(num)) {
                answer.push(num);
            }
        }
    }
    
    return answer;
}