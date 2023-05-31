let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input.shift().split(" ").map(Number);
const array = input.map((item) => item.split(" ").map(Number));
const graph = [... new Array(N + 1)].map(() => []);
const answer = [... new Array(N + 1)].fill(0);

array.forEach(([from, to]) => {
  graph[from].push(to);
  graph[to].push(from);
})

const bfs = (start) => {
  const visited = new Array(N+1).fill(false);
  const queue = [[start, 0]];

  while (queue.length) { 
    let [node, count] = queue.shift();

    if (!visited[node]) {
      visited[node] = true;
      answer[node] += count++;
      graph[node].forEach((item) => queue.push([item, count]));
    }    
    
  }
}

for (let i = 1; i <= N; i++) {
 bfs(i);
}

answer.shift();
const min = Math.min(...answer);

console.log(answer.indexOf(min) + 1);