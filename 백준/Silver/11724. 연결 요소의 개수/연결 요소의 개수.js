let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [a, b] = input.shift().split(' ').map(Number);
input = input.map((item) => item.split(' ').map(Number));
let graph = [...new Array(a + 1)].map(() => []);
const visited = new Array(a + 1).fill(false);
let count = 0;

input.map(([a, b]) => {
    graph[a].push(b);
    graph[b].push(a);
})

const dfs = (start) => {
    const stack = [start];

    while (stack.length) {
        const node = stack.pop();

        if (visited[node] == false) {
            stack.push(...graph[node]);
            visited[node] = true;
        }
    }

}

for (let i = 1; i <= a; i++) {
    if (visited[i] == false) {
        dfs(i);
        count++;
    }
}

console.log(count);






