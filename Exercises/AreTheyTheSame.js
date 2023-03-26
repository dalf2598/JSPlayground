const a = [121, 144, 19, 161, 19, 144, 19, 11]  
const b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]

function compV1(array1, array2){
    if(array1 == null || array1 == null) return false;
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if(array1[i] === Math.sqrt(array2[j])){
                array2.splice(j,1);
                break;
            }
            if(j === array2.length - 1) return false;
        }
    }
    return true;
}

function compV2(array1, array2){
    if(array1 === null || array1 === null) return false;
    array1.sort((a, b) => a - b); array2.sort((a, b) => a - b);
    
    return array1.map(i => i * i).every((i, j) => i === array2[j]);
}
console.log(compV2(a,b));