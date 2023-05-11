let [N,first,M,second] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map((item) => item.split(" ").map(Number))

const array = [];

first.sort((a, b) => a- b);

for (let i = 0; i < second.length; i++) {
    let start = 0;
    let end = first.length - 1;
    let flag = 0;

    while (start <= end) {
        const mid = Math.floor((start + end) / 2);

        if (first[mid] < second[i]) {
            start = mid + 1;
        }
        else if (first[mid] > second[i]) {
            end = mid - 1;
        } 
        else {
            flag = 1;
            break;
        } 
    }

    if (flag === 1) {
        array.push(1)
        continue;    
    } 
    
    array.push(0)
}

console.log(array.join('\n'))