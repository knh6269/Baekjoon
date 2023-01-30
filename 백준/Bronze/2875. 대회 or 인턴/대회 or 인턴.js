let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let [girl, boy, intern] = input.split(' ');

const solution = () => {
   
    for (let i = 0; i < intern; i++) {
        if (girl % 2) {
            girl--;
        }
        else if (boy > (girl / 2)) {
            boy--;
        }
        else {
            girl--;
        }
    }
    
    if (girl > boy * 2) {
        console.log(boy);
    }
    else {
        console.log(Math.floor(girl / 2));
    }
}

solution();