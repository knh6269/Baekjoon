function solution(s) {
    const array = s.split('');
    const answer = [];
    let index = 0;
    
    while (1) {
        const x = array[index];
        let same = 0;
        let diff = 0;
        let sample = "";
        
        for (let i = index; i < array.length; i++) {
            if (array[i] === x) {
                same++;
            } else {
                diff++; 
            }
            sample += array[i];
            if (diff === same) {
                answer.push(sample);
                index = i + 1;
                break;
            }
            if (i === array.length - 1) { 
                return (answer.length + 1);
            }
        }    
        if (index >= array.length) break;
    } 
    return (answer.length)
}