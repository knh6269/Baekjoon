let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const array = input.map((item) => item.split(" ").map(Number));

const [N, M, K, X] = array.shift().map(Number);
 
const graph = [... new Array(N + 1)].map(() => []);

const finished = new Array(N + 1).fill(0);

array.forEach(([from, to]) => {
    graph[from].push(to);
});

let answer = [];

const bfs = (start) => {
    const queue = [start];
    finished[start] = 1;
    while (queue.length) {
        const node = queue.shift(); 

        if (finished[node] === K + 1) {
            answer.push(node)
            continue;
        }

        graph[node].forEach((item) => {
            if (!finished[item]) {
                queue.push(item);
                finished[item] = finished[node] + 1;
            } 
        })
    }
};

bfs(X);

if (answer.length) { 
    answer = answer.sort((a, b) => a - b).join('\n');
    console.log(answer);
    return ;
}
console.log(-1);