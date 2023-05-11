let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const number = input[0].split('').map(Number);

console.log(number.sort((a, b) => b - a).join(""));

