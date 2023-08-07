function solution(babbling) {
    const array = ["aya", "ye", "woo", "ma"];
    let answer = 0 ;
    
    const check = (str) => {
        let string = str;
        let cur = "";
        
        while(1) { 
            if (string.length === 0) return true;
            let flag = 1;

            for (let i = 0; i < array.length; i++) {
                 
            if (string.indexOf(array[i]) === 0 && cur !== array[i]) {
                flag = 0; 
                cur = array[i]
                string = string.substring(array[i].length);
                i = 0;
            }
            }
            if (flag) return false;
        }   
        return true;
    }
    
    for (let str of babbling) { 
        answer += (Number(check(str)))
    }
    
    return answer;
}