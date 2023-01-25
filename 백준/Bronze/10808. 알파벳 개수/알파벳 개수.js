let input = require('fs').readFileSync('/dev/stdin').toString().trim();


const solution = () => {
    let alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let answer = new Array(26).fill(0);

    for (let i = 0; i < input.length; i++) {
        answer[alpha.indexOf(input[i])] += 1;
    }
    console.log(answer.join(" "));
}

solution();