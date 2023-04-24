let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift()
input = input.map((item) => item.split(' ').map(Number))
const number = input[0]
let calculate = input[1]

let max = -Infinity;
let min = Infinity;

const divide = (cur, number) => {
    if (cur < 0) {
        return Math.floor(Math.abs(cur) / number) * -1
    } 
    return Math.floor(Math.abs(cur) / number)
}

const dfs = (n, cur) => {
   if (n === number.length) {
        max = Math.max(max, cur)
        min = Math.min(min, cur)
        return 
    }

    for (let i = 0 ; i < 4; i++) {
        if (calculate[i] > 0) {
            calculate[i]--

            switch (i) {
                case 0: 
                    dfs(n + 1, cur + number[n])
                    break;
                case 1:
                    dfs(n + 1, cur - number[n])
                    break;
                case 2:
                    dfs(n + 1, cur * number[n])
                    break;
                case 3: 
                    if (number[n] === 0) break;
                    dfs(n + 1, divide(cur, number[n]))
                    break;
            }
            calculate[i]++
        }
    }
}

dfs(1, number[0])
if(max===-0) max=0;
if(min===-0) min=0;

console.log(max)
console.log(min)



