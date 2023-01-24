let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let num = input[1];

const add = (array) => {
    array = array.map((item) => Number(item));
    const sum = array.reduce((sum, cur) => sum + cur);
    console.log(sum);
}

const solution = () => {
    num = num.split('');
    add(num);
}

solution();