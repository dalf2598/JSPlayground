const list = [56, 92, 3, 30, 77, 85, 1, 6, 71, 9, 25, 63, 48, 80, 33, 17, 96, 50, -2, 88, -3];

function closestToZero(ts) {

    if(ts.length === 0 ) return 0;
        
    let swaps = true;
    let negatives = false;

    while(swaps){
        swaps = false;
        for(let i = 0; i < ts.length; i++){
            if(ts[i] < 0 ) negatives = true;
            
            if (ts[i] > ts[i + 1]) {
                [ts[i], ts[i + 1]] = [ts[i + 1], ts[i]]
                swaps = true;
            }
        }   
    }

    if(!negatives) return ts[0];

    for (let i = 0; i < ts.length; i++) {
        if (ts[i] < 0 && ts[i + 1] > 0) {
            if (Math.abs(ts[i]) === ts[i + 1] || Math.abs(ts[i]) > ts[i + 1]) {
                return ts[i + 1];
            }
            return ts[i];
        }
    }
}

const closestToZeroV2 = (list) => {

    if(list.length === 0) return 0;

    let pivot = list[0];

    for (let i = 1; i < list.length; i++) {
        if(pivot < 0 && list[i] < 0 && Math.abs(pivot) > Math.abs(list[i])){
            pivot = list[i];
            continue;
        }
        
        if(pivot < 0 && list[i] > 0 && Math.abs(pivot) === list[i]){
            pivot = list[i];
            continue;
        }
        
        if(pivot > 0 && list[i] < 0 && pivot > Math.abs(list[i])){
            pivot = list[i];
            continue;
        }
        
        if(pivot > 0 && list[i] > 0 && pivot > list[i]){
            pivot = list[i];
            continue;
        }
    }

    return pivot;
}

console.log(closestToZeroV2(list));