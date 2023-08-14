function solution(X, Y) {
    const x = X.split('');
    const y = Y.split('');
    
    const xSet = new Map(); 
    const ySet = new Map();
    
    for (let num of x) {
        if (xSet.has(num)) xSet.set(num, xSet.get(num) + 1);
        else xSet.set(num, 1);
    }
    for (let num of y) {
        if (ySet.has(num)) ySet.set(num, ySet.get(num) + 1);
        else ySet.set(num, 1);
    }
    
    const xArray = [...xSet].map((item) => item.map(Number));
    const yArray = [...ySet].map((item) => item.map(Number));
    
    let answer = "";
    
    for (let i = 0; i < xArray.length; i++) {
        for (let j = 0; j < yArray.length; j++) {
            if (xArray[i][0] === yArray[j][0]) {
                let length = xArray[i][1] > yArray[j][1] ? yArray[j][1] : xArray[i][1];
                for (let k = 0; k < length; k++) {
                    answer += xArray[i][0]
                }
            }
            
        }
    }
    if (answer === '') return "-1";
    if (Number(answer) === 0) return "0"
    const sortedAnswer = answer.split('').sort((a, b) => b > a ? 1 : -1).join('');
    return (sortedAnswer)
}