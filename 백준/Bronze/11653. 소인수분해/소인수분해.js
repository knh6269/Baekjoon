let input = require('fs').readFileSync('/dev/stdin').toString().trim();
input = Number(input);
let array = [];

if (input === 1) {
    return ;
}

for (let i = 2; i <= input; i++) {
    if (input % i === 0) {
        array.push(i);
        input = input / i;
        i = 1;
    }
}

console.log(array.join('\n'));
