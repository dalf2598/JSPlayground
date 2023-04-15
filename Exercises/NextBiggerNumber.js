const number = 17757619386;

function nextBigger(number){
    const value = number.toString().split('');
    let result = -1;
    
    if(value.length === 1) return result;

    if(value.length === 2){
        [value[value.length - 2], value[value.length - 1]] = [value[value.length - 1], value[value.length - 2]];
        result = parseInt(value.join(''));
    }else{
        for (let i = value.length - 1; i >= 0; i--) {
            if(value[i] > value[i - 1]){
                value.splice(i - 1, value.length, ...evaluate(value.slice(i - 1, value.length)));
                result = parseInt(value.join(''));
                break;
            }
        }
    }
    return (result > number) ? result : -1;
}

function evaluate(array){
    const pivot = array[0];
    const numbers = [...array].splice(1).sort((a,b) => a - b);
    let position = 0;

    for (let number of numbers) {
        if(number > pivot){
            position = array.indexOf(number);
            break;
        }    
    }
   
    [array[0], array[position]] = [array[position], array[0]];
    return [array[0], ...array.splice(1).sort((a,b) => a - b)];
}

function maxWithDigits(n) {
    return parseInt(n.toString().split("").sort(function (a, b) { return b - a; }).join(""));
}

function nextBiggerV2(n) {
    let mx = maxWithDigits(n)
    for (i = n + 1; i <= mx; i++)
        if (maxWithDigits(i) === mx)
            return i;
    return -1;
}

console.log(nextBigger(number));