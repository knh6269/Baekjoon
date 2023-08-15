function solution(ingredient) {
    // 빵 : 1
    // 고기 : 2
    // 야채 : 3
    // 빵 : 1 
    let result = 0; 
    const stack = [];
    
    for (let num of ingredient) {
        stack.push(num);
    
        if (stack.slice(-4).join('') === '1231') {
            stack.splice(-4);
            result++;
        }
    }
    
    
    
    return result;
}