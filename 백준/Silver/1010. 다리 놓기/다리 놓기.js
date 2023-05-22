let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();
let array = input.map((item) => item.split(" ").map(Number));

const dp = [1, 1, 2, 6];

for (let i = 4; i <= 30; i++) {
  dp.push(dp[i - 1] * i);
}

for (let i = 0; i < array.length; i++) {
  const N = array[i][0];
  const M = array[i][1];

  const answer = Math.round(dp[M] / (dp[M - N] * dp[N]));
  console.log(answer);
}

