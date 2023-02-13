let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();

const people = input[0].split(' ').map(Number).sort((a, b) => a - b);

for (let i = 1; i < people.length; i++) {
    people[i] += people[i - 1];
}

console.log(people.reduce((sum, cur) => sum + cur));