let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

input.shift();

const array = input[0].split(' ').map(Number).sort((a, b) => a - b);

const target = Number(input[1]);

let start = 0;
let end = array.length - 1;
let answer = 0;

while (start < end) {
    const sum = array[start] + array[end];

    if (sum > target) {
        end --;
    }
    
    if (sum < target) {
        start ++;
    }
    
    if (sum === target) {
        answer++;
        start = start + 1;
        end = end - 1;
    }
}

console.log(answer)