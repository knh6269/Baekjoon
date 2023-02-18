let fs = require('fs');
let input = fs.readFileSync(0, 'utf8').toString().split(' ');

const solution = (a, b) => {
    console.log(parseInt(a) / parseInt(b));
}

solution(input[0], input[1]);