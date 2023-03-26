const ts = [-5, 4, 8, 4, -3, 6];
const list = [56, 92, 3, 30, 77, 85, 42, 6, 71, 9, 25, 63, 48, 80, 33, 17, 96, 50, -2, 88, -3];


function computeClosestToZero(ts) {

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

console.log(computeClosestToZero(list));