let input = require('fs').readFileSync('/dev/stdin').toString().trim();

const answer = input.split("-").map((item) => Number(item.split("+").reduce((cur, acc) => Number(cur) + Number(acc)))).reduce((cur, acc) => cur - acc);


console.log(answer)