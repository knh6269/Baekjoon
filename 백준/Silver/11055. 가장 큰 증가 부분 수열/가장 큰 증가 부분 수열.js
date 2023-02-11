let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();
input = input[0].split(' ').map(Number);

const dp = Array(input.length).fill(0);

for (let i = 0; i < input.length; i++) {
    let max = 0;
    for (let j = 0; j < i; j++) {
        if (input[i] > input[j]) {
            max = Math.max(max, dp[j]);
        }
    }
    dp[i] = max + input[i];
}

console.log(Math.max(...dp));