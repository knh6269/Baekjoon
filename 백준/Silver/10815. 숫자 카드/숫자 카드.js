let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const sangeun = input[1].split(' ').map(Number).sort((a, b) => a- b);
const target = input[3].split(' ').map(Number)
let answer = [];

for (let i = 0; i < target.length; i++) {
    let start = 0;
    let end = sangeun.length - 1;
    let flag = 1;

    while (start <= end) {
        const mid = Math.floor((start + end) / 2);

        if (sangeun[mid] > target[i]) {
            end = mid - 1;
        }
        if (sangeun[mid] < target[i]) {
            start = mid + 1;
        }
        if (sangeun[mid] === target[i]) {
            answer.push(1);
            flag = 0;
            break;
        }
    }
    
    if (flag) {
        answer.push(0);
    }
}

console.log(answer.join(' '));