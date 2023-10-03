let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

//X = 게임횟수
//Y = 이긴 게임
//Z = 승률
 

const [X, Y] = input.map(Number);

const Z = Math.floor((100*Y) / X);
 
//X와 Y가 동시에 늘어날거야
let count = 0;

if (Z >= 99) {
    console.log(-1);
    return ;
}

while (1) {  
    count++;
    const newZ = Math.floor(((Y + count)/(X + count)) * 100);
    if (Z !== newZ) {
        break;
    }
}

console.log(count);