const arr = ['', '^', '^'];

let result = arr.reduce((accumulator, currentValue) => {
    return (currentValue === '^') ? accumulator + 1 : accumulator;
}, 0);

const values = [ 8, 7, 5, 11, 6 ];
let temp = values.sort((a,b) => a - b)[0];

const remainder = 16/5;  

const value = 255;
console.log(value.toString(16));