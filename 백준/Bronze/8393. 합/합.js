let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = () => {
    let sum = 0;

    for (let i = 1; i <= input; i++) {
        sum += i;
    }

    console.log(sum);
}

solution();