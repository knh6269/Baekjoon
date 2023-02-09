let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const answer = [];

while (input.length) {
    const [row, col] = input[0].split(' ');
    input.shift();
    let board = input.splice(0, col);
    let count = 0;
    board = board.map((item) => item.split(' ').map(Number));
    const visited = [...new Array(Number(col))].map(() => new Array(Number(row)).fill(0));
    
    const bfs = (x, y) => {
        const start = [[x, y]];

        while (start.length) {
            const [dx, dy] = start.shift();
            if (!visited[dx][dy]) {
                visited[dx][dy] = 1;
                board[dx][dy] = 0;
            } else {
                continue;
            }

            if (dx < col - 1 && board[dx + 1][dy]) {
                start.push([dx + 1, dy]);
            }
            if (dy < row - 1  && dx < col - 1 && board[dx + 1][dy + 1]) {
                start.push([dx + 1, dy + 1]);
            }
            if (dx < col - 1 && dy > 0 &&  board[dx + 1][dy - 1]) {
                start.push([dx + 1, dy - 1]);
            }
            if (dx > 0 && board[dx - 1][dy]) {
                start.push([dx - 1, dy]);
            }
            if (dy > 0 &&  dx > 0 && board[dx - 1][dy - 1]) {
                start.push([dx - 1, dy - 1]);
            }
            if (dy < row - 1  && dx > 0 && board[dx - 1][dy + 1]) {
                start.push([dx - 1, dy + 1]);
            }
            if (dy > 0 && board[dx][dy - 1]) {
                start.push([dx, dy - 1]);
            }
            if (dy < row - 1  && board[dx][dy + 1]) {
                start.push([dx, dy + 1]);
            }
            
        }
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (!visited[i][j] && board[i][j]) {
                count++;
                bfs(i, j);
            }
        }
    }
    answer.push(count);
}
answer.pop();
console.log(answer.join('\n'));