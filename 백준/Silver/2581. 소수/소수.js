let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [a, b] = input.map(Number);
const answer = [];

const check = (num) => {
    let flag = 1;

    if (num === 1) {
        return ;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            flag = 0;
            break;
        }
    }

    if (flag) {
        answer.push(num);
    }
}

for (let i = a; i <= b; i++) {
    check(i);
}

if (!answer.length) {
    console.log(-1);
    return ;
}
const min = Math.min(...answer);
const sum = answer.reduce((sum, cur) => sum + cur);

console.log(sum);
console.log(min);
