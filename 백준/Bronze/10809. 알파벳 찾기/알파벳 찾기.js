let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('');

const alphabet = new Array(26).fill(-1);

for (let i = 0; i < input.length; i++) {
    if (alphabet[input[i].charCodeAt(0) - 97] != -1) {
        continue;
    }
    alphabet[input[i].charCodeAt(0) - 97] = i;
}

console.log(alphabet.join(' '));

