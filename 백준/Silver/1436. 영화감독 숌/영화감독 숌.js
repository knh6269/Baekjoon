let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let number = input[0]

let start = 666

while (1) {

    if (String(start).includes('666')) {
        number--
    }

    if (!number) {
        console.log(start)
        break
    }

    start++
}
