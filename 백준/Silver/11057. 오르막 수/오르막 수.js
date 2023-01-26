let input = require('fs').readFileSync('/dev/stdin').toString().trim();
input = Number(input);

const solution = () => {
    let dp = new Array(input + 1).fill(0);
    dp = dp.map((item) => new Array(10).fill(0))

    dp[1] = [1, 1, 1, 1, 1, 1, 1, 1, 1 ,1];
    dp[2] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    for (let i = 3; i <= input; i++) {
        for (let j = 0; j < 10; j++) {

            if (j === 0) {
                dp[i][j] = 1;
            } else {
                let sum = 0 ;
                
                for (let k = 0; k <= j; k++) {
                    sum += dp[i - 1][k];
                }

                dp[i][j] = sum % 10007;
            }
        }

    }

    console.log(dp[input].reduce((sum, cur) => sum + cur) % 10007);
}

solution();
