let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, K] = input.shift().split(" ").map(Number);
const array = input.map((item) => item.split(" ").map(Number));
const dp = [... new Array(N + 1).fill(0)].map(() => new Array(K + 1).fill(0));
array.unshift(undefined);

for (let i = 1; i <= N; i++) {
  const [W, V] = array[i];
  for (let j = 1; j <= K; j++) {
    if(j < W) {
      dp[i][j] = dp[i - 1][j];
      continue;
    }
    dp[i][j] = Math.max(dp[i - 1][j - W] + V, dp[i - 1][j]);
  }
}

console.log(dp[N][K]);