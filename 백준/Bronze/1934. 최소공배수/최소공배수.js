let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.splice(0, 1)
let answer = [];

const min = (num) => {
    for (let i = 1; i <= num[0]; i++) {
        if ((num[1] * i) % num[0] === 0) {
            answer.push(num[1] * i);
            break;
        }
    }
}

const solution = () => {
    for (let i = 0; i < input.length; i++) {
        const sample = input[i].split(' ').map((item) => Number(item));
        
        min(sample);
    }
    console.log(answer.join("\n"));
}

solution();

