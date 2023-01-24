let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const add = (array) => {
    console.log(parseInt(array[0]) + parseInt(array[1]));
}

const solution = () => {
    for (let i = 0; i < input.length - 1; i++) {
        const array = input[i].split(' ');
        add(array);
    }
}

solution();
