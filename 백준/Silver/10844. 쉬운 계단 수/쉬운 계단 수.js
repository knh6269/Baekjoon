let input = require('fs').readFileSync('/dev/stdin').toString().trim();

const solution = () => {
    let dp = new Array(Number(input + 1)).fill(0);
    dp = dp.map((item) => new Array(10).fill(0))

    dp[1] = [0, 1, 1, 1, 1, 1, 1, 1, 1 ,1];
    dp[2] = [1, 1, 2, 2, 2, 2, 2, 2, 2, 1];

    for (let i = 3; i <= input; i++) {
        for (let j = 0; j < 10; j++) {
            if (j === 0) {
                dp[i][j] = dp[i - 1][1] % 1000000000; 
            }
            else if (j === 9) {
                dp[i][j] = dp[i - 1][8] % 1000000000;
            }
            else {
                dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j + 1]) % 1000000000;
            }
        }
    }
     console.log(dp[input].reduce((sum, cur) => sum + cur) % 1000000000);
}

solution();

// let input = require('fs').readFileSync('/dev/stdin').toString().trim()

// const check = (num) => {
//     num = String(num);
//     let status = 1;

//     for (let i = 1; i < num.length; i++) {
//         if (Math.abs(num[i] - num[i - 1]) !== 1 ) {
//             status= 0;
//         }
//     }

//     if (status === 1) {
//         count++;
//     }
// }

// const solution = () => {
//     for (let i = 10 ** (input - 1); i < 10 ** input; i++) {
//         check(i);
//     }
//     console.log(count % 1000000000);
// }

// solution();
// 시간초과 