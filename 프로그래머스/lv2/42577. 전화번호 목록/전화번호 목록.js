function solution(phone_book) {
    const array = [...phone_book].sort();
     
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] === array[i + 1].substring(0, array[i].length)) return false;
    }
    return true;
}