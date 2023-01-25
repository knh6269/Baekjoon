let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.splice(0, 1);

const solution = () => {
    let stack = [0, 1, 2, 4];

    for (let i = 4; i <= 11; i++) {
        stack.push((stack[i - 3] + stack[i - 2] + stack[i - 1]));
    }

    for (let i = 0; i < input.length; i++) {
        console.log(stack[input[i]]);
    }
}

solution();