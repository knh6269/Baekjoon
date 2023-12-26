function solution(players, callings) {
    //추월한 선수의 이름을 부름 
    const map = new Map();
    
    for (let i = 0; i < players.length; i++) { 
        map.set(players[i], i);
    }
    
    for (let calling of callings) {
        const currIdx = map.get(calling);
        const front = players[currIdx - 1];
        
        [players[currIdx - 1], players[currIdx]] = [players[currIdx], players[currIdx - 1]];
        
        map.set(calling, map.get(calling) - 1);
        map.set(front, map.get(calling) + 1);
    }  
    
  return (players)
}