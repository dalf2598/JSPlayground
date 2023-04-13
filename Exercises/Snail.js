const array = [[1,  2,  3,  4],
               [5,  6,  7,  8],
               [9,  10, 11, 12],
               [13, 14, 15, 16]];

const array2 = [[1, 2, 3],
                [4, 5, 6],
                [7, 8, 9]];

const array3 = [[1, 2],
                [4, 5]]

function snail(array){
    if(array[0].length === 0) return [];
    if(array[0].length === 1) return [array[0][0]];
    
    const rounds = Math.ceil(array[0].length/2);
    let result = [];
    
    for (let i = 0; i < rounds; i++) {
        result.push(...round(array, i));
    }

    return result;
}

function round(array, round){
    
    let firstRow = []; let secondRow = []; 
    let firstColumn = []; let secondColumn = []; 

    for (let i = round; i < array.length - round; i++) {
        firstRow.push(array[round][i]);
        secondRow.push(array[array.length - round - 1][i]);
        if(i === array.length - round - 1) secondRow.reverse();
    }

    for (let i = round + 1; i < array.length - round - 1; i++) {
        firstColumn.push(array[i][array.length - round - 1]);
        secondColumn.push(array[i][round]);
        if(i === array.length - round - 2) secondColumn.reverse();
    }
    
    let result = [...firstRow, ...firstColumn, ...secondRow, ...secondColumn];

    return (firstRow.length === 1) ? firstRow : result;
}


function snailV2(array) {
    var vector = [];
    while (array.length) {
      vector.push(...array.shift());
      array.map(row => vector.push(row.pop()));
      array.reverse().map(row => row.reverse());
    }
    return vector;
}

snail(array2);