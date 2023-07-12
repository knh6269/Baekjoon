const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
rl.on('line', function (line) {
    input.push(line);
})
.on('close', function () {
    const N = input.shift();
    const array = input.map(Number).sort((a, b) => b- a);

    for (let i = 0; i < input.length; i++) {
        if ((i + 1) % 3 === 0) {
            array[i] = 0;
        }
    }

    console.log(array.reduce((acc, cur) => acc + cur));
    process.exit();
});
