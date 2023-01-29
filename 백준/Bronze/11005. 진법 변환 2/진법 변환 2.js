let input = require('fs').readFileSync('/dev/stdin').toString().trim()
input = input.split(' ');
input = input.map((item) => Number(item));

const solution = () => {
    input[0] =input[0].toString(input[1])
    console.log(input[0].toUpperCase())
}

solution();
