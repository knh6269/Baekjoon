function solution(numbers, target) { 
    const sum = numbers.reduce((acc, cur) => acc + cur);
    const diff = sum - target;
    let answer = 0;
    
    const dfs = (index, arraySum) => { 
        if (index === numbers.length) {
            if (target === arraySum) answer++;
            return ;
        }
        
        const plusResult = arraySum + numbers[index];
        const minusResult = arraySum - numbers[index];
        
        dfs(index + 1, plusResult);
        dfs(index + 1, minusResult);
        
    }
    
     dfs(0, 0)
    
    return answer;
     
}