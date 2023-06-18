const check = (string) => {
    if ([4,6].includes(string.length) && string.match(/[0-9]/g).length === string.length) return true;
    return false;
}

function solution(s) {
    return check(s)
}
