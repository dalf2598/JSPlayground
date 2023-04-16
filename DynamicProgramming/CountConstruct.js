const countConstruct = (target, wordBank, memo = {}) => {
    if(target in memo) return memo[target];
    if(target === '') return 1;
    
    let totalCount = 0;

    for (let word of wordBank){
        if(target.indexOf(word) === 0){
            const suffix = target.slice(word.length);
            totalCount += countConstruct(suffix, wordBank, memo);
        }
    }

    memo[target] = totalCount;
    return totalCount;
}


console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); //1
console.log(countConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); //0
console.log(countConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])); //4
console.log(countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', 
            ['e', 
             'ee', 
             'eee', 
             'eeee', 
             'eeeeee', 
             'eeeeeeee', 
             'eeeeeeeeeee'])); //0