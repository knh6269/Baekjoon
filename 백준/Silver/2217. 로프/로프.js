let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift()
const rope = input.map(Number).sort((a, b) => b - a)
 
let max = 0
for (let i = 0; i < rope.length; i++) {
    const sum = rope[i] * (i + 1)
    
    if (sum > max) {
        max = sum
    }
}

console.log(max)