let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const solution = () => {
    const [a, b, c] = input.map((item) => Number(item));

    console.log((a + b) % c);
    console.log(((a % c) + (b % c))% c);
    console.log((a * b) % c);
    console.log((a % c) * (b % c) % c); 
}

solution();