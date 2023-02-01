let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('')
let stack = [];

while(input.length) {
    stack.push(input.join(''));
    input.splice(0, 1);
}

console.log(stack.sort().join('\n'));

