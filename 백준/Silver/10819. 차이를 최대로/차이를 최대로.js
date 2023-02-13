let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();
const array = input[0].split(' ').map(Number);
let visited = Array(101).fill(0);
let max = -100000;

const addIndex = () => {
    for (let i = 0; i < array.length; i++) {
        visited[i]++;
    }
}

const sums = (stack) => {
    let sum = 0;

    for (let i = 0; i < stack.length - 1; i++) {
        sum += Math.abs(stack[i] - stack[i + 1]);
    }

    max = Math.max(sum, max);
}

const bfs = (stack) => {
    if (stack.length == array.length) {
        sums(stack);
        return ;
    }

    for (let i = 0; i < array.length; i++) {
        if(visited[i]) {
            visited[i] = 0
            bfs([...stack, array[i]]);
            visited[i]++;
        }
    }
}

for (let i = 0; i < array.length; i++) {
    visited = visited.map(() => 0)
    addIndex();
    bfs([]);
}

console.log(max);