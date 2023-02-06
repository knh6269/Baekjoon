let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
for (let i = 2; i < input.length; i += 2) {
    const many = Number(input[i - 1]);
    const graph = [0, ...input[i].split(' ').map(Number)];
    const visited = new Array(many).fill(false);
    const finished = new Array(many).fill(false);
    let counting = 0;

    const dfs = (start) => {
       visited[start] = true;
       let next = graph[start];

       if (!visited[next]) {
        dfs(next);
       }

       else {
        if (!finished[next]) {
            ++counting;
            while (next !== start) {
                ++counting;
                next = graph[next];
            }
        }
       }
       finished[start] = true;
    }

    for (let j = 1; j <= many; j++) {
        dfs(j);
    }

    console.log(many - counting);
}