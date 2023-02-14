let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [a, target] = input.shift().split(' ').map(Number);

const array = input[0].split(' ').map(Number);
let count = 0;

const dfs = (stack, index) => {
    if (sum(stack)) {
        count++;
    }
    for (let i = index + 1; i < array.length; i++) {
        dfs ([...stack, array[i]], i);
    }
    
}

const sum = (stack) => {
    let sum = stack.reduce((cur, sum) => sum + cur);
    if (sum === target) {
        return true;
    }
}

for (let i = 0 ; i < array.length; i++) {
    dfs([array[i]], i);
}

console.log(count)