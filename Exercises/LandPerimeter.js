const islands = ['XOOO',
                 'XOXO',
                 'XOXO',
                 'OOXX',
                 'OOOO'];

function landPerimeter(islands) {
    let total = 0;
    for (let i = 0; i < islands.length; i++) {
        for (let j = 0; j < islands[i].length; j++) {

            if(islands[i][j] === 'X'){
                total += 4;

                if (j < islands[i].length - 1) {
                    if (islands[i][j] === islands[i][j + 1]) total -= 2;
                }
                
                if(i < islands.length - 1){
                    if (islands[i][j] === islands[i + 1][j]) total -= 2;
                }
            }
        }
    }
    return `Total land perimeter: ${total}`;
}

console.log(landPerimeter(islands));