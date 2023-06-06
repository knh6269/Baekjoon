let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input.shift());

let tree = [...new Array(N + 1)].map(() => []);

const array = input[0].split(" ").map(Number);

const target = Number(input[1]);

let start = 0;

array.forEach((item, index) => {
    if (item !== -1) {
        tree[item].push(index);
    } else {
        start = index;
    }
})

const dfs = (start) => {
    if (start === target) return 0;
    let count = 0;
    const stack = [start];

    while(stack.length) {
        const node = stack.pop();
        if (!tree[node].length) {
            count++;
            continue;
        }
        stack.push(...tree[node]);
    }

    return count;
}

const erase = (target) => {
    tree.map((item) => {
        if (item.includes(target)) {
            item.splice(item.indexOf(target), 1);
        }
    })

    const stack = [target];
    while(stack.length) {
        const node = stack.pop();
        stack.push(...tree[node]);
        tree[node] = [];
    }
}

erase(target);
console.log(dfs(start));