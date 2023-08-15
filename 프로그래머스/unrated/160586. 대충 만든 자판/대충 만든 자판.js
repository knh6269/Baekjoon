function solution(keymap, targets) {
    const result = [];
    
    for (let str of targets) {
        let sum = 0;
        let flag = 1;
        for (let token of str) {
            let index = Infinity;
            for (let key of keymap) {
                if (key.indexOf(token) === -1) continue;
                index = index > key.indexOf(token) ? key.indexOf(token) : index;
            }
            if (index === Infinity) {
                result.push(-1);
                flag = 0;
                break;
            }
            sum += index + 1;   
        } 
        if (flag) result.push(sum);
    }
    return (result)
}