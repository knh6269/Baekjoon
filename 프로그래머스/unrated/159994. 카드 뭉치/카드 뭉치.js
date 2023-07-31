function solution(cards1, cards2, goal) {
    
    const card1 = [];
    const card2 = [];
    
    for (let str of cards1) {
        const index = goal.indexOf(str);
        card1.push(index);
    }
    
    for (let str of cards2) {
        const index = goal.indexOf(str);
        card2.push(index);
    } 
    
    let flag = 1;
    
    for (let i = 0; i < card1.length - 1; i++) {
        if (card1[i] === -1 && card1[i + 1] !== -1) {
            flag= 0;
        }
        
        if (card1[i + 1] < card1[i]  && card1[i + 1] !== -1) {
            flag = 0;
        }    
    }
    for (let i = 0; i < card2.length - 1; i++) {
         if (card2[i] === -1 && card2[i + 1] !== -1) {
            flag= 0;
        }
        if (card2[i + 1] < card2[i] && card2[i + 1] !== -1) {
            flag = 0;
        }    
    }
    
    if (flag) return "Yes";
    return "No"
}