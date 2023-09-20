function solution(numbers) {
    const length = numbers.length;
    const stack =  [];
    const visited = new Array(numbers.length).fill(-1);
    
    for (let i = length - 1; i>=0; i--) { 
        while (stack.length && numbers[i] >= stack[stack.length - 1]) { 
            stack.pop();
        } 
        if (stack.length) {
            visited[i] = stack[stack.length - 1]
        }
        stack.push(numbers[i])
    }
    return visited;
}