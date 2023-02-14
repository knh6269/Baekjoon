let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [row, col] = input.shift().split(' ').map(Number);

const visited = [...new Array(row)].map(() => Array(col).fill(0));
input = input.map((item) => item.split('').map(Number));

const bfs = (start) => {
    const queue = [start];
    const moveX = [-1, 0, 0, 1];
    const moveY = [0, -1, 1, 0];

    while (queue.length) {
        const node = queue.shift();

        if (node[0] === row - 1 && node[1] === col - 1) {
            console.log(node[2]);
            return ;
        }

        if (!visited[node[0]][node[1]]) {
            visited[node[0]][node[1]] = 1;
        } else {
            continue;
        }

        for (let i = 0; i < 4; i++) {
            const dx = node[0] + moveX[i];
            const dy = node[1] + moveY[i];

            if (dx >=0 && dy >=0 && dx < row && dy < col && input[dx][dy]) {
                queue.push([dx, dy, node[2] + 1]);
            }
        }
    }
}

bfs([0, 0, 1]);