function solution(places){
    const answer = [];
    
    places.forEach((place) => {
        const where = [];
        let flag = 1;
        
            for (let i = 0; i < place.length; i++) {
                for (let j = 0; j < place.length; j++) {
                    if (place[i][j] === 'P') {
                        where.push([i, j]);
                    }
                }
            }
        
        for (let i = 0; i < where.length - 1; i++) {
            const [x1, y1] = where[i];
            
            for (let j = i + 1; j < where.length; j++) {
                const [x2, y2] = where[j];
                
                if (Math.abs(x2 - x1) + Math.abs(y2 - y1) === 2) {
                    if (x2 === x1 && Math.abs(y2 - y1) === 2) {
                        if (place[x1][y2 - 1] !== "X") {
                            flag = 0;
                            break;
                        }
                    }
                    
                     if (Math.abs(x2 - x1) === 2 && y2 === y1 ) {
                        if (place[x2 - 1][y2] !== "X") {
                            flag = 0;
                            break;
                        }
                    }
                    
                     if (Math.abs(x2 - x1) === 1 && Math.abs(y2 - y1) === 1) {
                        if (place[x1][y2] ==="X" && place[x2][y1] === "X") {
                            continue;
                        }
                         flag = 0;
                    } 
                } 
                
                if (Math.abs(x2 - x1) + Math.abs(y2 - y1) === 1) {
                    flag = 0;
                    break;
                }
            }
        }
        
        if (flag) {
            answer.push(1);
            return ;
        } answer.push(0);
    })
    
    return answer;
}

// 5 x 5 대기실 5개 
// 맨허튼 거리 : |x1 - x2| + |y1 - y2|
// 맨허튼 거리가 2 이하로 x 
// 파티션으로 막혀있을경우에는 허용 