function solution(name, yearning, photo) {
    const map = new Map();
    const answer = [];
    
    for (let i = 0; i < name.length; i++) {
        map.set(name[i], yearning[i]);    
    }
    photo.forEach((item) => {
        let sum = 0;
        
        for (let str of item) {
            if (map.has(str)) {
               sum += map.get(str);    
            }
        }    
        
        answer.push(sum);
    });
    
    return answer;
}