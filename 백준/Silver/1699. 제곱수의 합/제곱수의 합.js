let input = require('fs').readFileSync('/dev/stdin').toString().trim()

const dp = [...new Array(Number(input) + 1)].map((item, index) => index);

for (let i = 1; i <= input; i++) {
   for (let j = 1; j *j <= i; j++) {
       dp[i] = Math.min(dp[i], dp[i - j**2] + 1);
   }
}

console.log(dp[input])

