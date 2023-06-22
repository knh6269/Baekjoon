function solution(n, t, m, p) {
    // n = 진법
    // t = 미리 구할 숫자의 개수 
    // m = 게임 인원
    // p = 튜브의 순서
    // 튜브가 말해야할 수를 출력해주는 프로그램
    
    let i = 0;
    let count = 0;
    let str = "";
    let answer = "";
    
    while (str.length <= t * m) {
        str += i.toString(n);
        i++;  
    }
    console.log(str)
    for (let i = 0; i < str.length; i++) {
        if (answer.length === t) break;
        if ((i + 1) % m === p || ((i + 1) % m === 0 && m === p)) {
          answer += str[i];
        }
    }
    
    return answer.toUpperCase();
}