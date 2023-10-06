let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

// let input = require('fs').readFileSync('예제.txt').toString().trim().split('\r\n');

const number = input[0];

const zero = [];
const one  = [];

for (let i = 0; i < number.length; i++) {
    if (i === 0 ) {
        if (number[i] === '0') 
        zero.push('0');
        if (number[i] === '1') 
        one.push('1')
        continue;
    }

    if (number[i] === '0') { 
        if (number[i - 1] === '0') {
            zero[zero.length - 1] += '0'; 
            continue;
        }
        zero.push('0')
        
    }
    if (number[i] === '1') { 
        if (number[i - 1] === '1') {
            one[one.length - 1] += '1';
            continue;
        }one.push('1')
    }
} 
console.log(Math.min(zero.length, one.length))