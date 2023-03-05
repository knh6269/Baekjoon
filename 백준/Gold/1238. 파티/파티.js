let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M, X] = input.shift().split(' ').map(Number);
const array = input.map((item) => item.split(' ').map(Number)).sort((a, b) => a[1] - b[1]);
const graph = [...new Array(N + 1)].map(() => []);
const allDistance = [];
let answer = [];

array.map(([from, to, time]) => {
    graph[from].push([to, time]);   
})

const dijkstra = (start, graph) => {
    const distance = Array(N + 1).fill(Infinity);
    const queue = [[start, 0]];
    distance[start] = 0;

    while (queue.length) {
        const [curr, weight] = queue.shift();

        for (const [dest, cost] of graph[curr]) {
            if (distance[dest] > weight + cost) {
                distance[dest] = weight + cost;
                queue.push([dest, distance[dest]]);
            }
        }
    }
    allDistance.push(distance);
}

for (let i = 1; i <= N; i++) {
    dijkstra(i, graph);
}

for (let i = 1; i <= N; i++) {
    answer = Math.max(answer, allDistance[i - 1][X] + allDistance[X - 1][i]);
}

console.log(answer)