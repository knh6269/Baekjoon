let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let min = input;

for (let i = 0 ; i <= Math.floor(input / 5); i++) {
    if (((input - (5 * i)) % 3) === 0) {
        const thisMin = i + (input - (5 * i)) / 3;
        min = Math.min(thisMin, min);
    }
}

if (min === input) {
    console.log(-1);
    return;
}

console.log(min);
