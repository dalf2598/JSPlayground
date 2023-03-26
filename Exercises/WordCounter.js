const words = ['the', 'dog', 'got', 'the', 'bonte'];

function countFrequencies(words) {
    
    let temp = words.sort()
    let sorted = temp.filter((x, y) => temp.indexOf(x) === y);
    let ocurrences = []; 

    for (let i = 0; i < sorted.length; i++) {
        for (let j = 0; j < words.length; j++) {
            if(sorted[i] === words[j]){                
                (ocurrences[i] == null) ? ocurrences.push(1) : ocurrences[i] += 1; 
            }
        }
    }
    
    return ocurrences;
}

console.log(countFrequencies(words));