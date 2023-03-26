const numbers = [1,5,8,1,10,3]
const k = 13;

function findSumPair(numbers, k) {
    let coincidences = [];
    let flag = true;

    for (let i = 0; i< numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if(numbers[i] + numbers[j] === k){
                coincidences.push([i, j]); 
                flag = false;    
            }    
        }
    }
    
    if(coincidences.length === 0 ) return [0,0];

    let pivot = [coincidences[0][0], coincidences[0][1]];

    for (let i = 1; i < coincidences.length; i++) {
        if(pivot[0] > coincidences[i][0]){
            pivot = [coincidences[i][0], coincidences[i][1]];
            continue;
        }

        if(pivot[0] === coincidences[i][0]){
            if(pivot[1] > coincidences[i][1]){
                pivot = [coincidences[i][0], coincidences[i][1]];
            }
        }
    }

    return (flag) ? [0,0]: pivot;
}

console.log(findSumPair(numbers,k));