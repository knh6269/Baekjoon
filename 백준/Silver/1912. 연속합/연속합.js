let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.splice(0, 1);

const array = input[0].split(' ').map(Number);

const dp = [array[0]];

for (let i = 1; i < array.length; i++) {
    const max = dp[i - 1] > 0 ? dp[i - 1] + array[i] : array[i];
    dp.push(max);
}
console.log(Math.max(...dp));


