function solution(numbers) {
   const answer = [];
     
   const dfs = (index, array) => { 
       if (index === numbers.length) return ;
       
       const newArray = [...array, numbers[index]];
       
       if (newArray.length === 2) {
           answer.push(newArray[0] + newArray[1]);
           return ;
       }
       
       for (let i = index + 1; i < numbers.length; i++) {
           dfs(i, newArray);
       }
   }

   for (let i = 0; i < numbers.length; i++) {
       dfs(i, []);
   }

   const answers = [...new Set (answer)];
    
   return answers.sort((a, b) => a - b);
}