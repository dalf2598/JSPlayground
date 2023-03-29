function digPow(number, exponent){
    const numbers = number.toString().split('').map(i => Math.pow(Number(i), exponent++));
    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return (sum % number === 0) ? sum/number : -1;
}

function digPowV2(n, p) {
    var x = String(n).split("").reduce((s, d, i) => s + Math.pow(d, p + i), 0)
    return x % n ? -1 : x / n
}

console.log(digPow(89, 1));