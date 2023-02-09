let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();

input = input.map((item) => item.split(' '));
const tree= [];
let answer = '';

for (let i = 0; i < input.length; i++) {
    tree[input[i][0]] = [input[i][1], input[i][2]];
}

const before = (node) => {
   if (node === '.') return ;

    answer += node;
    before(tree[node][0]);
    before(tree[node][1]);
}

const middle = (node) => {
    if (node === '.') return ;

    middle(tree[node][0]);
    answer += node;
    middle(tree[node][1]);

}

const after = (node) => {
    if (node === '.') return ;

    after(tree[node][0]);
    after(tree[node][1]);
    answer += node;
}

before('A');
console.log(answer);
answer = '';
middle('A');
console.log(answer);
answer = '';
after('A');
console.log(answer);