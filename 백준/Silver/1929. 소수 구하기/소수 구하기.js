let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
input = input.map(Number);
const visited = [...new Array(input[1] + 1)].fill(0);
const answer = [];

for (let i = 2; i <= input[1]; i++) {
    if (!visited[i]) {
        for (let j = i * 2; j <= input[1]; j += i) {
            visited[j] = 1;
        }
    } 
}

visited.filter((item, index) => {
     if (!item && index >= input[0] && index <= input[1] && index !== 1) {
        answer.push(index);
    }
});

console.log(answer.join('\n'));