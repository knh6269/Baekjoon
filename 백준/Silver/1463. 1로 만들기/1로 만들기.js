let input = require('fs').readFileSync('/dev/stdin').toString().trim();

const solution = () => {
    let stack = [0, 0, 1, 1];

    for (let i = 4; i <= input; i++) {

        if (i % 3 === 0 && i % 2 === 0) {
            const three = stack[i / 3];
            const two = stack[i / 2];
            const minus = stack[i - 1];
            
            if (three <= two && three <= minus) {
                stack.push(three + 1);
            }
            else if (two <= minus && two <= three) {
                stack.push(two + 1)
            }
            else if (minus <= two && minus <= two) {
                stack.push(minus + 1);
            }
        }

        else if (i % 3 === 0) {
            const three = stack[i / 3];
            const minus = stack[i - 1];
            
            if (three < minus) {
                stack.push(three + 1);
            }
            else {
                stack.push(minus + 1);
            }
        }

        else if (i % 2 === 0) {
            const two = stack[i / 2];
            const minus = stack[i - 1];
            if (two < minus) {
                stack.push(two + 1);
            }
            else {
                stack.push(minus + 1);
            }
        }

        else {
            const minus = stack[i - 1];
            stack.push(minus + 1);
        }
    }

    console.log(stack[input])
}

solution();