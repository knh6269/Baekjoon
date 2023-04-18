let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift()
let [A, B] = input.map((item) => item.split(' ').map(Number))

A = A.sort((a, b) => a - b)
B = B.sort((a, b) => b - a)

let sum = 0

for (let i = 0; i < A.length; i++) {
    sum += A[i] * B[i]
}

console.log(sum)