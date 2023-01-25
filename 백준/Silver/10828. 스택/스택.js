let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

input.splice(0, 1);

const solution = () => {
    const stack = [];
    const answer = [];

    for (let i = 0; i < input.length; i++) {
        const sample = input[i].split(' ');

        if (sample[0] === 'push') {
            stack.push(sample[1]);
        }

        else if (sample[0] === 'top') {
            if (stack.length) {
            answer.push(stack[stack.length - 1]);
            } else {
                answer.push(-1);
            }
        }

        else if (sample[0] === 'size') {
            answer.push(stack.length);
        }

        else if (sample[0] === 'pop') {
            if (stack.length) {
                answer.push(stack.pop());
            } else {
                answer.push(-1);
            }
        }

        else if (sample[0] === 'empty') {
            if (stack.length) {
                answer.push(0);
            } else {
                answer.push(1);
            }
        }
    }
    console.log(answer.join('\n'));
}

solution();