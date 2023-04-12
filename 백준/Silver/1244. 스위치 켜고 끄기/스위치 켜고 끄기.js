let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift()
const array = input.shift().split(' ').map(Number)
input.shift()
input = input.map((item) => item.split(' ').map(Number))

const man = (num) => {
    for (let i = num - 1; i < array.length; i++) {
        if ((i + 1) % num === 0) {
            array[i] = Math.abs(array[i] - 1)
        }
    }
}

const woman = (num) => {
    const wide = Math.min(array.length - num + 1, num - 1)

    for (let i = 1 ; i <= wide; i++) {
        if (array[num - i - 1] == array[num + i - 1]) {
            array[num - i - 1] = Math.abs(array[num - i - 1] - 1)
            array[num + i - 1] = Math.abs(array[num + i - 1] - 1)
        } else {
            break;
        }
    }
    array[num - 1] = Math.abs(array[num - 1] - 1)
}

for (let i = 0 ; i < input.length; i++) {
    if (input[i][0] === 1) {
        man(input[i][1])
    }
    if (input[i][0] === 2) {
        woman(input[i][1])
    }
}

while (array.length) {
    console.log(array.splice(0, 20).join(' '))
}
