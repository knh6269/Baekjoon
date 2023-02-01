let input = require('fs').readFileSync('/dev/stdin').toString()

const lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h' ,'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's' ,'t', 'u', 'v', 'w', 'x', 'y', 'z'];
const upper = ['A','B','C','D','E','F','G','H','I','J','K','L',"M",'N',"O",'P','Q','R','S','T','U','V','W','X','Y',"Z"];

const answer = [];

for (let i = 0; i < input.length; i++) {
    if (lower.indexOf(input[i]) != -1) {
        answer.push(lower[(lower.indexOf(input[i]) + 13) % 26]);
    } 
    else if (upper.indexOf(input[i]) != -1) {
        answer.push(upper[(upper.indexOf(input[i]) + 13) % 26]);
    }
    else {
        answer.push(input[i]);
    }
}
console.log(answer.join(''));
