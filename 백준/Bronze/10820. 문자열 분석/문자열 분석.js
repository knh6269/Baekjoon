let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

for (let i = 0; i < input.length - 1; i++) {
    let lower = input[i].match(/[a-z]/g)? input[i].match(/[a-z]/g).length : 0;
    let upper = input[i].match(/[A-Z]/g)? input[i].match(/[A-Z]/g).length : 0;
    let digit = input[i].match(/[0-9]/g)? input[i].match(/[0-9]/g).length : 0;
    let space = input[i].match(/ /g)? input[i].match(/ /g).length : 0;
    console.log(lower, upper, digit, space)
}

