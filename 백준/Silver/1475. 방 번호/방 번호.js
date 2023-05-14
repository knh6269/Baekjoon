let input = require('fs').readFileSync('/dev/stdin').toString().trim();

const array = input.split("").map(Number);

const collect = new Map();

for (let num of array)  {
  collect.set(num, (collect.get(num) || 0) + 1);
}

const sum = (collect.get(6) || 0) + (collect.get(9) || 0);
const less = Math.floor(sum / 2);
collect.set(6, less)
collect.set(9,sum - less);

const value = [];

for (let num of collect) {
  value.push(num[1]);
}

console.log(Math.max(...value));