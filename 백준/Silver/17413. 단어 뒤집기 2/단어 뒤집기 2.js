let [input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const array = [];

for (let i = 0; i < input.length; i++) {
    //특수문자면 닫힐때 까지 반복
    if (input[i] === '<') {
        let str = "<";
        for (let j = i + 1; j < input.length; j++) {
            str += input[j];
            if (input[j] === ">") {
                break;
            }
        }
        array.push(str);
        i += str.length - 1;
        continue;
    }
    //공백이라면 그대로
    if (input[i] === ' ') {
        array.push(' ');
        continue;
    }
    const sample = [];
    //영어나 숫자라면 반대로
    for (let j = i; j < input.length; j++) {
        if (input[j] === ' ' || input[j] === '<' || input[j] === '>') {
           break; 
        }        
        sample.push(input[j]);
    }
    array.push(sample.reverse().join(''));
    i += sample.length - 1;
}
console.log(array.join(''))
 
//  소문자, 숫자, 공백, < > 로만 이루어짐 
// 시작과 끝은 공백x
// < > 가 있으면 번갈아 가며 등장, <이 먼저 등장 
