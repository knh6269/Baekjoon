let input = require('fs').readFileSync('/dev/stdin').toString().trim()

input = input.split('').map(Number);

let sum = 0;
const array = [1, 2, 4];
let answer = "";
let index = 0;

for (let i = input.length - 1; i >= 0; i--) {
    if (input[i]) {
        sum += array[index % 3];
    }
    if (index % 3 === 2) {
        answer = String(sum) + answer;
        sum = 0;
    }
    index++;
}

if (Math.ceil(input.length / 3) !== answer.length) {
    answer = String(sum) + answer;
}

console.log(answer);