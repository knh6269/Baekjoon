let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();
input = input.map((item) => Number(item));

const isPrime = (num) => {
    let flag = 1;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            flag = 0;
            break;
        }
    }
    return flag;
}

for (let i = 0; i < input.length; i++) {
    if (input[i] == 0 || input[i] == 1) {
        console.log(2);
        continue;
    }
    for (let j = input[i]; j; j++) {
        if (isPrime(j)) {
            console.log(j);
            break;
        }
    }
}



