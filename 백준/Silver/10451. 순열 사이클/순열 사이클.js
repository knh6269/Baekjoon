let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();

for (let i = 1; i <input.length; i += 2) {
    const edge = [...new Array(Number(input[i - 1]))].map((item, index) => index + 1);
    input[i] = input[i].split(' ').map(Number);
    const graph = [...new Array(edge.length)].map(() => []);
    const newGraph = [...new Array(edge.length + 1)].map(() => []);
    const visited = [...new Array(edge.length + 1)].map(() => false);
    let count = 0;

    for (let j = 0; j < input[i].length; j++) {
        graph[j].push(edge[j]);
        graph[j].push(input[i][j]);
    }

    graph.map(([a, b]) => {
        newGraph[a].push(b);
    })

    const dfs = (start) => {
        const stack = [start];

        while (stack.length) {
            const node = stack.pop();

            if (!visited[node]) {
                visited[node] = true;
                stack.push(...newGraph[node]);
            } else {
                count++;
                return ;
            }
        }    
    }

    for (let j = 1; j <= edge.length; j++) {
        if (!visited[j]) {
            dfs(j);
        }
    }

    console.log(count);
}