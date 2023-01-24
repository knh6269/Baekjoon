let input = require('fs').readFileSync('/dev/stdin').toString().trim();

const solution = () => {
    for (let i = 0; i < input; i++) {
        for (let j = 0; j <= i; j++) {
            process.stdout.write("*");
        }
        console.log('');
    }
}

solution();