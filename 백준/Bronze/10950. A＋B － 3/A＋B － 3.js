let fs = require('fs');
let input = fs.readFileSync(0, 'utf8').toString().split('\n');

const add = (array) => {
    console.log(parseInt(array[0]) + parseInt(array[1]));
}
const solution = () => {
    for (let i = 1; i <= input[0]; i++) {
        const array = input[i].split(' ');
        add(array);
    }
}

solution();
