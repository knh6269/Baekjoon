let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.splice(0, 1);

const solution = () => {
    input.sort((a, b) => a - b);
    input = input.join("\n");
    console.log(input);
}

solution();