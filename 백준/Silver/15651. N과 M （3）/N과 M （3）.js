let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
const [number, length] = input.map(Number)
const answer = []

const dfs = (array) => {
    if (array.length === length) {
        answer.push(array.join(' '))
        return ;
    }
    for (let i = 1; i <= number; i++) {
        array.push(i)
        dfs(array)
        array.pop()
    }
}

for (let i = 1; i <= number; i++) {
    dfs([i])
}

console.log(answer.join('\n'))