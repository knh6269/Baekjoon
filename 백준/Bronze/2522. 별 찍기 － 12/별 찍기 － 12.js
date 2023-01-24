let input = require('fs').readFileSync('/dev/stdin').toString().trim()

const solution = () => {
    for (let i = 0; i < input; i++) {
        for (let j = 0; j < input - i - 1; j++) {
            process.stdout.write(' ');
        }
        for (let k = 0; k <= i; k++) {
            process.stdout.write('*');
        }
        process.stdout.write('\n');
    }

    for (let i = 1; i < input; i++) {
        for (let j = 1; j <  i + 1; j++) {
            process.stdout.write(' ');
        }
        for (let k = 0; k < input - i; k++) {
            process.stdout.write('*');
        }
        console.log(' ');
    }
}

solution();