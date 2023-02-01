let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const ab = input[0] + input[1];
const cd = input[2] + input[3];

console.log(parseInt(ab) + parseInt(cd));
