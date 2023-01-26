let input = require('fs').readFileSync('/dev/stdin').toString().trim();
input = Number(input);

const solution = () => {
    let dp = new Array(input + 1).fill(0);
    dp = dp.map((item) => new Array(2).fill(0));

    dp[1] = [0, 1];
    dp[2] = [1, 0];

    for (let i = 3; i <= input; i++) {
       dp[i][0] = BigInt(dp[i - 1][0]) + BigInt(dp[i - 1][1]);
       dp[i][1] = BigInt(dp[i - 1][0]);
    }

    console.log((BigInt(dp[input][0]) + BigInt(dp[input][1])).toString());
}

solution();



