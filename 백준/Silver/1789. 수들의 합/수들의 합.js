let input = require('fs').readFileSync('/dev/stdin').toString().trim()
const num = Number(input)

let sum = 0
let count = 0

if (num === 1 || num === 2) {
    console.log(1)
    return 
}

for (let i = 1; i <= num; i++) {

    if (sum > num) {
        console.log(count - 1)
        break
    }

    if (sum === num) {
        console.log(count)
        break
    }

    sum += i
    count++
}

