let input = require('fs').readFileSync('/dev/stdin').toString().trim()
let string = "";
const array = [4, 2, 1];

for (let i = 0; i < input.length; i++) {
    let num = input[i];

    for (let j = 0; j < 3; j++) {

        if (num >= array[j]) {
            num -= array[j];
            string += '1';
        } else {
            string += '0';
        }
    }
} 
console.log(BigInt(string).toString());


