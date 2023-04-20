let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift()
input = input.map(Number)


const dp = [[1, 0],[0, 1], [1, 1]]

for (let i = 3; i <= 40; i++) {
    dp.push([dp[i - 2][0] + dp[i - 1][0],
            dp[i - 2][1] + dp[i - 1][1]])
}

for (let num of input) {
    console.log(dp[num].join(' '))
}

