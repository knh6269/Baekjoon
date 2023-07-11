let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

input.shift();

let count = 0;

const check = (array) => {
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i + 1] - array[i] !== 1) {
            return false;
        }
    }
    return true;
}

for (let str of input) {
    const array = str.split('');
    const set = [...new Set(array)];
    let flag = 1;

    for (let token of set) {
        const sample = [];
        for (let i = 0; i < str.length; i++) {
            if (str[i] === token) {
                sample.push(i);
            }
        }

        if (!check(sample)) {
            flag = 0;
        }
    }
    if (flag) count++;
}

console.log(count);