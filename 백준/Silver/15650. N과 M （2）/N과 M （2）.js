let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map((item) => Number(item));

const [num, length] = input

let visited = new Array(num + 1).fill(0)

const dfs = (index, array) => {

    if (array.length === length) {
        console.log(...array)
        return ;
    }    

    for (let i = index + 1; i <= num; i++) {
       
        if (!visited[i]) {
            visited[i] = 1
            dfs(i, [...array, i])
            visited[i] = 0
        }
    }
}

for (let i = 1; i <= num; i++) {
    dfs(i, [i])
    visited = visited.map(() => 0)
}