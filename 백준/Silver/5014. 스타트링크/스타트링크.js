let input = require('fs').readFileSync('/dev/stdin').toString().trim();
input = input.split(' ');

const [total, now, target, up ,down] = input.map(Number);

const visited = Array(1000001).fill(0);
const queue = [[now, 0]];

while (queue.length) {
    const [floor, count] = queue.shift();
    if (visited[floor]) {
        continue;
    }

    if (floor === target) {
        console.log(count);
        return ;
    }

    for (let stairs of [floor + up, floor - down]) {
        if (stairs >= 1 && stairs <= total) {
            queue.push([stairs, count + 1]);
        }
    }

    visited[floor] = 1;
}

console.log('use the stairs');


