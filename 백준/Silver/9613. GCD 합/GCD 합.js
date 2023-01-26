let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.splice(0, 1);
input = input.map((item) => item.split(' '));
input.map((item) => item.splice(0, 1));
input = input.map((item) => item.map((item) => Number(item)));

const getGcd = (a, b) => (b > 0 ? getGcd(b, a % b) : a);

const solution = () => {
    for (let i = 0 ; i < input.length; i++) {
        let sum = 0;

        for (let j = 0 ; j < input[i].length - 1; j++) {
            for(let k = j + 1; k < input[i].length; k++) {
                sum += getGcd(input[i][j], input[i][k]);
            }
        } 
        
        console.log(sum)
    }
}

solution();
