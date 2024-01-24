let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);
  
 
const visited = [...new Array(N)].map(() => new Array(M).fill(0));

let answer = 0; 

const dfs = (i, j) => { 

    if (input[i][j] === '-') {
        for (let k = j; k < M; k++) {
            if (input[i][k] === '-') {
                visited[i][k] = 1;
            } else {
                break;
            }
        }
    }

    if (input[i][j] === '|') {
        for (let k = i; k < N; k++) {
            if (input[k][j] === '|') {
                visited[k][j] = 1;
            } else {
                break;
            }
        }
    }
}

for (let i = 0 ; i < N; i++) {
    for (let j = 0; j < M; j++) {  
        if (!visited[i][j]) {
            visited[i][j] = 1;
            dfs(i, j);
            answer++; 
        }
    }
}

console.log(answer);