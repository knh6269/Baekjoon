def solution(s, skip, index): 
    alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g','h', 'i', 'j', 'k', 'l', 'm','n','o','p','q','r','s','t','u','v','w','x','y','z']
    
    for i in skip:
        skipIndex = (alphabet.index(i))
        alphabet.pop(skipIndex)
        
    result = []
 
    for j in s:
        newIndex = (alphabet.index(j) + index) % len(alphabet)
        result.append(alphabet[newIndex])
        
    
    return (''.join(result))