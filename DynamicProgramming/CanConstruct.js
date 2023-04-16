const canConstruct = (target, wordBank) => {
    if(target === '') return true;
  
    for (let word of wordBank){
        const prefix = target.slice(0, word.length);
        if (prefix === word) {
            const remainder = target.replace(word,'') 
            if( canConstruct( remainder, wordBank ) === true ){ 
                return true;
            }
        }   
    }
    return false;
}

const canConstructV2 = (target, wordBank) => {
    if(target === '') return true;
    
    for (let word of wordBank){
        if(target.indexOf(word) === 0){
            const suffix = target.slice(word.length);
            if(canConstructV2(suffix, wordBank) === true){
                return true;
            }
        }
    }

    return false;
}

const canConstructOp = (target, wordBank, memo = {}) => {
    if(target in memo) return memo[target];
    if(target === '') return true;
    
    for (let word of wordBank){
        if(target.indexOf(word) === 0){
            const suffix = target.slice(word.length);
            if(canConstructOp(suffix, wordBank, memo) === true){
                memo[target] = true;
                return true;
            }
        }
    }

    memo[target] = false;
    return false;
}

console.log(canConstructV2('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); //true
console.log(canConstructV2('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); //false
console.log(canConstructV2('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])); //true
console.log(canConstructOp('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', 
            ['e', 
             'ee', 
             'eee', 
             'eeee', 
             'eeeeee', 
             'eeeeeeee', 
             'eeeeeeeeeee']));