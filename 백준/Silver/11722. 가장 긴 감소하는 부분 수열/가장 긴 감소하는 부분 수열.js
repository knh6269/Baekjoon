let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();
input = input[0].split(' ').map(Number).reverse();
const dp = Array(input.length).fill(0);

for (let i = 0; i < input.length; i++) {
    let min = 0;
    for (let j = 0; j < i; j++) {
        if (input[i] > input[j]) {
            min = Math.max(min, dp[j]);
        }
    }
    dp[i] = min + 1;
}

console.log(Math.max(...dp))