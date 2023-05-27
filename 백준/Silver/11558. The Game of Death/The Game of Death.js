let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input.shift());
const array = input.map(Number);

const dfs = (start, target, graph, visited, answer) => {
  const stack = [start];
  let count = 0;

  while (stack.length) {
    const node = stack.pop();

    if (visited[node]) continue;
    visited[node] = true;

    if (node === target) {
      answer.push(count);
      return;
    }

    stack.push(...graph[node]);
    count++;
  }
}

//테스트 케이스만큼 반복
for (let i = 0; i < N; i++) {
  const M = array.shift();
  const newArray = array.splice(0, M);
  const graph = [... Array(M + 1)].map(() => []);
  const target = M;
  const start = 1;
  const visited = Array(M + 1).fill(false);
  const answer = [];

  newArray.forEach((item, index) => {
    graph[index + 1].push(item);
  })

  dfs(start, target, graph, visited, answer);

  
  if (answer.length) {
    console.log(answer[0]);
    continue;
  }

  console.log(0);
}
