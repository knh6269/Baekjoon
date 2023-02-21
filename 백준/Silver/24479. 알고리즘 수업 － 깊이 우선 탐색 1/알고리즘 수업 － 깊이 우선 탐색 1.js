let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [a, b, c]= input.shift().split(' ').map(Number);

input = input.map((item) => item.split(' ').map(Number));

const graph = [...new Array(a + 1)].map(() => []);
const answer = Array(a + 1).fill(0);

input.map(([from, to]) => {
    graph[from].push(to);
    graph[to].push(from);
})


const visited = Array(a).fill(0);

const dfs = (start) => {
    const stack = [start];
    let count = 0;

    while (stack.length) {
        const node = stack.pop();
        if (!visited[node]) {
            visited[node] = 1;
            count++;
            answer[node] += count;
            stack.push(...graph[node].sort((a, b) => b - a));
        } else {
            continue;
        }
    }
}

dfs(c);
answer.shift();
console.log(answer.join('\n'));