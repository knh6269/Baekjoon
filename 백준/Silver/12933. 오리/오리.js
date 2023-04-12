let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('');
const array = new Array(input.length).fill(false)
let length = 0
let count = 0

for (let j = 0; j < array.length; j++) {
    const duck = []

    for (let i = 0; i < input.length; i++) {
        if (array[i] === true) continue
        if ((!duck.length || duck[duck.length - 1] === 'k') && input[i] === 'q') {
            duck.push('q')
            array[i] = true
        }
        else if (duck[duck.length - 1] === 'q' && input[i] === 'u') {
            duck.push('u')
            array[i] = true
        }
        else if (duck[duck.length - 1] === 'u' && input[i] === 'a') {
            duck.push('a')
            array[i] = true
        }
        else if (duck[duck.length - 1] === 'a' && input[i] === 'c') {
            duck.push('c')
            array[i] = true
        }
        else if (duck[duck.length - 1] === 'c' && input[i] === 'k') {
            duck.push('k')
            array[i] = true
        }
    }
    
    if (duck.length && duck.length % 5 === 0) {
        count++
        length += duck.length
    }
}

if (input.length !== length) {
    console.log(-1)
    return;
}
console.log(count)


