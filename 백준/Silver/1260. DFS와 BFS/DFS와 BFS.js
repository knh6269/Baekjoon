let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M, V] = input.shift().split(' ').map(Number);
const map = input.map((item) => item.split(' ').map(Number));
const graph = [... new Array(N + 1)].map(() => []);
 
map.forEach(([from, to]) => {
    graph[from].push(to);
    graph[to].push(from);
});
 
const dfs = (startIndex) => {
    const visited = [...new Array(N + 1)].fill(0);
    const stack = [startIndex];
    const array = [];

    while (stack.length) {
        const node = stack.pop();

        if (visited[node]) continue;

        array.push(node);
        visited[node] = 1;

        const newNode = graph[node].sort((a, b) => b - a);
        stack.push(...newNode);

    }
    console.log(array.join(' '))
}

const bfs = (startIndex) => {
    const visited = [...new Array(N + 1)].fill(0);
    const queue = [startIndex];
    const array = [];

    while (queue.length) {
        const node = queue.shift();

        if (visited[node]) continue;
        
        array.push(node);
        visited[node] = 1;

        const newNode = graph[node].sort((a, b) => a - b);
        queue.push(...newNode);

    }
    console.log(array.join(' '))
}

dfs(V);
bfs(V);