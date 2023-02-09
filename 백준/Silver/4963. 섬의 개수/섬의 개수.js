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
        const xMover = [0, 0, -1, -1, -1, 1, 1, 1];
        const yMover = [-1, 1, -1, 0, 1, -1, 0, 1];
        
        while (start.length) {
            const [dx, dy] = start.shift();
            
            if (!visited[dx][dy]) {
                visited[dx][dy] = 1;
            } else {
                continue;
            }

            for (let i = 0; i < xMover.length; i++) {
                const xMove = dx + xMover[i];
                const yMove = dy + yMover[i];

                if (xMove >= 0 && xMove < col && yMove >=0 && yMove < row) {
                    if (board[xMove][yMove]) {
                        start.push([xMove, yMove]);
                    }
                }
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