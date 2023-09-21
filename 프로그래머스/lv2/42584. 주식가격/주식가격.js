function solution(prices) {
    let answer = new Array(prices.length).fill(0);
    let stack = [];
    let length = prices.length;
    
    for(let i = 0; i < length; i++) {
        while(stack.length && prices[i] < prices[stack[stack.length - 1]]) {
            let temp = stack.pop();
            answer[temp] = i - temp;
        } 
        stack.push(i)
    }
    console.log(stack)
    
    while(stack.length) {
        let temp = stack.pop();
        // console.log(`answer[${temp}] = ${length} - ${temp} - 1`);
        answer[temp] = length - temp - 1;
    }
    
    return answer;
}