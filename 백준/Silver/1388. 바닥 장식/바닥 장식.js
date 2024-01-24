let  input  = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);
  
 
const visited = [...new Array(N)].map(() => new Array(M).fill(0));

let answer = 0; 
 
const dfs = (row, col) => {
    const stack = [[row, col]];

    while (stack.length) {
        const [nodeRow, nodeCol] = stack.pop();

        if (visited[nodeRow][nodeCol]) continue;

        visited[nodeRow][nodeCol] = 1;
 
             if (nodeCol + 1 < M && input[nodeRow][nodeCol] === '-' && input[nodeRow][nodeCol + 1] === '-') { 
                stack.push([nodeRow, nodeCol + 1]);
             } 
 
            if (nodeRow + 1 < N && input[nodeRow][nodeCol] === '|' && input[nodeRow + 1][nodeCol] === '|') {
                stack.push([nodeRow + 1, nodeCol]);
            } 
    }
}

for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[0].length; j++) {
      if (!visited[i][j]) {
        dfs(i,j);
        answer++;
      }
    }
  }
  
console.log(answer);
