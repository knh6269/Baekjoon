let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift()

input = input.map((item) => item.split(' ').map(Number))

let array = []

for (let i = 0; i < input.length; i++) {
    let count = 0
    for (let j = 0; j < input.length; j++) {

        if (i === j) {
            continue
        }

        if (input[i][0] < input[j][0] && input[i][1] < input[j][1]) {
            count++
        }
    }
    array.push(count + 1)
}

console.log(array.join(' '))