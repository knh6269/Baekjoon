let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.splice(0, 1);
let answer = [];
let trys = 0;
const visited= [...new Array(input.length + 1)].map(() => [...new Array(input.length + 1)].fill(0));

const bfs = (queue, count) => {
    while (queue.length) {
        const [from, to] = queue.shift();

        if (!visited[from][to]) {
            visited[from][to] = 1;
            input[from][to] = 0;
            count++;
        } else {
            continue;
        }

        if (from < input.length - 1 && input[from + 1][to] == 1 && !visited[from + 1][to]) {
            queue.push([from + 1, to]);
        }
        if (to < input[0].length - 1 && input[from][to + 1] == 1 && !visited[from][to + 1]) {
            queue.push([from, to + 1]);
        }
        if (from > 0 && input[from - 1][to] == 1 && !visited[from - 1][to]) {
            queue.push([from - 1, to]);
        }
        if (to > 0 &&  input[from][to - 1] == 1 && !visited[from][to - 1]) {
            queue.push([from, to - 1]);
        }
    }
    answer.push(count);
}

for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[0].length; j++) {
        if (input[i][j] == 1 && !visited[i][j]) {
            trys += 1;
            bfs([[i, j]], 0);
        }
    }
}

console.log([trys, ...answer.sort((a,b) => a - b)].join('\n'));