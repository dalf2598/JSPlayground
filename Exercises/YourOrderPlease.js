const words = 'is2 Thi1s T4est 3a'

function order(words){
    if(words.length === 0) return '';
    words = words.split(' ');
    let j = 0, result = [];
    while(words.length > j++){
        for (let word of words) {
            if(word.includes(j.toString())){
                result.push(word);
                break;
            }
        }
    }
    return result.join(' ');
}

function orderV2(words){
    if(words.length === 0) return '';
    
    words = words.split(' ');

    return words.map((i,j) => words.filter((h) => h.includes(String(j+1)))).join(' ');
}

function orderV3(words) {

    return words.split(' ').sort(function (a, b) {
        return a.match(/\d/) - b.match(/\d/);
    }).join(' ');
}    

console.log(orderV3(words));