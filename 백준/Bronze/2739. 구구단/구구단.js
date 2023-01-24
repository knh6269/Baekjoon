let input = require('fs').readFileSync('/dev/stdin').toString().trim();

const solution = () => {
   for (let i = 1; i <= 9; i++) {
    console.log(`${input} * ${i} = ${input * i}`);
   }
}

solution();