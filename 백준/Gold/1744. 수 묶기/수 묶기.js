let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();

input = input.map(Number).sort((a, b) => b -a);

let sum = 0 ;
let minus = 0;

for (let i = 0; i <input.length; i++) {
    if (input[i] < 0) minus++;
}

for (let i = 0 ; i < input.length; i++) {
    if (input[i] * input[i + 1] > input[i] + input[i + 1]) {

        if (input[i] === 0 && input[i + 1] < 0) {
            if (minus % 2 === 0) {
                continue;
            } 
        }
        if (input[i] < 0 && input[i + 1] < 0) {
            if (minus % 2 === 1) {
                sum += input[i];
                minus--;
                continue;
            }
        }

        sum += input[i] * input[i + 1];
        if (input[i] < 0) minus--;
        if (input[i + 1] < 0) minus--;
        i++;
        continue;
    }
    sum += input[i];

}

console.log(sum)



