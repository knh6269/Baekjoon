let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();

const array  = input.map((item) => item.split(" ").map(Number))
const dp  = [...new Array(array.length)].map(() => new Array(3).fill(0));
dp[0] = array[0]

for (let i = 1; i < array.length; i++) {
    dp[i][0] = Math.min(dp[i-1][1], dp[i-1][2]) + array[i][0];
    dp[i][1] = Math.min(dp[i-1][0], dp[i-1][2]) + array[i][1];
    dp[i][2] = Math.min(dp[i-1][0], dp[i-1][1]) + array[i][2];
} 

console.log(Math.min(...dp[dp.length - 1]))