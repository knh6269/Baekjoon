let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();
input = input[0].split(' ').map(Number);
const backInput = [...input].reverse();
const frontDp = Array(input.length).fill(0);
const backDp = Array(input.length).fill(0);

for (let i = 0; i < input.length; i++) {
    let small = 0;
    for (let j = 0; j < i; j++) {
        if (input[i] > input[j]) {
            small = Math.max(small, frontDp[j]);
        }
    }
    frontDp[i] = small + 1;

    let big = 0;
    for (let j = 0; j < input.length; j++) {
        if (backInput[i] > backInput[j]) {
            big = Math.max(big, backDp[j]);
        }
    }
    backDp[i] = big + 1;
}

backDp.reverse();

for (let i = 0; i < frontDp.length; i++) {
    frontDp[i] += backDp[i];
}

console.log(Math.max(...frontDp) - 1);