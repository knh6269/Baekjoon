let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const money = Number(input.shift())
input = input[0].split(' ').map(Number)

const sungmin = (money) => {
    let count = 0;
    
    for (let i = 0; i < input.length; i++) {
        if (money >= input[i]) {
            count += Math.floor(money / input[i])
            money = money % input[i]
        }
    }
    return count * input[input.length - 1] + money
}

const junhyeon = (money) => {
    let up = 0
    let down = 0
    let count = 0

    for (let i = 1; i < input.length; i++) {
        if (input[i - 1] < input[i]) {
            up += 1
            down = 0
        } 
        if (input[i - 1] > input[i]) {
            down += 1
            up = 0
        }
        if (up === 3) {
            money += count * input[i] 
            count = 0; 
        }
        if (down >= 3) {
            if (money >= input[i]) {
                count += Math.floor(money / input[i])
                money = money % input[i]
            }
        }
    }
    return count * input[input.length - 1] + money
}

const sungminMoney = sungmin(money)
const junhyeonMoney = junhyeon(money)

if (sungminMoney > junhyeonMoney) {
    console.log('BNP')
    return ;
}
if (sungminMoney < junhyeonMoney) {
    console.log('TIMING')
    return ;
}
console.log('SAMESAME')
