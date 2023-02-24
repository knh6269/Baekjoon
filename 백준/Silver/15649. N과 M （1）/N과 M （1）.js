let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
const [num, many] = input.map(Number);

let visited = Array(num + 1).fill(0);
const answer = [];

const dfs = (array, index) => {
    if (array.length === many) {
        answer.push(array.join(' '));
        return ;
    }
    for (let i = 1; i < visited.length; i++) {
        if (!visited[i]) {
            visited[i] = 1;
            dfs([...array, i], i);
            visited[i] = 0;
        }
    }
}

for (let i = 1; i < visited.length; i++) {
    visited = visited.map(() => 0);
    visited[i] = 1;
    dfs([i], i)
}

console.log(answer.join('\n'));