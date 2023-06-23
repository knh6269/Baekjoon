function solution(want, number, discount) {
    const sample = [];
    for (let i = 0; i < want.length; i++) {
        sample.push([want[i], number[i]]);
    }
    sample.sort();
    let answer = 0;
    
     for (let i = 0; i < discount.length - 9; i++) {
         const map = new Map();
         
         for (let j = 0; j < 10; j++) {
             if (map.get(discount[i + j] !== undefined && discount[i + j])) {
                 map.set(discount[i + j], map.get(discount[i + j]) + 1);
             } else {
                 map.set(discount[i + j], 1);
             }
         }
         
        const array = [...map].sort();
         let flag = 1;
          
         if (sample.length !== array.length) {
             continue;
         }
         
         for (let i = 0; i < sample.length; i++) {
             if (sample[i][0] !== array[i][0] || sample[i][1] !== array[i][1]) {
                 flag = 0;
             }
         }
         if (flag) {
             answer++;
         }
     }
    return answer;
}