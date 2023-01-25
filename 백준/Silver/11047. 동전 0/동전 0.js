let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let sample = input.splice(0, 1);
sample = sample[0].split(" ");
let count = 0;

const charge = (money) => {
    count += Math.floor(sample[1] / money);
    sample[1] = sample[1] % money;
}

const solution = () => {
    input = input.sort((a, b) => a - b).map((item) => Number(item)).reverse();
    
    for (let i = 0; i < input.length; i++) {
        charge(input[i]); 
    }
    
    console.log(count);
}

solution();