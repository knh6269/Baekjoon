let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift()

const array = input.map((item) => item.split(' ').map(Number))
const graph = [...new Array(input.length + 1)].map(() => [])
let count = 0;
for (let i = 0; i < array.length; i++) {
    graph[array[i][0]].push(array[i][1])
}

for (let cow of graph) {
    for (let i = 1; i < cow.length; i++) {
        if (cow[i] != cow[i - 1]) {
            count++;
        }
    }
}

console.log(count)