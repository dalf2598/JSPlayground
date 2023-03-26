let a = [1,2,2,2,3];
let b = [2,1];

function arrayDiff(a, b) {  
    for(let i = 0; i < b.length; i++){
        for(let j = 0; j < a.length; j++){
            if (b[i] == a[j]){
                delete a[j]; 
            } 
        }
    }
    return a.filter( n => n);
}

function diff(a,b){
    return a.filter( item => !b.includes(item));
}



//console.log(arrayDiff(a,b));
console.log(diff(a,b));