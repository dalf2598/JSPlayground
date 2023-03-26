import {rawList, isSorted} from './Helper.js';
/*
    Traverse list 
    Check if list[n] > list[n+1]
    Swap places if necessary
*/
function bubbleSort(list){
    for(let i = 1; i <= list.length; i++){
        for(let j = 0; j < list.length; j++){
            if(list[j] > list[j+1]){
                [list[j+1], list[j]] = [list[j], list[j+1]];
            }
        }   
    }
    return list;
}

function bubbleSortV2(list){
    let swap = true;
    
    while(swap) {
        swap = false;
        for (let i = 0; i < list.length; i++) {
            if (list[i] > list[i + 1]) {
                [list[i], list[i + 1]] = [list[i + 1], list[i]]
                swap = true;
            }
        }
    }
    return list;
}

const sortedList = bubbleSortV2(rawList);
console.log(`Bubble Sort`);
console.log(sortedList);
console.log(`Sorted -> ${isSorted(sortedList)}`);

