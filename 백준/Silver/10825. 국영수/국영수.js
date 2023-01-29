let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.splice(0, 1);

const solution = () => {
    input = input.map((item) => item.split(' '));

    for (let i = 0; i < input.length; i++) {
        for (let j = 1; j < 4; j++) {
            input[i][j] = Number(input[i][j]);
        }
    }
    
    input.sort((function comperator (a, b) {
        if (a[1] < b[1]) return 1;
        else if (a[1] > b[1]) return -1;
        else {
           if (a[2] > b[2]) return 1;
           else if (a[2] < b[2]) return -1;
           else {
                 if (a[3] < b[3]) return 1;
                 else if (a[3] > b[3]) return -1;
                 else {
                    if (a[0] > b[0]) return 1;
                    else if (a[0] < b[0]) return -1;
                    else {
                        return 0;
                    }
                }
           }
        }
    }))
    
    let name = [];
    
    input.map((item) => name.push(item[0]));

    console.log(name.join('\n'));
    
}

solution();
