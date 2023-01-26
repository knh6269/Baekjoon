let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
const [a, b] = input.sort((a, b) => a - b);
const answer = [];

const min = () => {

    for (let i = b; i <= a * b; i++) {
        if (i % a === 0 && i % b === 0) {
            answer.push(i);
            break;
        }
    }
}

const max = () => {
    for (let i = a; i >= 1; i--) {
        if (b % i === 0 && a % i === 0) {
            answer.push(i);
            break;
        }
    }
}

const solution = () => {
    max();
    min();
    console.log(answer[0]);
    console.log(answer[1]);
}

solution();
