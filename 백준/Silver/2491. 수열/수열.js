let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

input.shift();

const array = input[0].split(' ').map(Number);
let max = 0;
let length = 1;

if (array.length === 1) {
    console.log(1);
    return ;
}

for (let i = 0; i < array.length - 1; i++) {
    if (array[i] <= array[i + 1]) {
        length++;
        max = Math.max(length, max);
    } else {
        max = Math.max(length, max);
        length = 1;
    }
}

let lengths = 1;
for (let i = 0; i < array.length - 1; i++) {
    if (array[i] >= array[i + 1]) {
        lengths++;
        max = Math.max(lengths, max);
    } else {
        max = Math.max(lengths, max);
        lengths = 1;
    }
}

console.log(max)