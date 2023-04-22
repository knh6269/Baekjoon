let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const testCase = Number(input.shift())

const print = (queue, important) => {
    let count = 0

    while (queue.length) {
        const node = queue.shift()
        
        let max = node[0]

        for (let i = 0; i < queue.length; i++) {
            if (queue[i][0] > max) {
                max = queue[i][0]
            }    
        }
        
        if (max !== node[0]) {
            queue.push(node)
            continue
        }

        count++

        if (node[1] === important) {
            console.log(count)
            continue
        }
        
    }
}
for (let i = 0; i < testCase; i++) {
    const [size, important] = input.shift().split(' ').map(Number)
    let queue = input.shift().split(' ').map(Number)
    queue = queue.map((item, index) => [item, index])
    
    print(queue, important)
}

