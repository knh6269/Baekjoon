let [M, input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input = input.split(' ').map(Number).sort((a, b) => b - a)

for (let i = 0; i < input.length - 1; i++) {
    if (input[i] < input[i + 1]) {
        input[i + 1] = input[i] / 2 + input[i + 1]
        continue
    } 
    input[i + 1] = input[i] + input[i + 1] / 2
}

console.log(input.pop())