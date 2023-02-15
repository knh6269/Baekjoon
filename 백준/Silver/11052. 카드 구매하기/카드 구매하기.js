let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();

const array = input[0].split(' ').map(Number);
const dp = [array[0]];

for (let i = 1 ; i < array.length; i++) {
    let max = 0;

    for (let j = 0; j < i; j ++) {
        const sum = dp[i - j - 1] + dp[j];
        max = Math.max(sum, max); 
    }
    max = Math.max(array[i], max);

    dp.push(max);
}

console.log(dp.pop())