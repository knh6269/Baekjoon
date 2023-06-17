let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const N = input.shift();
const array = input.map((item) => item.split(".")[1]);
const result = {};

for (let i = 0; i < array.length; i++) {
    result[array[i]] ? result[array[i]]++ : (result[array[i]] = 1);
}

let print = [];

Object.keys(result).sort().forEach((item) => {
    print.push([item, result[item]]);
});

let a = "";

print.forEach((item) => {
    a += `${item[0]} ${item[1]}\n`;
})

console.log(a.trim())