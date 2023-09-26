function solution(survey, choices) {
    const map = new Map();
     
    for (let i = 0; i < choices.length; i++) {
        const choice = choices[i]; 
        
        const [first, second] = survey[i].split(''); 
        
        if (!map.has(first)) map.set(first, 0); 
        if (!map.has(second)) map.set(second, 0);
        
        switch (choice) {
            case 1: map.set(first,(map.get(first) + 3));
                    break; 
            case 2: map.set(first,(map.get(first) + 2));
                    break; 
            case 3: map.set(first,(map.get(first) + 1));
                    break; 
            case 5: map.set(second,(map.get(second) + 1));
                    break; 
            case 6: map.set(second,(map.get(second) + 2));
                    break; 
            case 7: map.set(second,(map.get(second) + 3));
                    break; 
        }
    }
    
    const answer = [];
    const mbti_1 = ['R', 'C', 'J', 'A'];
    const mbti_2 = ['T', 'F', 'M', 'N'];
    
    for (let i = 0; i < 4; i++) {
        if (!map.has(mbti_1[i])) map.set(mbti_1[i], 0); 
        if (!map.has(mbti_2[i])) map.set(mbti_2[i], 0);
        
        const mbti1 = map.get(mbti_1[i]);
        const mbti2 = map.get(mbti_2[i]);
        
        if (mbti1 > mbti2) {
            answer.push(mbti_1[i]);
        } 
        
        if (mbti1 === mbti2) {
            const sortArray = [mbti_1[i], mbti_2[i]].sort((a, b) => a - b);
            answer.push(sortArray[0]);
        }
        
        if (mbti1 < mbti2) {
            answer.push(mbti_2[i])
        }
    }
    return answer.join('');
}
//1번 : RT
//2번 : CF
//3번 : JM
//4번 : AN
//매우 비동의(네오3) - 비동의 - 약간 비동의 - 모르겠음 - 약간 동의 - 동의 - 매우 동의(어피치 3)
