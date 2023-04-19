let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift()
input = input[0].split(' ').map(Number).sort((a, b) => a - b)

let answer = [0, 0]
let start = 0
let end = input.length - 1
let min = Infinity

while (start !== end) {
    const sum = input[start] + input[end]
    
    if (Math.abs(sum) < min) {
        answer = [start, end]
        min = Math.abs(sum)
    }

    if (sum === 0) {
        break
    }

    if (sum > 0) {
        end--
        continue
    }

    if (sum < 0) {
        start++
    }
   
}

console.log(input[answer[0]], input[answer[1]])

