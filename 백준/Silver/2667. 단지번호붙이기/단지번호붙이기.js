let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.splice(0, 1);
input = input.map((item) => item.split('').map(Number))
let answer = [];
let trys = 0;

const bfs = (queue, count) => {
    while (queue.length) {
        const [from, to] = queue.shift();

            input[from][to] = 0;
            count++;

        if (from < input.length - 1 && input[from + 1][to] == 1) {
            queue.push([from + 1, to]);
            input[from + 1][to] = 0;
        }
        if (to < input[0].length - 1 && input[from][to + 1] == 1 ) {
            queue.push([from, to + 1]);
            input[from][to + 1] = 0;
        }
        if (from > 0 && input[from - 1][to] == 1) {
            queue.push([from - 1, to]);
            input[from - 1][to] = 0;
        }
        if (to > 0 &&  input[from][to - 1] == 1) {
            queue.push([from, to - 1]);
            input[from][to - 1] = 0;
        }
    }
    answer.push(count);
}

for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[0].length; j++) {
        if (input[i][j] == 1) {
            trys += 1;
            bfs([[i, j]], 0);
        }
    }
}

console.log([trys, ...answer.sort((a,b) => a - b)].join('\n'));