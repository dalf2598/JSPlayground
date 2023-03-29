const numbers = [1,2,3,4,3,2,1];

function findEvenIndex(numbers){
    let pivot = -1; 
    while(pivot++ < numbers.length - 1){
        const left = numbers.slice(0, pivot).reduce((i,j) => i + j, 0);
        const right = numbers.slice(pivot + 1, numbers.length).reduce((i,j) => i + j, 0);
        if(left === right) return pivot;
    }
    return -1;
}

console.log(findEvenIndex(numbers));