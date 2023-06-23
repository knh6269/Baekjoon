function solution(elements) {
    const element = [...elements, ...elements];
    const length = elements.length;
    const array = [];
    
    for (let i = 1; i <= length; i++) {
        for (let j = 0; j < element.length; j++) {
            let sum = element.slice(j, j + i).reduce((cur, acc) => cur + acc);
            array.push(sum);
        }
    }
    
    const answer = [... new Set(array)];
    
    return answer.length;
}