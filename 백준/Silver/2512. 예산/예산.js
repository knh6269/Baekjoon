let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const N = +input.shift(); 
const array = input[0].split(' ').map(Number);
const target = Number(input[1]);

array.sort((a, b) => a - b);
 
let left = 0;
let right = array[array.length - 1];
let answer = -Infinity;

while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    let sum = 0;

    for (let num of array) {
        if (num > mid) sum += mid;
        else sum += num;
    }

    if (sum <= target) {
        if (mid > answer) answer = mid;
        left = mid + 1;
        continue;
    }

    if (sum > target) {
        right = mid - 1;
    }   
}

console.log(answer);