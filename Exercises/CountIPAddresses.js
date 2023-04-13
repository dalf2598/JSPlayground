const start = "50.0.0.0";
const end = "50.1.1.1";

function ipsBetween(aStart, aEnd){
    let start = aStart.split('.'); let end = aEnd.split('.');  
    let result = 0;
  
    for (let i = 0; i < 4; i++) {
        if(end[i] > start[i]){
            result += (end[i] - start[i]) * 256 **(3 - i); 
        }else{
            result -= (start[i] - end[i]) * 256 **(3 - i);
        }
    }

    return result;
}


function ipsBetweenV2(start, end){
    const ip1 = start.split('.')
    const ip2 = end.split('.')
    
    let result = 0
    for (let i = 0; i < 4; i++) {
      result += (ip2[i] - ip1[i]) * 256 ** (3 - i)
    }
    
    return result
}

console.log(ipsBetween(start,end));
console.log(ipsBetweenV2(start,end));