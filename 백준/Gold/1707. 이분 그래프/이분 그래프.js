let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const many = Number(input.shift());
input = input.map((item) => item.split(' ').map(Number));
const answer = new Array(many).fill('YES');

for (let i = 0; i < many; i++) {
    const [a, b] = input.shift().map(Number);
    const edge = input.splice(0, b);
    const graph = [...new Array(a + 1)].map(() => []);
    let visited = [...new Array(a + 1)].map(() => 0);

    edge.map(([to, from]) => {
        graph[to].push(from);
        graph[from].push(to);
    });

    const bfs  = (start) => {
        let queue = [start];
        let check = 1;

        visited[start] = check;

        while (queue.length) {
            let cur = queue.shift();

            if (visited[cur] === 1) {
                check = 2;
            } else if (visited[cur] === 2) {
                check = 1;
            }

            for (let j = 0; j < graph[cur].length; j++) {
                let next = graph[cur][j];

                if (!visited[next]) {
                    visited[next] = check;
                    queue.push(next);
                }
                else if (visited[cur] === visited[next]) {
                    return ;
                } 
            }
        }
    }

    for (let j = 1; j <= a; j++) {
        if (!visited[j])
        bfs (j);
    }

    const isAns = () => {
        for (let j = 1; j <= a; j++) {
            for (let k = 0; k < graph[j].length; k++) {
                let next = graph[j][k];
    
                if (visited[j] === visited[next]) {
                    answer[i] = 'NO';
                    return ;
                }
            }
        }
    }
    isAns();
}
console.log(answer.join('\n'));
