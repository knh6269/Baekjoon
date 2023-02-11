let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();
let primeVisited = Array(10001).fill(0);

const isPrime = () => {
    for (let i = 2; i < 10000; i++) {
        if (!primeVisited[i]) {
            for (let j = i * 2; j < 10000; j += i) {
                primeVisited[j] = 1;
            }
        }
    }
}



const bfs = (from, count, to) => {
    let ss = 1;
    const queue = [[from, count]];

    while (queue.length) {
        let [node, count] = queue.shift();

        if (node == to) {
            console.log(count);
            ss = 0;
            return ;
        }

        if (!primeVisited[node]) {
            primeVisited[node] = 1;
        }

        node = String(node).split('');

        if (node.length < 4) {
            while (node.length < 4) {
                node.push('0');
            }
            node.reverse();    
        }

        for (let i = 0; i < 4; i++) {
            let sample = [...node];
            for (let j = 0; j <= 9; j++) {
                if (i === 0 && j ===0) continue
                sample[i] = j;
                
                if (!primeVisited[Number(sample.join(''))]) {
                    queue.push([Number(sample.join('')), count + 1]);
                }
            }    
        } 
    }
    if (ss) {
        console.log('Impossible');
        return ;
    }
}

for (let i = 0; i < input.length; i++) {
    primeVisited = primeVisited.map(() => 0);
    isPrime();
    const [from, to] = input[i].split(' ');
    bfs(Number(from), 0, to); 
}

