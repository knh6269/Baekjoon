let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const add = (array, index) => {
    console.log(`Case #${index}: ${parseInt(array[0]) + parseInt(array[1])}`);
}

const solution = () => {
    for (let i = 1; i <= input[0]; i++) {
        const array = input[i].split(' ');
        add(array, i);
    }
}

solution();