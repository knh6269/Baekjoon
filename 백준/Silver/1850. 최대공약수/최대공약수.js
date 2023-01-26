let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const max = () => {
    let [a, b] = input;
    b = BigInt(b);
    a = BigInt(a);
    let answer = "";

    while (b > 0) {
        let tmp = a;
        a = b;
        b = tmp % b;
    }
    
    for (let i = 0 ; i < a.toString(); i++) {
        answer += '1';
    }

    console.log(answer);
}

const solution = () => {
    max();
}

solution();
