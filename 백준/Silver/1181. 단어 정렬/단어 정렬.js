let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift()

let array = input.sort(function comperator(a, b) {
    if (a.length > b.length) return 1;
    else if (a.length < b.length) return -1;
    else {
        if (a > b) return 1
        else if (a < b) return -1
    }
})

for (let i = 1; i <= array.length; i++) {
    if (array[i] === array[i - 1]) {
        array.splice(i, 1)
        i--
    }
}

console.log(array.join('\n'))