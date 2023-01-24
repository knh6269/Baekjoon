let input = require('fs').readFileSync('/dev/stdin').toString().trim();

const solution = () => {
    for (let i = 0; i < input; i++) {

        for (let j = 0; j <= i; j++) {
            process.stdout.write("*");
        }

        for (let k = 0; k < 2 * input - i * 2 - 2; k++) {
            process.stdout.write(' ');
        }

        for (let j = 0; j <= i; j++) {
            process.stdout.write("*");
        }
        console.log('')
    }

    for (let i = 0; i < input; i++) {

        for (let j = 1; j < input - i; j++) {
            process.stdout.write("*");
        }

        for (let k = 0; k < 2 * (i + 1); k++) {
            process.stdout.write(' ');
        }

        for (let j = 1; j < input - i; j++) {
            process.stdout.write("*");
        }
        console.log('')
    }

}

solution();