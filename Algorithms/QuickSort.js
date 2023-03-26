import {rawList,isSorted} from './Helper.js';

const sample = [4,1,5,6,7,3,2];

function quickSortRecursive(list, low, high){
    
    if(low < high){
        let pivot_location = partitionHighPivot(list, low, high);
        
        console.log(list);

        quickSortRecursive(list, low, pivot_location - 1);

        quickSortRecursive(list, pivot_location + 1, high);
    }

    return list;
}

//Take first element as pivot
function partitionLowPivot(list, low, high){

    let pivot = list[low];
    let j = low + 1;

    for(let i = low + 1; i <= high; i++){
        if(list[i] < pivot){
            [list[i], list[j]] = [list[j], list[i]];  
            j++;
        }
    }
    /*
        pivot is at position 0
        substract 1 because we are starting from position 1
    */
    j--; 
    [list[low], list[j]] = [list[j], list[low]]; 

    return j;
}


//Take last element as pivot
function partitionHighPivot(list, low, high){

    let pivot = list[high];
    let j = low;

    for(let i = low; i < high; i++){
        if(list[i] < pivot){
            [list[i], list[j]] = [list[j], list[i]];  
            j++;
        }
    }

    [list[high], list[j]] = [list[j], list[high]]; 

    return j;
}

//Take half element as pivot
function quickSortMedian(list){

    if(list.length < 2){
        return list;
    }

    const median = Math.ceil((list.length - 1)/2);
    const pivot = list[median];
    let left = [];
    let right = [];

    for (let i = 0; i < list.length; i++) {
        if(i === median){
            continue;
        }else{
            (list[i] < pivot) ? left.push(list[i]): right.push(list[i]);
        }
    }

    return [...quickSortMedian(left), pivot, ...quickSortMedian(right)];
}

//console.log(quickSortMedian(sample));
const sortedList = quickSortMedian(rawList)
console.log(`Quick Sort`);
console.log(sortedList);
console.log(`Sorted -> ${isSorted(sortedList)}`);
