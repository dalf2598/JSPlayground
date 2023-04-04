function getPINs(observedPin) {
    const adjacentsValues = new Map();
    adjacentsValues.set(1, [1,2,4]);
    adjacentsValues.set(2, [1,2,3,5]);
    adjacentsValues.set(3, [2,3,6]);
    adjacentsValues.set(4, [1,4,5,7]);
    adjacentsValues.set(5, [2,4,5,6,8]);
    adjacentsValues.set(6, [3,5,6,9]);
    adjacentsValues.set(7, [4,7,8]);
    adjacentsValues.set(8, [5,7,8,9,0]);
    adjacentsValues.set(9, [6,8,9]);
    adjacentsValues.set(0, [0,8]);

    let adjacents = [];
    let combinations = [[]];

    for(let digit of observedPin.split('')){
        adjacents.push(adjacentsValues.get(parseInt(digit)));
    }
    
    for (let i = 0; i < adjacents.length; i++) {
        let currentArray = adjacents[i];
        let currentCombinations = [];
        for (let j = 0; j < currentArray.length; j++) {
          for (let k = 0; k < combinations.length; k++) {
            currentCombinations.push([...combinations[k], currentArray[j]]);
          }
        }
        combinations = currentCombinations;
      }
      return combinations.map(combination => combination.join(''));
}

console.log(getPINs('898'));