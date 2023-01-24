let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = () => {
    const array = input[1].split(" ").map((item) => Number(item));
    const min = Math.min(...array);
    const max = Math.max(...array);

    console.log(min, max);

}

solution();