let [input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
 
const array = input.split('.');
const answer = [];
 
for (let str of array) {
    const sample = [];

    if (str.length % 2 !== 0) {
        console.log(-1);
        return ;
    }
 
        for (let i = 0; i < Math.floor(str.length / 4); i++){
            sample.push("AAAA"); 
    }
     
        for (let i = 0; i < Math.floor((str.length % 4) / 2); i++){
            sample.push("BB");
        } 
    answer.push(sample.join(''));
}

console.log(answer.join('.'));


 