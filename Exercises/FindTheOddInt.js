const numbers = [2,5,5,3,3,2,3];

function findOdd(numbers) {
    if (numbers.length === 0 || numbers.length === 1) return numbers[0];
    numbers.sort((a,b) => a - b);
    let even = 0;
    for (let i = 0; i < numbers.length; i++) {
        if(numbers[i] === numbers[i+1]){
            even++;
        }else{
            if(even % 2 === 0) return numbers[i]; 
            even = 0;
        }
    }
}

const findOddV2 = (xs) => xs.reduce((a, b) => a ^ b);

function findOddV3(arr) {
    return arr.find((item) => arr.filter(el => el == item).length % 2)
}
  
console.log(findOddV3(numbers));