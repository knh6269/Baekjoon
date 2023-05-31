let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input.shift());

const array = input[0].split(' ').map(Number).sort((a,b)=>a-b);
const set = new Set(array);
const map = new Map();

[...set].forEach((item, index) => {
    map.set(item, index);
})

const answer = [];

input[0].split(' ').forEach((item, index) => {
   answer.push(map.get(+item));
})

console.log(answer.join(" "));