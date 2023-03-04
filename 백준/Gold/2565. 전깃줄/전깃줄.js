let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

input.shift();

const dp = Array(input.length).fill(1);
const array = input.map((item) => item.split(' ').map(Number)).sort(function comperator(a, b){
    if (a[0] > b[0]) {
        return 1;
    }
    if (a[0] < b[0]) {
        return -1;
    }
    if (a[0] === b[0]) {
        return 0;
    }
});

for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < i; j++) {
        if (array[i][1] > array[j][1]) {
            dp[i] = Math.max(dp[i], dp[j] + 1);
        }
    }
}

console.log(input.length - Math.max(...dp));