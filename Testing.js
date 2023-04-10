const arr = ['', '^', '^'];

let result = arr.reduce((accumulator, currentValue) => {
    return (currentValue === '^') ? accumulator + 1 : accumulator;
}, 0);

const values = [ 8, 7, 5, 11, 6 ];
let temp = values.sort((a,b) => a - b)[0];

console.log(Math.ceil(temp/2));
