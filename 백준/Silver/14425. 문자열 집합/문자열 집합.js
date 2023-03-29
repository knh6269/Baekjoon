let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [originalLength, sampleLength] = input.shift().split(" ").map(Number);

const original = input.splice(0, originalLength).map((item) => [item, 1]);
const sample = input;
const map = new Map(original);
let count = 0;

for (let j = 0; j < sample.length; j++) {
    if (map.get(sample[j])) {
        count++;
    }
}

console.log(count);