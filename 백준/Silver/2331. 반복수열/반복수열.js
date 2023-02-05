let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
const [a, b] = input;
const visited = [...new Array(10000)].map(() => 0);

const math = (num, array) => {
    if (visited[num] === 1) {
        console.log(array.indexOf(num).toString());
        return ;
    }
    visited[num] = 1;
    array.push(num);
    let sum = 0;
    let newNum = num.split('');
 
    for (let i = 0; i < newNum.length; i++) {
        sum += (Number(newNum[i]) ** b);
    }

    math(String(sum), array);
}

math(a, [])