let input = require('fs').readFileSync('/dev/stdin').toString().trim();
input = input.split(' ');

const solution = () => {
    input[0] = parseInt(input[0], +input[1]);
    console.log(input[0])
}

solution();
