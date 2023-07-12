let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = input.shift();

const array = input.map(Number);
array.sort((a, b) => b- a); 

let sum = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] - i < 0) continue;
    sum += array[i] - i;
}

console.log(sum);