const howSum = ( targetSum, numbers) =>{
    if(targetSum === 0) return true;
    if(targetSum < 0) return false;
    
    for(let num of numbers){
        const remainder = targetSum - num;
        if(howSum(remainder, numbers) === true){
            return true;
        }
    }
    return false;
}

const canSumOp = ( targetSum, numbers, memo = {}) =>{
    if(targetSum in memo) return memo[targetSum];
    if(targetSum === 0) return true;
    if(targetSum < 0) return false;
    
    for(let num of numbers){
        const remainder = targetSum - num;
        if(canSumOp(remainder, numbers, memo) === true){
            memo[targetSum] = true;
            return true;
        }
    }

    memo[targetSum] = false;
    return false;
}

console.log(howSum(7, [2,3])); //true
console.log(howSum(7, [5,3,4,7])); // true
console.log(howSum(7, [2,4])); // false
console.log(howSum(8, [2,3,5])); // true
console.log(canSumOp(300, [7,14])); //false