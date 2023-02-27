let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();

const array = input[0].split(' ').map(Number);
let answer = 0;

for (let i = 0; i < array.length; i++) {
    let flag = 1;
    if (array[i] === 1) {
        continue;
    }
    for (let j = 2; j < array[i]; j++) {
        if (array[i] % j === 0) {
           flag = 0;
           break;
        } 
    }
    if (flag) {
        answer++;
    } 
}
 
console.log(answer)