let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.splice(0, 1);

const array = input.map(Number);

if (array.length === 1) {
    console.log(array[0]);
    return ;
}

const dp = [array[0], array[0] +  array[1]];

for (let i = 2; i < array.length; i++) {
    let max = 0 ;

    if (i < 3) {
       max = Math.max(
        array[i - 1] + array[i],
        array[i - 2] + array[i]
       );
    } else {
        max = Math.max(
            dp[i - 3] + array[i - 1]  + array[i],
            dp[i - 2] + array[i]
        );
    }
    
    dp.push(max);
    
}

console.log(dp[dp.length - 1])
