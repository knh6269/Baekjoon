let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(" ").map(Number);

const dfs = (array) => {
  if (array.length === M) {
    console.log(array.join(" "));
    return ;
  }

  for (let i = array[array.length - 1]; i <= N; i++) {
    
    dfs([...array, i]);

  }
  
}

for (let i = 1; i <= N; i++) {
  dfs([i]);
}