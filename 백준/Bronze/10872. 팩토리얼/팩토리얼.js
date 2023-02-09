let input = require('fs').readFileSync('/dev/stdin').toString().trim()
input = Number(input);

const factorial = (num) => {

    if (num === 1 || num === 0) {
        return 1;
    }

    return factorial(num -1) * num;
}

console.log(factorial(input));



