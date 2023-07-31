function solution(s, skip, indexs) {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let answer = "";
    
    // 제거부터 
    for (let str of skip) {
        const index = alphabet.indexOf(str);
        
        alphabet.splice(index, 1);
    }
     
    // 뒤로 밀기
    for (let str of s) {
        const index = alphabet.indexOf(str);
        
        answer += alphabet[(index + indexs) % alphabet.length];
    }
    
    return answer;
}