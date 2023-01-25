let input = require('fs').readFileSync('/dev/stdin').toString().trim();

const solution = () => {
    let stack = [0, 1, 2];

    for (let i = 3; i <= input; i++) {
        stack.push((stack[i - 2] + stack[i - 1]) % 10007);
    }

    console.log(stack[input]);
}

solution();