let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.splice(0, 1);

const solution = () => {
    for (let space of input) {
        const stack = [];
        let status = 1;

        for (let str of space) {
           if (str === '(') {
                stack.push('(');
            } else {
                if (stack.length == 0) {
                    status = 0;
                    break;
                } else {
                    stack.pop();
                }
            }
        }
        
        if (status == 0 || stack.length != 0) {
            console.log('NO');
        } 
        else if (status === 1) {
            console.log('YES');
        }
    }
}

solution();
