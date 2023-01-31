let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M, V] =  input.shift().split(' ').map(Number);
let edge = input.map((item) => item.split(' ').map(Number));
let graph = [...new Array(N + 1)].map(() => []);

edge.map(([a, b]) => {
    graph[a].push(b);
    graph[b].push(a);
});


const dfs = (start) => {
    const stack = [start];
    const order = [];
    let visited = new Array(N + 1).fill(false);

    while (stack.length) {
        const node = stack.pop(); 

        if (!visited[node]) {
            visited[node] = true;
            order.push(node);
            stack.push(...graph[node]);
        }
    }
    console.log(order.join(' '));
}

const bfs = (start) => {
    const queue = [start];
    const order = [];
    let visited = new Array(N + 1).fill(false);

    while (queue.length) {
        const node = queue.shift();

        if (!visited[node]) {
            visited[node] = true;
            order.push(node);
            queue.push(...graph[node]);
        }
    }
    console.log(order.join(' '));
}

graph.map((item) => item.sort((a, b) => b- a));
dfs(V);
graph.map((item) => item.sort((a, b) => a - b));
bfs(V);