function solution(str1, str2) {
    //자카드 유사도 : 교집합의 크기 / 합집합의 크기
    
    //둘다 대문자로 바꿔주기
    str1 = str1.toUpperCase().split('');
    str2 = str2.toUpperCase().split('');
    
    // 두글자 씩 끊어주기
    let str1Array = [];
    let str2Array = [];
    
    let k = 0;
    
    
    while (k < str1.length - 1) {
        str1Array.push(str1.slice(k, k + 2));
        k++;
    }
    
    k = 0;
    while (k < str2.length - 1) {
        str2Array.push(str2.slice(k, k + 2));
        k++;
    }
    
    // 특수문자 걸러내기
    str1Array = str1Array.filter((item) => {
        if (item.join("").match(/[A-Z]/g) && item.join("").match(/[A-Z]/g).length === item.length) {
            return item;
        }
    }).map((item) => item.join(""));
    
    str2Array = str2Array.filter((item) => {
        if (item.join("").match(/[A-Z]/g) && item.join("").match(/[A-Z]/g).length === item.length) {
            return item;
        }
    }).map((item) => item.join(""))
    
    if (!str1Array.length && !str2Array.length) return 65536;
    
    // 교집합 구하기
    let firstMap = new Map();
    let secondMap = new Map();
    
    str1Array.forEach((item) => {
        if (firstMap.has(item)) {
            firstMap.set(item, firstMap.get(item) + 1);
        } else {
            firstMap.set(item, 1);
        }
    })
    
    str2Array.forEach((item) => {
        if (secondMap.has(item)) {
            secondMap.set(item, secondMap.get(item) + 1);
        } else {
            secondMap.set(item, 1);
        }
    })
     
    firstMap = [...firstMap];
    secondMap = [...secondMap];
    
    const same = [];
    const total = [];
    
    for (let i = 0; i < firstMap.length; i++) {
        for (let j = 0; j < secondMap.length; j++) {
            if (firstMap[i][0] === secondMap[j][0]) {
                same.push([firstMap[i][0], Math.min(firstMap[i][1], secondMap[j][1])]);
            }
        }
    }
    
    for (let i = 0; i < firstMap.length; i++) {
        let flag = 1;
        for (let j = 0; j < total.length; j++) {
            if (total[j][0] === firstMap[i][0]) {
                total.push([firstMap[i][0], Math.max(firstMap[i][1], total[j][1])]);
                flag = 0;
                break;
            }
        }
        if (flag) {
            total.push([firstMap[i][0], firstMap[i][1]]);
        }
    }
    
    for (let i = 0; i < secondMap.length; i++) {
        let flag = 1;
        for (let j = 0; j < total.length; j++) {
            if (total[j][0] === secondMap[i][0]) {
                total[j][1] = Math.max(secondMap[i][1], total[j][1]);
                flag = 0;
                break;
            }
        }
        if (flag) {
            total.push([secondMap[i][0], secondMap[i][1]]);
        }
    }
    
    let sameSum = 0;
    same.forEach((item) => {
        sameSum += item[1];
    })
    
    let totalSum = 0;
    total.forEach((item) => {
        totalSum += item[1];
    })
    
    return (parseInt((sameSum / totalSum) * 65536));
}