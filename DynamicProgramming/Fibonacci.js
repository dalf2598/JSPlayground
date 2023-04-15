const fib = (n) =>{
    if(n <= 2) return 1;
    return fib(n - 1) + fib (n - 2);;
};

const fibOp = (n, memo = {}) =>{
    if(n in memo) return memo[n];
    if(n <= 2) return 1;
    memo[n] = fibOp(n - 1, memo) + fibOp (n - 2, memo);
    return memo[n];
};

console.log(fib(50));

