let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const testCase = Number(input.shift())
const x = [0, 0, -1, 1]
const y = [1, -1, 0, 0]

const bfs = (col, row, graph, start) => {
    const queue = [start]
    
    while (queue.length) {
        const [dx, dy] = queue.shift()

        for (let i = 0; i < 4; i++) {
            if (dx + x[i] >= row || dy + y[i] >= col || dx + x[i] < 0 ||dy + y[i] < 0) {
                continue
            } 
            if (graph[dx + x[i]][dy + y[i]]) {
                queue.push([dx + x[i], dy + y[i]])
                graph[dx + x[i]][dy + y[i]] = 0
            }
            }
        }
}

for (let testcase = 0; testcase < testCase; testcase++) {
    const [col, row, size] = input.shift().split(' ').map(Number)

    let array = input.splice(0, size)

    array = array.map((item) => item.split(' ').map(Number))

    const graph = [...new Array(row)].map(() => new Array(col).fill(0))

    for (let i = 0; i < array.length; i++) {
        graph[array[i][1]][array[i][0]] = 1
    }
    
    let count = 0

    for (let i = 0; i < graph.length; i++) {
        for(let j = 0; j < graph[0].length; j++) {
            if (graph[i][j] === 1) {
                count++
                bfs(col, row, graph, [i, j])
            }
        }
    }

    console.log(count)

}
