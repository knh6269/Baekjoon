let [N, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const visited = [... new Array(input.length)].map(() => Array(input[0].length).fill(0));
let count = 0;

const dfs = (row, col) => {
  const stack = [[row, col]];

    while (stack.length) {
      const [x,y] = stack.pop();
      
      if (visited[x][y]) continue;

      visited[x][y] = 1;
      if (y + 1 < input[0].length && input[x][y] === '-' && input[x][y + 1] === '-') {
        stack.push([x, y+ 1]);
      } 
      if (x + 1 < input.length && input[x][y] === '|' && input[x + 1][y] === '|') {
        stack.push([x + 1, y]);
      } 
    }
}

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input[0].length; j++) {
    if (!visited[i][j]) {
      dfs(i,j);
      count++;
    }
  }
}

console.log(count);