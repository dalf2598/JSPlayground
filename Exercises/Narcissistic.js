let value = 153;

function narcissistic(value) {
    let number = value.toString();
    let sum = 0;
    for(let i=0; i<number.length; i++){
        sum += Math.pow(parseInt(number[i]), number.length);
    }
    
    return (sum == value) ? true : false;  
}

console.log(narcissistic(value));
  