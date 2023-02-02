let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();
const answer = [];

for (let i = 1 ; i < input.length - 1; i += 3) {
    const newInput0 = input[i].split(' ').map(Number);
    const newInput1 = input[i + 1].split(' ').map(Number);
    const dp = [[newInput0[0], newInput1[0]], [newInput1[0] + newInput0[1], newInput0[0] + newInput1[1]]];
    
    if (newInput0.length === 1) {
        answer.push(Math.max(newInput0[0], newInput1[0]));
        continue;
    }

    for (let j = 2; j < newInput0.length; j++) {
        dp.push([Math.max(
            dp[j - 1][1] + newInput0[j],
            dp[j - 2][1] + newInput0[j]
        ),
        Math.max(
            dp[j - 1][0] + newInput1[j],
            dp[j - 2][0] + newInput1[j]
        )])
    }

    answer.push(Math.max(dp[dp.length - 1][0], dp[dp.length - 1][1]));
}
console.log(answer.join('\n'));


