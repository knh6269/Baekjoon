const getDivideNumber = (num) => {
    let count = 0;
    
    for (let i = 1; i < Math.sqrt(num); i++) {
        if (num % i === 0) count+=2;
    }  
    return count + Number.isInteger(Math.sqrt(num));
}

function solution(number, limit, power) {
    let result = 0;
    
    for (let i = 1; i <= number; i++) {
        const num = getDivideNumber(i);
        if (num > limit) {
            result += power;
            continue;
        }
        result += num;
    }
    return result;
}

