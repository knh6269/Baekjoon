const divide = (string, many) => {
    const newString = string.slice(0).split("");
    const array = [];
    
    while (newString.length) {
        const dividedString = newString.splice(0, many).join("");
        array.push(dividedString);
    }
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] === array[i + 1]) {
            let count = 1;
            for (let j = i; j < array.length; j++) {
                if (array[j] !== array[j + 1]) break;
                count++;
            }
            array.splice(i, count, `${count}${array[i]}`);
        }
    }
    return array.join("").length;
}

function solution(string) {
    let min = Infinity;
    
    //몇개씩 자를지 정하기 
    for (let i = 1; i <= string.length; i++) {
        min = Math.min(divide(string, i), min);
    }
    
    return min;
}