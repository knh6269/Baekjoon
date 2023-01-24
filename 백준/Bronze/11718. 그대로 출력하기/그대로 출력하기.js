let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = () => {
    for (let i = 0; i < input.length; i++) {
        console.log(input[i])
    }
}

solution();