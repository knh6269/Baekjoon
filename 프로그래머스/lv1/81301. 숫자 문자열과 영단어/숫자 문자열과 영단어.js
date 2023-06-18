function solution(s) {
    const array = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    
    for (let i = 0; i < array.length; i++) {    

        if (s.includes(array[i])) {
            const index = s.indexOf(array[i]);
            s = s.split("");
            s.splice(index, array[i].length, i);
            s = s.join("");
            i = -1;
        }
    }
    
    return Number(s);
}