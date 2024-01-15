let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input.shift()); 

const [a, b] = input.map((item) => item.split(' ').map(Number).sort((a,b) => a - b));

let sum = 0;

for (let i = 0; i < N; i++) {
    sum += a[i] * b[N - i - 1] ;   
} 

console.log(sum);